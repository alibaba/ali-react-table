import cx from 'classnames'
import React, { CSSProperties, ReactNode } from 'react'
import { animationFrameScheduler, BehaviorSubject, combineLatest, noop, of, Subscription, timer } from 'rxjs'
import * as op from 'rxjs/operators'
import { ArtColumn } from '../interfaces'
import { safeGetRowKey, safeGetValue } from '../internals'
import EmptyTable from './empty'
import getDerivedStateFromProps from './getDerivedStateFromProps'
import TableHeader from './header'
import ItemSizeStore from './helpers/ItemSizeStore'
import SpanManager from './helpers/SpanManager'
import { getVisiblePartObservable } from './helpers/visible-part'
import {
  FullRenderRange,
  HorizontalRenderRange,
  HozWrappedCol,
  TableDoms,
  VerticalRenderRange,
  VirtualEnum,
} from './interfaces'
import Loading from './loading'
import { BaseTableCSSVariables, Classes, Styled } from './styles'
import {
  getScrollbarSize,
  LOADING_ICON_SIZE,
  OVERSCAN_SIZE,
  query,
  queryAll,
  shallowEqual,
  STYLED_REF_PROP,
  sum,
  syncScrollLeft,
  throttledWindowResize$,
} from './utils'

export interface BaseTableProps {
  /** 主键 */
  primaryKey?: string | ((record: any, rowIndex: number) => string)
  /** 表格展示的数据源 */
  dataSource: any[]
  /** 表格的列配置 */
  columns: ArtColumn[]

  /** 是否开启虚拟滚动 */
  useVirtual?: VirtualEnum | { horizontal?: VirtualEnum; vertical?: VirtualEnum; header?: VirtualEnum }

  /** 表格头部是否置顶，默认为 true */
  isStickyHead?: boolean
  /** 表格置顶后，距离顶部的距离 */
  stickyTop?: number
  /** 表格置顶后，距离底部的距离 */
  stickyBottom?: number
  /** 自定义类名 */
  className?: string
  /** 自定义内联样式 */
  style?: CSSProperties & BaseTableCSSVariables
  /** 表格是否具有头部 */
  hasHeader?: boolean
  /** 使用来自外层 div 的边框代替单元格的外边框 */
  useOuterBorder?: boolean
  /** 表格是否在加载中 */
  isLoading?: boolean
  /** 数据为空的时候的表格内容展现 */
  emptyContent?: ReactNode
  /** 列的默认宽度 */
  defaultColumnWidth?: number

  /** 表格所处于的块格式化上下文(BFC)
   * https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context */
  flowRoot?: 'auto' | 'self' | (() => HTMLElement | typeof window) | HTMLElement | typeof window

  getRowProps?(record: any, rowIndex: number): React.HTMLAttributes<HTMLTableRowElement>
}

export interface BaseTableState {
  flat: { full: ArtColumn[]; left: ArtColumn[]; center: ArtColumn[]; right: ArtColumn[] }
  nested: { full: ArtColumn[]; left: ArtColumn[]; center: ArtColumn[]; right: ArtColumn[] }
  stickyLeftMap: Map<number, number>
  stickyRightMap: Map<number, number>

  /** 是否要展示自定义滚动条(stickyScroll) */
  hasScroll: boolean

  /** 是否需要渲染 lock sections
   * 当表格较宽时，所有的列都能被完整的渲染，此时不需要渲染 lock sections
   * 只有当「整个表格的宽度」小于「每一列渲染宽度之和」时，lock sections 才需要被渲染 */
  needRenderLock: boolean

  /** 是否需要启用虚拟滚动 */
  useVirtual: {
    horizontal: boolean
    vertical: boolean
    header: boolean
  }

  /** 纵向虚拟滚动偏移量 */
  offsetY: number
  /** 纵向虚拟滚动 最大渲染尺寸 */
  maxRenderHeight: number
  /** 横向虚拟滚动偏移量 */
  offsetX: number
  /** 横向虚拟滚动 最大渲染尺寸 */
  maxRenderWidth: number
}

export class BaseTable extends React.Component<BaseTableProps, BaseTableState> {
  static defaultProps = {
    isStickyHead: true,
    stickyTop: 0,
    stickyBottom: 0,
    useVirtual: 'auto',
    hasHeader: true,
    isLoading: false,
    getRowProps: noop,
    flowRoot: 'auto',
  }

  static getDerivedStateFromProps = getDerivedStateFromProps

