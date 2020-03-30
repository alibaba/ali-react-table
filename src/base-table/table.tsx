import cx from 'classnames'
import React, { CSSProperties, ReactNode } from 'react'
import { noop, Subscription } from 'rxjs'
import { distinctUntilChanged, filter, map } from 'rxjs/operators'
import { safeGetCellProps, safeGetRowKey, safeGetValue, safeRender } from '../common-utils/internals'
import { DvtTableColumn } from '../interfaces'
import EmptyTable from './empty'
import getDerivedStateFromProps from './getDerivedStateFromProps'
import TableHeader from './header'
import ItemSizeStore from './helpers/ItemSizeStore'
import SpanManager from './helpers/SpanManager'
import VisibleClipRectObservable from './helpers/VisibleClipRectObservable'
import {
  FullRenderRange,
  HorizontalRenderRange,
  HozWrappedCol,
  TableDoms,
  TableSide,
  TRNodeList,
  VerticalRenderRange,
  VirtualEnum,
} from './interfaces'
import Loading from './loading'
import { BaseTableCSSVariables, Classes, Styled } from './styles'
import {
  batchAdjustLeftCellSizes,
  batchAdjustRightCellSizes,
  getScrollbarSize,
  OVERSCAN_SIZE,
  query,
  queryAll,
  STYLED_REF_PROP,
  sum,
  syncScrollLeft,
  throttledWindowResize$,
} from './utils'

export interface BaseTableProps {
  ////// 数据部分
  /** 主键 */
  primaryKey?: string | ((record: any, rowIndex: number) => string | number)
  /** 表格展示的数据源 */
  dataSource: any[]
  /** 表格的列配置 */
  columns: DvtTableColumn[]

  /** 是否开启虚拟滚动 */
  useVirtual?: VirtualEnum | { horizontal?: VirtualEnum; vertical?: VirtualEnum; header?: VirtualEnum }

  ////// 表格整体样式相关 props
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

  /** @deprecated 推荐使用 getRowProps 了设置 onClick 回调。 onRowClick 会在下个版本中删除 */
  onRowClick?(record: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>): void

  getRowProps?(record: any, rowIndex: number): React.HTMLAttributes<HTMLTableRowElement>
}

export interface BaseTableState {
  flat: {
    left: DvtTableColumn[]
    center: DvtTableColumn[]
    right: DvtTableColumn[]
    main: DvtTableColumn[]
  }
  nested: {
    left: DvtTableColumn[]
    right: DvtTableColumn[]
    main: DvtTableColumn[]
    center: DvtTableColumn[]
  }

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

export default class BaseTable extends React.Component<BaseTableProps, BaseTableState> {
  static defaultProps = {
    isStickyHead: true,
    stickyTop: 0,
    stickyBottom: 0,
    onRowClick: noop,
    useVirtual: 'auto',
    hasHeader: true,
    isLoading: false,
    primaryKey: 'id',
    getRowProps: noop,
    flowRoot: 'auto',
  }

  static getDerivedStateFromProps = getDerivedStateFromProps

  private store = new ItemSizeStore()
  private dvtTableRef = React.createRef<HTMLDivElement>()
  private dvtTableWrapperRef = React.createRef<HTMLDivElement>()
  private doms: TableDoms
  private rootSubscription = new Subscription()

  constructor(props: Readonly<BaseTableProps>) {
    super(props)

    this.state = {
      ...getDerivedStateFromProps(props, null),
      hasScroll: true,
      needRenderLock: true,
      offsetY: 0,
      maxRenderHeight: Number(window.innerHeight),
      offsetX: 0,
      maxRenderWidth: window.innerWidth,
    }
  }

