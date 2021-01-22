import cx from 'classnames'
import React, { CSSProperties, ReactNode } from 'react'
import { animationFrameScheduler, BehaviorSubject, combineLatest, noop, of, Subscription, timer } from 'rxjs'
import * as op from 'rxjs/operators'
import { ArtColumn } from '../interfaces'
import { EmptyHtmlTable } from './empty'
import TableHeader from './header'
import { getFullRenderRange, makeRowHeightManager } from './helpers/rowHeightManager'
import { TableDOMHelper } from './helpers/TableDOMUtils'
import { getVisiblePartObservable } from './helpers/visible-part'
import { HtmlTable } from './html-table'
import { RenderInfo, ResolvedUseVirtual, VerticalRenderRange, VirtualEnum } from './interfaces'
import Loading, { LoadingContentWrapperProps } from './loading'
import { BaseTableCSSVariables, Classes, LOCK_SHADOW_PADDING, StyledArtTableWrapper } from './styles'
import {
  calculateFlatAndNestedColumnsAndResolveUseVirtual,
  getHorizontalRenderRange,
  getVisibleColumnDescriptors,
} from './calculations'
import {
  getScrollbarSize,
  OVERSCAN_SIZE,
  shallowEqual,
  STYLED_REF_PROP,
  sum,
  syncScrollLeft,
  throttledWindowResize$,
} from './utils'

let propsDotEmptyContentDeprecatedWarned = false
function warnPropsDotEmptyContentIsDeprecated() {
  if (!propsDotEmptyContentDeprecatedWarned) {
    propsDotEmptyContentDeprecatedWarned = true
    console.warn(
      '[ali-react-table] BaseTable props.emptyContent 已经过时，请使用 props.components.EmptyContent 来自定义数据为空时的表格表现',
    )
  }
}

export type PrimaryKey = string | ((record: any) => string)

export interface BaseTableProps {
  /** 主键 */
  primaryKey?: PrimaryKey
  /** 表格展示的数据源 */
  dataSource: any[]
  /** 表格页脚数据源 */
  footerDataSource?: any[]
  /** 表格的列配置 */
  columns: ArtColumn[]

  /** 是否开启虚拟滚动 */
  useVirtual?: VirtualEnum | { horizontal?: VirtualEnum; vertical?: VirtualEnum; header?: VirtualEnum }
  /** 虚拟滚动开启情况下，表格中每一行的预估高度 */
  estimatedRowHeight?: number

  /** @deprecated 表格头部是否置顶，默认为 true。请使用 isStickyHeader 代替 */
  isStickyHead?: boolean
  /** 表格头部是否置顶，默认为 true */
  isStickyHeader?: boolean
  /** 表格置顶后，距离顶部的距离 */
  stickyTop?: number
  /** 表格页脚是否置底，默认为 true */
  isStickyFooter?: boolean
  /** 表格页脚置底后，距离底部的距离 */
  stickyBottom?: number
  /** 自定义类名 */
  className?: string
  /** 自定义内联样式 */
  style?: CSSProperties & BaseTableCSSVariables
  /** 表格是否具有头部 */
  hasHeader?: boolean
  /** 表格是否具有横向的粘性滚动条 */
  hasStickyScroll?: boolean
  /** 横向粘性滚动条高度 */
  stickyScrollHeight?: 'auto' | number
  /** 使用来自外层 div 的边框代替单元格的外边框 */
  useOuterBorder?: boolean

  /** 表格是否在加载中 */
  isLoading?: boolean
  /** 数据为空时，单元格的高度 */
  emptyCellHeight?: number
  /** @deprecated 数据为空时，表格的展示内容。请使用 components.EmptyContent 代替 */
  emptyContent?: ReactNode

  /** 覆盖表格内部用到的组件 */
  components?: {
    /** 表格加载时，表格内容的父组件 */
    LoadingContentWrapper?: React.ComponentType<LoadingContentWrapperProps>
    /** 表格加载时的加载图标 */
    LoadingIcon?: React.ComponentType
    /** 数据为空时，表格的展示内容。*/
    EmptyContent?: React.ComponentType
  }

  /** 列的默认宽度 */
  defaultColumnWidth?: number