  private store = new ItemSizeStore()

  private artTableWrapperRef = React.createRef<HTMLDivElement>()
  private doms: TableDoms
  private rootSubscription = new Subscription()

  private data$: BehaviorSubject<{
    props: BaseTableProps
    state: BaseTableState
    prevProps: BaseTableProps | null
    prevState: BaseTableState | null
  }>

  getDoms() {
    return this.doms
  }

  constructor(props: Readonly<BaseTableProps>) {
    super(props)

    this.state = {
      ...getDerivedStateFromProps(props, null),
      hasScroll: true,
      needRenderLock: true,
      offsetY: 0,
      offsetX: 0,
      // 因为 ResizeObserver 在一开始总是会调用一次所提供的回调函数
      // 故这里为 maxRenderHeight/maxRenderWidth 设置一个默认值即可（因为这两个默认值很快就会被覆盖）
      // https://stackoverflow.com/questions/60026223/does-resizeobserver-invokes-initially-on-page-load
      maxRenderHeight: 600,
      maxRenderWidth: 800,
    }
  }

  /** 自定义滚动条宽度为table宽度，使滚动条滑块宽度相同 */
  private updateStickyScroll() {
    const { stickyScroll, artTable, stickyScrollItem } = this.doms

    if (!artTable) {
      return
    }
    const tableBodyInnerTable = artTable.querySelector(`.${Classes.tableBody} table`) as HTMLTableElement
    const innerTableWidth = tableBodyInnerTable.offsetWidth
    const artTableWidth = artTable.offsetWidth

    const scrollbarSize = getScrollbarSize()
    stickyScroll.style.marginTop = `-${scrollbarSize.height}px`

    if (artTableWidth >= innerTableWidth) {
      if (this.state.hasScroll) {
        this.setState({ hasScroll: false })
      }
    } else {
      if (!this.state.hasScroll && scrollbarSize.height > 5) {
        // 考虑下mac下面隐藏滚动条的情况
        this.setState({ hasScroll: true })
      }
    }
    // 设置子节点宽度
    stickyScrollItem.style.width = `${innerTableWidth}px`
  }

  private renderTableHeader({ horizontal: hoz }: FullRenderRange) {
    const { stickyTop, hasHeader } = this.props
    const { flat, nested, useVirtual, stickyLeftMap, stickyRightMap } = this.state

    return (
      <div className={Classes.tableHeader} style={{ top: stickyTop, display: hasHeader ? 'block' : 'none' }}>
        <TableHeader
          nested={nested}
          flat={flat}
          hoz={hoz}
          useVirtual={useVirtual}
          stickyLeftMap={stickyLeftMap}
          stickyRightMap={stickyRightMap}
        />
      </div>
    )
  }

  private updateOffsetX(nextOffsetX: number) {
    if (this.state.useVirtual.horizontal) {
      if (Math.abs(nextOffsetX - this.state.offsetX) >= OVERSCAN_SIZE / 2) {
        this.setState({ offsetX: nextOffsetX })
      }
    }
  }

  private syncHorizontalScrollFromTableBody() {
    this.syncHorizontalScroll(this.doms.tableBody.scrollLeft)
  }

  /** 同步横向滚动偏移量 */
  private syncHorizontalScroll(x: number) {
    this.updateOffsetX(x)

    const { tableBody, tableHeader } = this.doms

    if (this.isLock()) {
      const left = Classes.leftLockShadow
      const right = Classes.rightLockShadow

      const useLeft = this.state.needRenderLock && x > 0
      const useRight = this.state.needRenderLock && x < tableBody.scrollWidth - tableBody.clientWidth

      if (useLeft) {
        tableBody.classList.add(left)
        tableHeader.classList.add(left)
      } else {
        tableBody.classList.remove(left)
        tableHeader.classList.remove(left)
      }
      if (useRight) {
        tableBody.classList.add(right)
        tableHeader.classList.add(right)
      } else {
        tableBody.classList.remove(right)
        tableHeader.classList.remove(right)
      }
    }
  }