  /** 自定义滚动条宽度为table宽度，使滚动条滑块宽度相同 */
  private updateStickyScroll() {
    const { stickyScroll, mainBody, stickyScrollItem } = this.doms

    if (!mainBody) {
      return
    }
    const refTable = mainBody.querySelector('table')
    if (!refTable) {
      return
    }
    const bodyWidth = mainBody.offsetWidth

    const tableWidth = refTable.offsetWidth
    const scrollbarSize = getScrollbarSize()
    stickyScroll.style.marginTop = `-${scrollbarSize.height}px`

    // 如果有纵向滚动条，需要减少一个滚动条的宽度
    if (mainBody.scrollHeight > mainBody.clientHeight) {
      stickyScroll.style.width = `${bodyWidth - scrollbarSize.width}px`
    } else {
      stickyScroll.style.width = 'auto'
    }

    if (bodyWidth >= tableWidth) {
      if (this.state.hasScroll) {
        this.setState({ hasScroll: false })
      }
      // 考虑下mac下面隐藏滚动条的情况
    } else if (!this.state.hasScroll && scrollbarSize.height > 5) {
      this.setState({ hasScroll: true })
    }
    // 设置子节点宽度
    stickyScrollItem.style.width = `${tableWidth}px`
  }

  // 通过头部和扁平的结构渲染表格
  private renderTableSection(side: TableSide, renderRange: FullRenderRange) {
    const { hasHeader } = this.props

    // 对于的锁定的列来讲，因为我们对其设置了 overflow: hidden
    // 导致在它上面的元素不会触发 scroll 事件
    // 我们监听其 wheel 事件，然后手动更新 scrollTop/scrollLeft
    const onWheel = side !== 'main' ? this.onWheelInLeftOrRightSection : null
    const onScroll = side === 'main' ? this.syncBodyScroll : null

    return (
      <div className={cx(Classes.tableInner)}>
        {hasHeader && this.renderTableHeader(side, renderRange)}
        {this.renderTableBody(side, renderRange, onWheel, onScroll)}
      </div>
    )
  }

  private renderTableHeader(side: TableSide, { horizontal: hoz }: FullRenderRange) {
    const { stickyTop } = this.props
    const { flat, nested, useVirtual } = this.state

    return (
      <div className={cx(Classes.tableHeaderWrapper)} style={{ top: stickyTop }}>
        <TableHeader nested={nested} flat={flat} hoz={hoz} side={side} useVirtual={useVirtual} />
      </div>
    )
  }

  private onWheelInLeftOrRightSection = (e: React.WheelEvent) => {
    const { scrollLeft: x, scrollTop: y } = this.doms.mainBody
    this.syncScroll(x + e.deltaX, y + e.deltaY)
  }

  private syncBodyScroll = () => {
    const { scrollLeft: x, scrollTop: y } = this.doms.mainBody
    this.syncScroll(x, y)
  }

  private updateOffsetX(nextOffsetX: number) {
    if (this.state.useVirtual.horizontal) {
      if (Math.abs(nextOffsetX - this.state.offsetX) >= OVERSCAN_SIZE / 2) {
        this.setState({ offsetX: nextOffsetX })
      }
    }
  }