  /** 表格所处于的块格式化上下文(BFC)
   * https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context */
  flowRoot?: 'auto' | 'self' | (() => HTMLElement | typeof window) | HTMLElement | typeof window

  getRowProps?(record: any, rowIndex: number): React.HTMLAttributes<HTMLTableRowElement>
}

export interface BaseTableState {
  /** 是否要展示自定义滚动条(stickyScroll) */
  hasScroll: boolean

  /** 是否需要渲染 lock sections
   * 当表格较宽时，所有的列都能被完整的渲染，此时不需要渲染 lock sections
   * 只有当「整个表格的宽度」小于「每一列渲染宽度之和」时，lock sections 才需要被渲染 */
  needRenderLock: boolean

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
    hasHeader: true,
    isStickyHeader: true,
    stickyTop: 0,

    footerDataSource: [] as any[],
    isStickyFooter: true,
    stickyBottom: 0,
    hasStickyScroll: true,
    stickyScrollHeight: 'auto',

    useVirtual: 'auto',
    estimatedRowHeight: 48,

    isLoading: false,
    components: {},
    getRowProps: noop,
    flowRoot: 'auto',
    dataSource: [] as any[],
  }

  private rowHeightManager = makeRowHeightManager(this.props.dataSource.length, this.props.estimatedRowHeight)

  private artTableWrapperRef = React.createRef<HTMLDivElement>()
  private domHelper: TableDOMHelper
  private rootSubscription = new Subscription()

  // 最近一次渲染的计算结果缓存
  private lastInfo: RenderInfo

  private data$: BehaviorSubject<{
    props: BaseTableProps
    state: BaseTableState
    info: RenderInfo
    prevProps: BaseTableProps | null
    prevState: BaseTableState | null
  }>

  /** @deprecated BaseTable.getDoms() 已经过时，请勿调用 */
  getDoms() {
    console.warn('[ali-react-table] BaseTable.getDoms() 已经过时')
    return this.domHelper
  }

  constructor(props: Readonly<BaseTableProps>) {
    super(props)

    this.state = {
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
    const { stickyScroll, artTable, stickyScrollItem } = this.domHelper

    if (!artTable) {
      return
    }
    const tableBodyHtmlTable = this.domHelper.getTableBodyHtmlTable()
    const innerTableWidth = tableBodyHtmlTable.offsetWidth
    const artTableWidth = artTable.offsetWidth

    const stickyScrollHeightProp = this.props.stickyScrollHeight
    const stickyScrollHeight = stickyScrollHeightProp === 'auto' ? getScrollbarSize().height : stickyScrollHeightProp

    stickyScroll.style.marginTop = `-${stickyScrollHeight + 1}px`

    if (artTableWidth >= innerTableWidth) {
      if (this.state.hasScroll) {
        this.setState({ hasScroll: false })
      }
    } else {
      if (!this.state.hasScroll && stickyScrollHeight > 5) {
        // 考虑下mac下面隐藏滚动条的情况
        this.setState({ hasScroll: true })
      }
    }
    // 设置子节点宽度
    stickyScrollItem.style.width = `${innerTableWidth}px`
  }

  private renderTableHeader(info: RenderInfo) {
    const { stickyTop, hasHeader } = this.props

    return (
      <div
        className={cx(Classes.tableHeader, 'no-scrollbar')}
        style={{
          top: stickyTop === 0 ? undefined : stickyTop,
          display: hasHeader ? undefined : 'none',
        }}
      >
        <TableHeader info={info} />
      </div>
    )
  }

  private updateOffsetX(nextOffsetX: number) {
    if (this.lastInfo.useVirtual.horizontal) {
      if (Math.abs(nextOffsetX - this.state.offsetX) >= OVERSCAN_SIZE / 2) {
        this.setState({ offsetX: nextOffsetX })
      }
    }
  }

  private syncHorizontalScrollFromTableBody() {
    this.syncHorizontalScroll(this.domHelper.tableBody.scrollLeft)
  }

  /** 同步横向滚动偏移量 */
  private syncHorizontalScroll(x: number) {
    this.updateOffsetX(x)

    const { tableBody } = this.domHelper
    const { flat } = this.lastInfo

    const leftLockShadow = this.domHelper.getLeftLockShadow()
    if (leftLockShadow) {
      const shouldShowLeftLockShadow = flat.left.length > 0 && this.state.needRenderLock && x > 0
      if (shouldShowLeftLockShadow) {
        leftLockShadow.classList.add('show-shadow')
      } else {
        leftLockShadow.classList.remove('show-shadow')
      }
    }

    const rightLockShadow = this.domHelper.getRightLockShadow()
    if (rightLockShadow) {
      const shouldShowRightLockShadow =
        flat.right.length > 0 && this.state.needRenderLock && x < tableBody.scrollWidth - tableBody.clientWidth
      if (shouldShowRightLockShadow) {
        rightLockShadow.classList.add('show-shadow')
      } else {
        rightLockShadow.classList.remove('show-shadow')
      }
    }
  }

  private getVerticalRenderRange(useVirtual: ResolvedUseVirtual): VerticalRenderRange {
    const { dataSource } = this.props
    const { offsetY, maxRenderHeight } = this.state
    const rowCount = dataSource.length
    if (useVirtual.vertical) {
      return this.rowHeightManager.getRenderRange(offsetY, maxRenderHeight, rowCount)
    } else {
      return getFullRenderRange(rowCount)
    }
  }

  private renderTableBody(info: RenderInfo) {
    const { dataSource, getRowProps, primaryKey, isLoading, emptyCellHeight, footerDataSource } = this.props
    const tableBodyClassName = cx(Classes.tableBody, Classes.horizontalScrollContainer, {
      'no-scrollbar': footerDataSource.length > 0,
    })

    if (dataSource.length === 0) {
      const { components, emptyContent } = this.props
      let EmptyContent = components.EmptyContent
      if (EmptyContent == null && emptyContent != null) {
        warnPropsDotEmptyContentIsDeprecated()
        EmptyContent = ((() => emptyContent) as unknown) as React.ComponentType
      }

      return (
        <div className={tableBodyClassName}>
          <EmptyHtmlTable
            descriptors={info.visible}
            isLoading={isLoading}
            EmptyContent={EmptyContent}
            emptyCellHeight={emptyCellHeight}
          />
        </div>
      )
    }

    const { topIndex, bottomBlank, topBlank, bottomIndex } = info.verticalRenderRange

    return (
      <div className={tableBodyClassName}>
        {topBlank > 0 && (
          <div key="top-blank" className={cx(Classes.virtualBlank, 'top')} style={{ height: topBlank }} />
        )}
        <HtmlTable
          tbodyHtmlTag="tbody"
          getRowProps={getRowProps}
          primaryKey={primaryKey}
          data={dataSource.slice(topIndex, bottomIndex)}
          horizontalRenderInfo={info}
          verticalRenderInfo={{
            first: 0,
            offset: topIndex,
            limit: bottomIndex,
            last: dataSource.length - 1,
          }}
        />
        {bottomBlank > 0 && (
          <div key="bottom-blank" className={cx(Classes.virtualBlank, 'bottom')} style={{ height: bottomBlank }} />
        )}
      </div>
    )
  }

  private renderTableFooter(info: RenderInfo) {
    const { footerDataSource = [], getRowProps, primaryKey, stickyBottom } = this.props

    return (
      <div
        className={cx(Classes.tableFooter, Classes.horizontalScrollContainer)}
        style={{ bottom: stickyBottom === 0 ? undefined : stickyBottom }}
      >
        <HtmlTable
          tbodyHtmlTag="tfoot"
          data={footerDataSource}
          horizontalRenderInfo={info}
          getRowProps={getRowProps}
          primaryKey={primaryKey}
          verticalRenderInfo={{
            offset: 0,
            first: 0,
            last: footerDataSource.length - 1,
            limit: Infinity,
          }}
        />
      </div>
    )
  }

  private renderLockShadows(info: RenderInfo) {
    return (
      <>
        <div
          className={Classes.lockShadowMask}
          style={{ left: 0, width: info.leftLockTotalWidth + LOCK_SHADOW_PADDING }}
        >
          <div className={cx(Classes.lockShadow, Classes.leftLockShadow)} />
        </div>
        <div
          className={Classes.lockShadowMask}
          style={{ right: 0, width: info.rightLockTotalWidth + LOCK_SHADOW_PADDING }}
        >
          <div className={cx(Classes.lockShadow, Classes.rightLockShadow)} />
        </div>
      </>
    )
  }

  private renderStickyScroll(info: RenderInfo) {
    const { hasStickyScroll, stickyBottom } = this.props
    const { hasScroll } = this.state
    return (
      <div
        className={cx(Classes.stickyScroll, Classes.horizontalScrollContainer)}
        style={{
          display: hasStickyScroll && hasScroll ? 'block' : 'none',
          bottom: stickyBottom,
        }}
      >
        <div className={Classes.stickyScrollItem} />
      </div>
    )
  }

  /** 计算本次 render 所需要的数据 */
  private calculateRenderInfo(): RenderInfo {
    const { offsetX, maxRenderWidth } = this.state
    const { flat, nested, useVirtual } = calculateFlatAndNestedColumnsAndResolveUseVirtual(this.props)

    const horizontalRenderRange = getHorizontalRenderRange({ maxRenderWidth, offsetX, useVirtual, flat })
    const verticalRenderRange = this.getVerticalRenderRange(useVirtual)

    const fullFlatCount = flat.full.length
    const leftFlatCount = flat.left.length
    const rightFlatCount = flat.right.length

    const stickyLeftMap = new Map<number, number>()
    let stickyLeft = 0
    for (let i = 0; i < leftFlatCount; i++) {
      stickyLeftMap.set(i, stickyLeft)
      stickyLeft += flat.full[i].width
    }

    const stickyRightMap = new Map<number, number>()
    let stickyRight = 0
    for (let i = 0; i < rightFlatCount; i++) {
      stickyRightMap.set(fullFlatCount - 1 - i, stickyRight)
      stickyRight += flat.full[fullFlatCount - 1 - i].width
    }

    const leftLockTotalWidth = sum(flat.left.map((col) => col.width))
    const rightLockTotalWidth = sum(flat.right.map((col) => col.width))

    return {
      horizontalRenderRange,
      verticalRenderRange,
      visible: getVisibleColumnDescriptors(flat, horizontalRenderRange),
      flat,
      nested,
      useVirtual,
      stickyLeftMap,
      stickyRightMap,
      leftLockTotalWidth,
      rightLockTotalWidth,
      hasLockColumn: nested.left.length > 0 || nested.right.length > 0,
    }
  }

  render() {
    const info = this.calculateRenderInfo()
    this.lastInfo = info

    const {
      dataSource,
      className,
      style,
      hasHeader,
      useOuterBorder,
      isStickyHead,
      isStickyHeader,
      isStickyFooter,
      isLoading,
      footerDataSource,
      components,
    } = this.props

    const artTableWrapperClassName = cx(
      Classes.artTableWrapper,
      {
        'use-outer-border': useOuterBorder,
        empty: dataSource.length === 0,
        lock: info.hasLockColumn,
        'has-header': hasHeader,
        'sticky-header': isStickyHeader ?? isStickyHead,
        'has-footer': footerDataSource.length > 0,
        'sticky-footer': isStickyFooter,
      },
      className,
    )

    const artTableWrapperProps = {
      className: artTableWrapperClassName,
      style,
      [STYLED_REF_PROP]: this.artTableWrapperRef,
    }

    return (
      <StyledArtTableWrapper {...artTableWrapperProps}>
        <Loading
          visible={isLoading}
          LoadingIcon={components.LoadingIcon}
          LoadingContentWrapper={components.LoadingContentWrapper}
        >
          <div className={Classes.artTable}>
            {this.renderTableHeader(info)}
            {this.renderTableBody(info)}
            {this.renderTableFooter(info)}
            {this.renderLockShadows(info)}
          </div>
          {this.renderStickyScroll(info)}
        </Loading>
      </StyledArtTableWrapper>
    )
  }

  componentDidMount() {
    this.updateDOMHelper()
    this.data$ = new BehaviorSubject({
      props: this.props,
      state: this.state,
      info: this.lastInfo,
      prevProps: null,
      prevState: null,
    })
    this.initSubscriptions()
    this.didMountOrUpdate()
  }

  componentDidUpdate(prevProps: Readonly<BaseTableProps>, prevState: Readonly<BaseTableState>) {
    this.updateDOMHelper()
    this.data$.next({
      props: this.props,
      state: this.state,
      info: this.lastInfo,
      prevProps,
      prevState,
    })
    this.didMountOrUpdate(prevProps, prevState)
  }

  private didMountOrUpdate(prevProps?: Readonly<BaseTableProps>, prevState?: Readonly<BaseTableState>) {
    this.syncHorizontalScrollFromTableBody()
    this.updateStickyScroll()
    this.adjustNeedRenderLock()
    this.updateRowHeightManager(prevProps)
    this.updateScrollLeftWhenLayoutChanged(prevProps, prevState)
  }

  private updateScrollLeftWhenLayoutChanged(
    prevProps?: Readonly<BaseTableProps>,
    prevState?: Readonly<BaseTableState>,
  ) {
    if (prevState != null) {
      if (!prevState.hasScroll && this.state.hasScroll) {
        this.domHelper.stickyScroll.scrollLeft = 0
      }
    }

    if (prevProps != null) {
      const prevHasFooter = prevProps.footerDataSource.length > 0
      const currentHasFooter = this.props.footerDataSource.length > 0
      if (!prevHasFooter && currentHasFooter) {
        this.domHelper.tableFooter.scrollLeft = this.domHelper.tableBody.scrollLeft
      }
    }
  }

  private initSubscriptions() {
    const { tableHeader, tableBody, tableFooter, stickyScroll } = this.domHelper

    this.rootSubscription.add(
      throttledWindowResize$.subscribe(() => {
        this.updateStickyScroll()
        this.adjustNeedRenderLock()
      }),
    )

    // 滚动同步
    this.rootSubscription.add(
      syncScrollLeft([tableHeader, tableBody, tableFooter, stickyScroll], (scrollLeft) => {
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
        return getVisiblePartObservable(this.domHelper.artTable, resolvedFlowRoot)
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
        const loadingIndicator = this.domHelper.getLoadingIndicator()
        if (!loadingIndicator) {
          return
        }
        const height = clipRect.bottom - clipRect.top
        loadingIndicator.style.top = `${height / 2}px`
        loadingIndicator.style.marginTop = `${height / 2}px`
      }),
    )

    // 每当可见部分发生变化的时候，如果开启了虚拟滚动，则重新触发 render
    this.rootSubscription.add(
      visiblePart$
        .pipe(
          op.filter(() => {
            const { horizontal, vertical } = this.lastInfo.useVirtual
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
  private updateDOMHelper() {
    this.domHelper = new TableDOMHelper(this.artTableWrapperRef.current)
  }

  private updateRowHeightManager(prevProps?: Readonly<BaseTableProps>) {
    const virtualTop = this.domHelper.getVirtualTop()
    const virtualTopHeight = virtualTop?.clientHeight ?? 0

    let maxTrRowIndex = -1
    let maxTrBottom = -1

    for (const tr of this.domHelper.getTableRows()) {
      const rowIndex = Number(tr.dataset.rowindex)
      if (isNaN(rowIndex)) {
        continue
      }
      maxTrRowIndex = Math.max(maxTrRowIndex, rowIndex)
      const offset = tr.offsetTop + virtualTopHeight
      const size = tr.offsetHeight
      maxTrBottom = Math.max(maxTrBottom, offset + size)
      this.rowHeightManager.updateRow(rowIndex, offset, size)
    }

    // 当 estimatedRowHeight 过大时，可能出现「渲染行数过少，无法覆盖可视范围」的情况
    // 出现这种情况时，我们判断「下一次渲染能够渲染更多行」是否满足，满足的话就直接调用 forceUpdate
    if (maxTrRowIndex !== -1) {
      if (maxTrBottom < this.state.offsetY + this.state.maxRenderHeight) {
        const vertical = this.getVerticalRenderRange(this.lastInfo.useVirtual)
        if (vertical.bottomIndex - 1 > maxTrRowIndex) {
          this.forceUpdate()
        }
      }
    }
  }

  /** 计算表格所有列的渲染宽度之和，判断表格是否需要渲染锁列 */
  private adjustNeedRenderLock() {
    const { needRenderLock } = this.state
    const { flat, hasLockColumn } = this.lastInfo

    if (hasLockColumn) {
      const sumOfColWidth = sum(flat.full.map((col) => col.width))
      const nextNeedRenderLock = sumOfColWidth > this.domHelper.artTable.clientWidth
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