  private getVerticalRenderRange(): VerticalRenderRange {
    const { dataSource } = this.props
    const { useVirtual, offsetY, maxRenderHeight } = this.state
    const itemCount = dataSource.length
    if (useVirtual.vertical) {
      if (maxRenderHeight <= 0) {
        // maxRenderHeight <= 0 说明表格目前在 viewport 之外
        if (offsetY <= 0) {
          // 表格在 viewport 下方
          return this.store.getRenderRangeWhenBelowView(itemCount)
        } else {
          // 表格在 viewport 上方
          return this.store.getRenderRangeWhenAboveView(itemCount)
        }
      } else {
        // 表格与 viewport 相交
        return this.store.getRenderRangeWhenInView(offsetY, maxRenderHeight, itemCount)
      }
    } else {
      return ItemSizeStore.getFullRenderRange(itemCount)
    }
  }

  private getHorizontalRenderRange(): HorizontalRenderRange {
    const { offsetX, maxRenderWidth, useVirtual, flat } = this.state

    if (!useVirtual.horizontal) {
      return { leftIndex: 0, leftBlank: 0, rightIndex: flat.full.length, rightBlank: 0 }
    }

    let leftIndex = 0
    let centerCount = 0
    let leftBlank = 0
    let centerRenderWidth = 0

    const overscannedOffsetX = Math.max(0, offsetX - OVERSCAN_SIZE)
    while (leftIndex < flat.center.length) {
      const col = flat.center[leftIndex]
      if (col.width + leftBlank < overscannedOffsetX) {
        leftIndex += 1
        leftBlank += col.width
      } else {
        break
      }
    }

    // 考虑 over scan 之后，中间部分的列至少需要渲染的宽度
    const minCenterRenderWidth = maxRenderWidth + (overscannedOffsetX - leftBlank) + 2 * OVERSCAN_SIZE

    while (leftIndex + centerCount < flat.center.length) {
      const col = flat.center[leftIndex + centerCount]
      if (col.width + centerRenderWidth < minCenterRenderWidth) {
        centerRenderWidth += col.width
        centerCount += 1
      } else {
        break
      }
    }

    const rightBlankCount = flat.center.length - leftIndex - centerCount
    const rightBlank = sum(flat.center.slice(flat.center.length - rightBlankCount).map((col) => col.width))
    return {
      leftIndex: leftIndex,
      leftBlank,
      rightIndex: leftIndex + centerCount,
      rightBlank,
    }
  }

  private getRenderRange(): FullRenderRange {
    return {
      vertical: this.getVerticalRenderRange(),
      horizontal: this.getHorizontalRenderRange(),
    }
  }

  private getFlatHozWrappedCols(hoz: HorizontalRenderRange): HozWrappedCol[] {
    const { flat } = this.state

    const wrappedCols: HozWrappedCol[] = [
      ...flat.left.map((col, i) => ({ type: 'normal', col, colIndex: i } as const)),
      hoz.leftBlank > 0 && { type: 'blank', blankSide: 'left', width: hoz.leftBlank },
      ...flat.center
        .slice(hoz.leftIndex, hoz.rightIndex)
        .map((col, i) => ({ type: 'normal', col, colIndex: flat.left.length + hoz.leftIndex + i } as const)),
      hoz.rightBlank > 0 && { type: 'blank', blankSide: 'right', width: hoz.rightBlank },
      ...flat.right.map(
        (col, i) => ({ type: 'normal', col, colIndex: flat.full.length - flat.right.length + i } as const),
      ),
    ]

    return wrappedCols.filter(Boolean)
  }