  /** 同步滚动偏移量 */
  private syncScroll(x: number, y: number) {
    this.updateOffsetX(x)

    const header = this.doms.mainHeader
    const scrollNode = this.doms.mainBody

    if (header) {
      header.scrollLeft = x
    }
    scrollNode.scrollLeft = x
    scrollNode.scrollTop = y

    if (this.isLock()) {
      const { rightBody, leftBody, rightSection, leftSection } = this.doms

      if (leftBody) {
        leftBody.scrollTop = y
      }
      if (rightBody) {
        rightBody.scrollTop = y
      }
      if (this.state.needRenderLock) {
        if (x === 0) {
          // 滚动条在最左端
          leftSection?.classList.remove(Classes.lockShadow)
          rightSection?.classList.add(Classes.lockShadow)
        } else if (x === scrollNode.scrollWidth - scrollNode.clientWidth) {
          // 滚动条在最右端
          leftSection?.classList.add(Classes.lockShadow)
          rightSection?.classList.remove(Classes.lockShadow)
        } else {
          // 滚动条在中间
          leftSection?.classList.add(Classes.lockShadow)
          rightSection?.classList.add(Classes.lockShadow)
        }
      } else {
        // 不需要渲染 left-section / right-section
        leftSection?.classList.remove(Classes.lockShadow)
        rightSection?.classList.remove(Classes.lockShadow)
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
      return { leftIndex: 0, leftBlank: 0, rightIndex: flat.main.length, rightBlank: 0 }
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
    const rightBlank = sum(flat.center.slice(flat.center.length - rightBlankCount).map(col => col.width))
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

  private getFlatHozWrappedCols(side: TableSide, hoz: HorizontalRenderRange): HozWrappedCol[] {
    const { flat } = this.state

    if (side !== 'main') {
      const colIndexShift = side === 'right' ? flat.main.length - flat.right.length : 0
      return flat[side].map((col, i) => ({ type: 'normal', col, colIndex: i + colIndexShift }))
    }

    const wrappedCols: HozWrappedCol[] = [
      ...flat.left.map((col, i) => ({ type: 'normal', col, colIndex: i } as const)),
      hoz.leftBlank > 0 && { type: 'blank', blankSide: 'left', width: hoz.leftBlank },
      ...flat.center
        .slice(hoz.leftIndex, hoz.rightIndex)
        .map((col, i) => ({ type: 'normal', col, colIndex: flat.left.length + hoz.leftIndex + i } as const)),
      hoz.rightBlank > 0 && { type: 'blank', blankSide: 'right', width: hoz.rightBlank },
      ...flat.right.map(
        (col, i) => ({ type: 'normal', col, colIndex: flat.main.length - flat.right.length + i } as const),
      ),
    ]

    return wrappedCols.filter(Boolean)
  }

  private renderTableBody(
    side: TableSide,
    renderRange: FullRenderRange,
    onWheel: React.WheelEventHandler<HTMLDivElement>,
    onScroll: React.UIEventHandler<HTMLDivElement>,
  ) {
    const { onRowEnterOrLeave } = this
    const { vertical: ver, horizontal: hoz } = renderRange
    const { isLoading, dataSource, getRowProps, primaryKey, onRowClick, emptyContent } = this.props
    const { flat } = this.state
    const colCount = flat.main.length
    const leftFlatCount = flat.left.length

    const wrappedCols = this.getFlatHozWrappedCols(side, hoz)

    const colgroup = (
      <colgroup>
        {wrappedCols.map(wrapped => {
          if (wrapped.type === 'blank') {
            return <col key={wrapped.blankSide} style={{ width: wrapped.width }} />
          }
          return <col key={wrapped.colIndex} style={{ width: wrapped.col.width }} />
        })}
      </colgroup>
    )

    if (ver.bottomIndex - ver.topIndex === 0) {
      return (
        <div className={Classes.tableBody} onWheel={onWheel} onScroll={onScroll}>
          <EmptyTable
            colgroup={colgroup}
            colSpan={wrappedCols.length}
            isLoading={isLoading}
            emptyContent={emptyContent}
          />
        </div>
      )
    }

    const spanManager = new SpanManager()
    const rows = dataSource.slice(ver.topIndex, ver.bottomIndex).map(renderRow)

    return (
      <div className={Classes.tableBody} onWheel={onWheel} onScroll={onScroll}>
        <div
          key="top-blank"
          className={cx(Classes.virtualBlank, 'top')}
          style={{
            height: ver.topBlank,
          }}
        />
        <table>
          {colgroup}
          <tbody>{rows}</tbody>
        </table>
        <div
          key="bottom-blank"
          className={cx(Classes.virtualBlank, 'bottom')}
          style={{
            height: ver.bottomBlank,
          }}
        />
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
          onClick={e => onRowClick(record, rowIndex, e)}
          data-rowindex={rowIndex}
          onMouseEnter={() => onRowEnterOrLeave(rowIndex, 'enter')}
          onMouseLeave={() => onRowEnterOrLeave(rowIndex, 'leave')}
        >
          {wrappedCols.map(wrapped => {
            if (wrapped.type === 'blank') {
              return <td key={wrapped.blankSide} />
            }
            return renderCell(record, rowIndex, wrapped.col, wrapped.colIndex)
          })}
        </tr>
      )
    }

    function renderCell(record: any, rowIndex: number, column: DvtTableColumn, colIndex: number) {
      if (spanManager.testSkip(rowIndex, colIndex)) {
        return null
      }

      const cellProps = safeGetCellProps(column, record, rowIndex)

      let colSpan = 1
      let rowSpan = 1
      if (column.getSpanRect) {
        const value = safeGetValue(column, record, rowIndex)
        const spanRect = column.getSpanRect(value, record, rowIndex)
        colSpan = spanRect.right - colIndex
        rowSpan = spanRect.bottom - rowIndex
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

      const cls = cx(Classes.tableCell, {
        first: colIndex === 0,
        last: colIndex === colCount - 1,
      })

      if (column.align) {
        cellProps.style = cellProps.style ?? {}
        cellProps.style.textAlign = column.align
      }

      return React.createElement(
        'td',
        {
          key: colIndex,
          className: cls,
          ...cellProps,
          ...(hasSpan ? { colSpan, rowSpan } : null),
        },
        safeRender(column, record, rowIndex),
      )
    }
  }

  private isLock() {
    const { nested } = this.state
    return nested.left.length > 0 || nested.right.length > 0
  }

  private onRowEnterOrLeave = (rowIndex: number, kind: 'enter' | 'leave') => {
    const rowSelector = `*[data-rowindex="${rowIndex}"]`
    const mainRow = this.doms.mainBody.querySelector(rowSelector)
    const leftLockRow = this.doms.leftBody?.querySelector(rowSelector)
    const rightLockRow = this.doms.rightBody?.querySelector(rowSelector)

    const method = kind === 'enter' ? 'add' : 'remove'
    ;[mainRow, leftLockRow, rightLockRow].forEach(row => {
      if (row) {
        row.classList[method]('hovered')
      }
    })
  }

  render() {
    const { dataSource, className, style, hasHeader, useOuterBorder, isLoading, isStickyHead } = this.props

    const styleWrapper = (node: ReactNode) => {
      const wrapperClassName = cx(Classes.dvtTableWrapper, className, {
        'use-outer-border': useOuterBorder,
      })
      const dvtTableWrapperProps = {
        className: wrapperClassName,
        style,
        [STYLED_REF_PROP]: this.dvtTableWrapperRef,
      }
      return <Styled.DvtTableWrapper {...dvtTableWrapperProps}>{node}</Styled.DvtTableWrapper>
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

    const loadingWrapper = (node: ReactNode) => {
      return <Loading visible={isLoading}>{node}</Loading>
    }

    const tableClass = cx(Classes.dvtTable, {
      sticky: isStickyHead,
      empty: dataSource.length === 0,
      lock: this.isLock(),
      'has-header': hasHeader,
    })

    const renderRange = this.getRenderRange()

    const dvtTableProps = {
      className: tableClass,
      [STYLED_REF_PROP]: this.dvtTableRef,
    }

    const dvtTable = (
      <Styled.DvtTable {...dvtTableProps}>
        {this.renderLeftSection(renderRange)}
        {this.renderMainSection(renderRange)}
        {this.renderRightSection(renderRange)}
      </Styled.DvtTable>
    )

    return styleWrapper(withStickyScroll(loadingWrapper(dvtTable)))
  }

  private renderLeftSection(renderRange: FullRenderRange) {
    const { dataSource } = this.props
    const { nested, needRenderLock } = this.state
    if (!needRenderLock || nested.left.length === 0 || dataSource.length === 0) {
      return null
    }
    return (
      <Styled.LeftSection className={Classes.leftSection}>
        {this.renderTableSection('left', renderRange)}
      </Styled.LeftSection>
    )
  }

  private renderMainSection(renderRange: FullRenderRange) {
    return (
      <Styled.MainSection className={cx(Classes.mainSection)}>
        {this.renderTableSection('main', renderRange)}
      </Styled.MainSection>
    )
  }

  private renderRightSection(renderRange: FullRenderRange) {
    const { dataSource } = this.props
    const { nested, needRenderLock } = this.state
    if (!needRenderLock || nested.right.length === 0 || dataSource.length === 0) {
      return null
    }
    return (
      <Styled.RightSection className={Classes.rightSection}>
        {this.renderTableSection('right', renderRange)}
      </Styled.RightSection>
    )
  }

  private didMountOrUpdate(prevProps?: Readonly<BaseTableProps>) {
    this.adjustSize()
    this.updateItemSizeStore(prevProps)
    this.syncBodyScroll()
    this.updateStickyScroll()
  }

  componentDidMount() {
    this.updateDoms()
    this.didMountOrUpdate()
    this.initSubscriptions()
  }

  private initSubscriptions() {
    const { mainBody, stickyScroll } = this.doms
    const { flowRoot, style = {} } = this.props

    this.rootSubscription.add(syncScrollLeft(mainBody, stickyScroll))
    this.rootSubscription.add(
      throttledWindowResize$.subscribe(() => {
        this.updateStickyScroll()
        this.adjustSize()
      }),
    )

    // 在一些情况下 flowRoot 需要在父组件 didMount 时才会准备好
    // 故这里使用 requestAnimationFrame 等到下一个动画帧
    const rafId = requestAnimationFrame(() => {
      let resolvedFlowRoot
      const wrapper = this.dvtTableWrapperRef.current

      if (flowRoot === 'auto') {
        const computedStyle = getComputedStyle(wrapper)
        resolvedFlowRoot = computedStyle.overflowY !== 'visible' ? wrapper : window
      } else if (flowRoot === 'self') {
        resolvedFlowRoot = wrapper
      } else {
        resolvedFlowRoot = typeof flowRoot === 'function' ? flowRoot() : flowRoot
      }
      const sizeAndOffset$ = new VisibleClipRectObservable(mainBody, resolvedFlowRoot).pipe(
        filter(() => {
          const { horizontal, vertical } = this.state.useVirtual
          return horizontal || vertical
        }),
        map(({ clipRect, offsetY }) => ({
          maxRenderHeight: clipRect.bottom - clipRect.top,
          maxRenderWidth: clipRect.right - clipRect.left,
          offsetY,
        })),
        distinctUntilChanged((x, y) => {
          // 因为 overscan 的存在，滚动较小的距离时不需要触发组件重渲染
          return (
            Math.abs(x.maxRenderWidth - y.maxRenderWidth) < OVERSCAN_SIZE / 2 &&
            Math.abs(x.maxRenderHeight - y.maxRenderHeight) < OVERSCAN_SIZE / 2 &&
            Math.abs(x.offsetY - y.offsetY) < OVERSCAN_SIZE / 2
          )
        }),
      )
      this.rootSubscription.add(
        sizeAndOffset$.subscribe(sizeAndOffset => {
          this.setState(sizeAndOffset)
        }),
      )
    })

    this.rootSubscription.add(() => {
      cancelAnimationFrame(rafId)
    })
  }

  componentDidUpdate(prevProps: Readonly<BaseTableProps>) {
    this.updateDoms()
    this.didMountOrUpdate(prevProps)
  }

  componentWillUnmount() {
    this.rootSubscription.unsubscribe()
  }

  /** 更新 DOM 节点的引用，方便其他方法直接操作 DOM */
  private updateDoms() {
    const dvtTableWrapper = this.dvtTableWrapperRef.current
    const dvtTable = this.dvtTableRef.current
    const mainSection = query(dvtTable, Classes.mainSection)
    const leftSection = query(dvtTable, Classes.leftSection)
    const rightSection = query(dvtTable, Classes.rightSection)

    this.doms = {
      dvtTableWrapper,
      dvtTable,
      mainSection,
      mainHeader: query(mainSection, Classes.tableHeader),
      mainBody: query(mainSection, Classes.tableBody),
      leftSection,
      leftHeader: query(leftSection, Classes.tableHeader),
      leftBody: query(leftSection, Classes.tableBody),
      rightSection,
      rightHeader: query(rightSection, Classes.tableHeader),
      rightBody: query(rightSection, Classes.tableBody),
      stickyScroll: query(dvtTableWrapper, Classes.stickyScroll),
      stickyScrollItem: query(dvtTableWrapper, Classes.stickyScrollItem),
    }
  }

  private updateItemSizeStore(prevProps?: Readonly<BaseTableProps>) {
    if (prevProps != null) {
      if (prevProps.dataSource.length !== this.props.dataSource.length) {
        this.store.setMaxItemCount(this.props.dataSource.length)
      }
    }

    const virtualTop = this.doms.mainBody.querySelector<HTMLDivElement>(`.${Classes.virtualBlank}.top`)
    const virtualTopHeight = virtualTop?.clientHeight ?? 0

    queryAll<HTMLTableRowElement>(this.doms.mainBody, Classes.tableRow).forEach(tr => {
      const rowIndex = Number(tr.dataset.rowindex)
      this.store.updateItem(rowIndex, tr.offsetTop + virtualTopHeight, tr.offsetHeight)
    })
  }

  private adjustSize = () => {
    this.adjustNeedRenderLock()
    this.adjustSizeOfLockCells()
    this.adjustSizeOfLockBodies()
    this.adjustSizeOfLockHeaderCells()
  }

  // 同步左右两侧锁列的单元格高度
  private adjustSizeOfLockCells() {
    if (!this.isLock()) {
      return
    }

    const mainTableRows = queryAll<HTMLTableRowElement>(this.doms.mainBody, Classes.tableRow)
    if (this.doms.leftBody) {
      const leftTableRows = queryAll<HTMLTableRowElement>(this.doms.leftBody, Classes.tableRow)
      batchAdjustLeftCellSizes(leftTableRows, mainTableRows as TRNodeList)
    }
    if (this.doms.rightBody) {
      const rightTableRows = queryAll<HTMLTableRowElement>(this.doms.rightBody, Classes.tableRow)
      batchAdjustRightCellSizes(rightTableRows, mainTableRows)
    }
  }

  private adjustSizeOfLockBodies() {
    if (this.isLock()) {
      const { mainBody, rightSection } = this.doms

      let width = 0

      if (mainBody.scrollHeight > mainBody.clientHeight) {
        width = getScrollbarSize().width
      }

      rightSection && (rightSection.style.right = `${width}px`)
    }
  }

  /** 更新左右两侧锁列表头的 tr 的高度 */
  private adjustSizeOfLockHeaderCells() {
    if (!this.isLock()) {
      return
    }

    const mainTableRows = queryAll<HTMLTableRowElement>(this.doms.mainHeader, Classes.tableHeaderRow)
    if (this.doms.leftHeader) {
      const leftTableRows = queryAll<HTMLTableRowElement>(this.doms.leftHeader, Classes.tableHeaderRow)
      batchAdjustLeftCellSizes(leftTableRows, mainTableRows)
    }
    if (this.doms.rightHeader) {
      const rightTableRows = queryAll<HTMLTableRowElement>(this.doms.rightHeader, Classes.tableHeaderRow)
      batchAdjustRightCellSizes(rightTableRows, mainTableRows)
    }
  }

  /** 计算表格所有列的渲染宽度之和，判断表格是否需要渲染锁列 */
  private adjustNeedRenderLock() {
    let nextNeedRenderLock: boolean

    const { dataSource } = this.props
    const { needRenderLock } = this.state
    const { mainBody, dvtTable } = this.doms

    if (this.isLock() && dataSource.length > 0) {
      const firstRow = query<HTMLTableRowElement>(mainBody, Classes.tableRow)
      if (firstRow == null) {
        // fixme 理论上 firstRow 不为 null，但实际情况下非常低概率还是会出现为 null 的情况
        return
      }
      const sumOfColWidth = Array.from(firstRow.cells).reduce((sum, cell) => {
        return sum + cell.offsetWidth
      }, 0)
      nextNeedRenderLock = sumOfColWidth > dvtTable.clientWidth
    } else {
      nextNeedRenderLock = false
    }

    if (needRenderLock !== nextNeedRenderLock) {
      this.setState({ needRenderLock: nextNeedRenderLock })
    }
  }
}