  private renderTableBody(renderRange: FullRenderRange) {
    const { vertical: ver, horizontal: hoz } = renderRange
    const { isLoading, dataSource, getRowProps, primaryKey, emptyContent } = this.props
    const wrappedCols = this.getFlatHozWrappedCols(hoz)

    const colgroup = (
      <colgroup>
        {wrappedCols.map((wrapped) => {
          if (wrapped.type === 'blank') {
            return <col key={wrapped.blankSide} style={{ width: wrapped.width }} />
          }
          return <col key={wrapped.colIndex} style={{ width: wrapped.col.width }} />
        })}
      </colgroup>
    )

    if (ver.bottomIndex - ver.topIndex === 0) {
      return (
        <div className={Classes.tableBody}>
          <EmptyTable
            colgroup={colgroup}
            colSpan={wrappedCols.length}
            isLoading={isLoading}
            emptyContent={emptyContent}
          />
        </div>
      )
    }

    const { flat, stickyLeftMap, stickyRightMap } = this.state
    const fullFlatCount = flat.full.length
    const leftFlatCount = flat.left.length
    const rightFlatCount = flat.right.length

    const spanManager = new SpanManager()
    const rows = dataSource.slice(ver.topIndex, ver.bottomIndex).map(renderRow)

    return (
      <div className={Classes.tableBody}>
        <div key="top-blank" className={cx(Classes.virtualBlank, 'top')} style={{ height: ver.topBlank }} />
        <table>
          {colgroup}
          <tbody>{rows}</tbody>
        </table>
        <div key="bottom-blank" className={cx(Classes.virtualBlank, 'bottom')} style={{ height: ver.bottomBlank }} />
      </div>
    )

    function renderRow(record: any, i: number) {
      const rowIndex = ver.topIndex + i
      spanManager.stripUpwards(rowIndex)

      const rowProps = getRowProps(record, rowIndex)
      const rowClass = cx(
        Classes.tableRow,
        {
          first: rowIndex === 0,
          last: rowIndex === dataSource.length - 1,
          even: rowIndex % 2 === 0,
          odd: rowIndex % 2 === 1,
        },
        rowProps?.className,
      )
      return (
        <tr
          {...rowProps}
          className={rowClass}
          key={safeGetRowKey(primaryKey, record, rowIndex)}
          data-rowindex={rowIndex}
        >
          {wrappedCols.map((wrapped) => {
            if (wrapped.type === 'blank') {
              return <td key={wrapped.blankSide} />
            }
            return renderCell(record, rowIndex, wrapped.col, wrapped.colIndex)
          })}
        </tr>
      )
    }

    function renderCell(record: any, rowIndex: number, column: ArtColumn, colIndex: number) {
      if (spanManager.testSkip(rowIndex, colIndex)) {
        return null
      }

      const value = safeGetValue(column, record, rowIndex)
      const cellProps = column.getCellProps?.(value, record, rowIndex) ?? {}

      let cellContent: ReactNode = value
      if (column.render) {
        cellContent = column.render(value, record, rowIndex)
      }

      let colSpan = 1
      let rowSpan = 1
      if (column.getSpanRect) {
        const spanRect = column.getSpanRect(value, record, rowIndex)
        colSpan = spanRect == null ? 1 : spanRect.right - colIndex
        rowSpan = spanRect == null ? 1 : spanRect.bottom - rowIndex
      } else {
        if (cellProps.colSpan != null) {
          colSpan = cellProps.colSpan
        }
        if (cellProps.rowSpan != null) {
          rowSpan = cellProps.rowSpan
        }
      }

      // rowSpan/colSpan 不能过大，避免 rowSpan/colSpan 影响因虚拟滚动而未渲染的单元格
      rowSpan = Math.min(rowSpan, ver.bottomIndex - rowIndex)
      colSpan = Math.min(colSpan, leftFlatCount + hoz.rightIndex - colIndex)

      const hasSpan = colSpan > 1 || rowSpan > 1
      if (hasSpan) {
        spanManager.add(rowIndex, colIndex, colSpan, rowSpan)
      }

      const positionStyle: CSSProperties = {}

      if (colIndex < leftFlatCount) {
        positionStyle.position = 'sticky'
        positionStyle.left = stickyLeftMap.get(colIndex)
      } else if (colIndex >= fullFlatCount - rightFlatCount) {
        positionStyle.position = 'sticky'
        positionStyle.right = stickyRightMap.get(colIndex)
      }

      return React.createElement(
        'td',
        {
          key: colIndex,
          ...cellProps,
          className: cx(Classes.tableCell, cellProps.className, {
            first: colIndex === 0,
            last: colIndex + colSpan === fullFlatCount,
            'lock-left': colIndex < leftFlatCount,
            'lock-left-last': colIndex + colSpan === leftFlatCount,
            'lock-right': colIndex >= fullFlatCount - rightFlatCount,
            'lock-right-first': colIndex === fullFlatCount - rightFlatCount,
          }),
          ...(hasSpan ? { colSpan, rowSpan } : null),
          style: {
            textAlign: column.align,
            ...cellProps.style,
            ...positionStyle,
          },
        },
        cellContent,
      )
    }
  }

  private isLock() {
    const { nested } = this.state
    return nested.left.length > 0 || nested.right.length > 0
  }

  render() {
    const { dataSource, className, style, hasHeader, useOuterBorder, isLoading, isStickyHead } = this.props

    const styleWrapper = (node: ReactNode) => {
      const artTableWrapperProps = {
        className: cx(Classes.artTableWrapper, className, { 'use-outer-border': useOuterBorder }),
        style,
        [STYLED_REF_PROP]: this.artTableWrapperRef,
      }
      return <Styled.ArtTableWrapper {...artTableWrapperProps}>{node}</Styled.ArtTableWrapper>
    }

    const withStickyScroll = (node: ReactNode) => (
      <>
        {node}
        <Styled.StickyScroll
          className={Classes.stickyScroll}
          style={{
            display: this.state.hasScroll ? 'block' : 'none',
            bottom: this.props.stickyBottom,
          }}
        >
          <div className={Classes.stickyScrollItem} />
        </Styled.StickyScroll>
      </>
    )

    const renderRange = this.getRenderRange()

    return styleWrapper(
      withStickyScroll(
        <Loading visible={isLoading}>
          <Styled.ArtTable
            className={cx(Classes.artTable, {
              sticky: isStickyHead,
              empty: dataSource.length === 0,
              lock: this.isLock(),
              'has-header': hasHeader,
            })}
          >
            {this.renderTableHeader(renderRange)}
            {this.renderTableBody(renderRange)}
          </Styled.ArtTable>
        </Loading>,
      ),
    )
  }

  componentDidMount() {
    this.updateDoms()
    this.data$ = new BehaviorSubject({
      props: this.props,
      state: this.state,
      prevProps: null,
      prevState: null,
    })
    this.initSubscriptions()
    this.didMountOrUpdate()
  }

  componentDidUpdate(prevProps: Readonly<BaseTableProps>, prevState: Readonly<BaseTableState>) {
    this.updateDoms()
    this.data$.next({
      props: this.props,
      state: this.state,
      prevProps,
      prevState,
    })
    this.didMountOrUpdate(prevProps, prevState)
  }

  private didMountOrUpdate(prevProps?: Readonly<BaseTableProps>, prevState?: Readonly<BaseTableState>) {
    // todo 整理 sync/adjust/update/reset 等方法，现在稍微有点乱
    this.syncHorizontalScrollFromTableBody()
    this.updateStickyScroll()
    this.adjustNeedRenderLock()
    this.updateItemSizeStoreAndTriggerRerenderIfNecessary(prevProps)
    this.resetStickyScrollIfNecessary(prevState)
  }

  private resetStickyScrollIfNecessary(prevState: Readonly<BaseTableState>) {
    if (prevState != null && this.state.hasScroll && !prevState.hasScroll) {
      this.doms.stickyScroll.scrollLeft = 0
    }
  }

  private initSubscriptions() {
    const { tableHeader, tableBody, stickyScroll } = this.doms

    this.rootSubscription.add(
      throttledWindowResize$.subscribe(() => {
        this.updateStickyScroll()
        this.adjustNeedRenderLock()
      }),
    )

    // 滚动同步
    this.rootSubscription.add(
      syncScrollLeft([tableBody, stickyScroll, tableHeader], (scrollLeft) => {
        this.syncHorizontalScroll(scrollLeft)
      }),
    )

    // 表格所处的 flowRoot / BFC
    const resolvedFlowRoot$ = this.data$.pipe(
      op.map((data) => data.props.flowRoot),
      op.switchMap((flowRoot) => {
        const wrapper = this.artTableWrapperRef.current
        if (flowRoot === 'auto') {
          const computedStyle = getComputedStyle(wrapper)
          return of(computedStyle.overflowY !== 'visible' ? wrapper : window)
        } else if (flowRoot === 'self') {
          return of(wrapper)
        } else {
          if (typeof flowRoot === 'function') {
            // 在一些情况下 flowRoot 需要在父组件 didMount 时才会准备好
            // 故这里使用 animationFrameScheduler 等下一个动画帧
            return timer(0, animationFrameScheduler).pipe(op.map(flowRoot))
          } else {
            return of(flowRoot)
          }
        }
      }),
      op.distinctUntilChanged(),
    )

    // 表格在 flowRoot 中的可见部分
    const visiblePart$ = resolvedFlowRoot$.pipe(
      op.switchMap((resolvedFlowRoot) => {
        return getVisiblePartObservable(this.doms.artTable, resolvedFlowRoot)
      }),
    )

    // 每当可见部分发生变化的时候，调整 loading icon 的未知（如果 loading icon 存在的话）
    this.rootSubscription.add(
      combineLatest([
        visiblePart$.pipe(
          op.map((p) => p.clipRect),
          op.distinctUntilChanged(shallowEqual),
        ),
        this.data$.pipe(op.filter((data) => !data.prevProps?.isLoading && data.props.isLoading)),
      ]).subscribe(([clipRect]) => {
        const { artTableWrapper } = this.doms
        const loadingIndicator = query(artTableWrapper, Classes.loadingIndicator)
        if (!loadingIndicator) {
          return
        }
        const height = clipRect.bottom - clipRect.top
        loadingIndicator.style.top = `${height / 2 - LOADING_ICON_SIZE / 2}px`
        loadingIndicator.style.marginTop = `${height / 2 - LOADING_ICON_SIZE / 2}px`
      }),
    )

    // 每当可见部分发生变化的时候，如果开启了虚拟滚动，则重新触发 render
    this.rootSubscription.add(
      visiblePart$
        .pipe(
          op.filter(() => {
            const { horizontal, vertical } = this.state.useVirtual
            return horizontal || vertical
          }),
          op.map(({ clipRect, offsetY }) => ({
            maxRenderHeight: clipRect.bottom - clipRect.top,
            maxRenderWidth: clipRect.right - clipRect.left,
            offsetY,
          })),
          op.distinctUntilChanged((x, y) => {
            // 因为 overscan 的存在，滚动较小的距离时不需要触发组件重渲染
            return (
              Math.abs(x.maxRenderWidth - y.maxRenderWidth) < OVERSCAN_SIZE / 2 &&
              Math.abs(x.maxRenderHeight - y.maxRenderHeight) < OVERSCAN_SIZE / 2 &&
              Math.abs(x.offsetY - y.offsetY) < OVERSCAN_SIZE / 2
            )
          }),
        )
        .subscribe((sizeAndOffset) => {
          this.setState(sizeAndOffset)
        }),
    )
  }

  componentWillUnmount() {
    this.rootSubscription.unsubscribe()
  }

  /** 更新 DOM 节点的引用，方便其他方法直接操作 DOM */
  private updateDoms() {
    const artTableWrapper = this.artTableWrapperRef.current
    const artTable = query(artTableWrapper, Classes.artTable)

    this.doms = {
      artTableWrapper,
      artTable,
      tableHeader: query(artTable, Classes.tableHeader),
      tableBody: query(artTable, Classes.tableBody),

      stickyScroll: query(artTableWrapper, Classes.stickyScroll),
      stickyScrollItem: query(artTableWrapper, Classes.stickyScrollItem),
    }
  }

  private updateItemSizeStoreAndTriggerRerenderIfNecessary(prevProps?: Readonly<BaseTableProps>) {
    if (prevProps != null) {
      if (prevProps.dataSource.length !== this.props.dataSource.length) {
        this.store.setMaxItemCount(this.props.dataSource.length)
      }
    }

    const virtualTop = this.doms.artTable.querySelector<HTMLDivElement>(`.${Classes.virtualBlank}.top`)
    const virtualTopHeight = virtualTop?.clientHeight ?? 0

    let maxTrRowIndex = -1
    let maxTrBottom = -1

    for (const tr of queryAll<HTMLTableRowElement>(this.doms.artTable, Classes.tableRow)) {
      const rowIndex = Number(tr.dataset.rowindex)
      if (isNaN(rowIndex)) {
        continue
      }
      maxTrRowIndex = Math.max(maxTrRowIndex, rowIndex)
      const offset = tr.offsetTop + virtualTopHeight
      const size = tr.offsetHeight
      maxTrBottom = Math.max(maxTrBottom, offset + size)
      this.store.updateItem(rowIndex, offset, size)
    }

    if (maxTrRowIndex !== -1) {
      if (maxTrBottom < this.state.offsetY + this.state.maxRenderHeight) {
        // 页面上出现的元素过少
        const { vertical } = this.getRenderRange()
        // 确保下一次渲染 能够渲染更多行
        if (vertical.bottomIndex - 1 > maxTrRowIndex) {
          // 重新触发 render
          this.forceUpdate()
        }
      }
    }
  }

  /** 计算表格所有列的渲染宽度之和，判断表格是否需要渲染锁列 */
  private adjustNeedRenderLock() {
    const { needRenderLock, flat } = this.state

    if (this.isLock()) {
      const sumOfColWidth = sum(flat.full.map((col) => col.width))
      const nextNeedRenderLock = sumOfColWidth > this.doms.artTable.clientWidth
      if (needRenderLock !== nextNeedRenderLock) {
        this.setState({ needRenderLock: nextNeedRenderLock })
      }
    } else {
      if (needRenderLock) {
        this.setState({ needRenderLock: false })
      }
    }
  }
}
