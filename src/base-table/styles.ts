import styled from 'styled-components'

const prefix = 'art-'

export const Classes = {
  /** BaseTable 表格组件的外层包裹 div */
  artTableWrapper: `${prefix}table-wrapper`,

  artTable: `${prefix}table`,
  tableHeader: `${prefix}table-header`,
  tableBody: `${prefix}table-body`,

  /** 表格行 */
  tableRow: `${prefix}table-row`,
  /** 表头行 */
  tableHeaderRow: `${prefix}table-header-row`,
  /** 单元格 */
  tableCell: `${prefix}table-cell`,
  /** 表头的单元格 */
  tableHeaderCell: `${prefix}table-header-cell`,
  virtualBlank: `${prefix}virtual-blank`,

  stickyScroll: `${prefix}sticky-scroll`,
  stickyScrollItem: `${prefix}sticky-scroll-item`,

  leftLockShadow: `${prefix}left-lock-shadow`,
  rightLockShadow: `${prefix}right-lock-shadow`,

  /** 数据为空时表格内容的外层 div */
  emptyWrapper: `${prefix}empty-wrapper`,

  loadingWrapper: `${prefix}loading-wrapper`,
  loadingIndicatorWrapper: `${prefix}loading-indicator-wrapper`,
  loadingIndicator: `${prefix}loading-indicator`,
  loadingIndicatorIcon: `${prefix}loading-indicator-icon`,
  loadingContentWrapper: `${prefix}loading-content-wrapper`,
} as const

const Z = {
  lock: 5,
  header: 10,
  lockShadow: 20,
  scrollItem: 30,
} as const

export type BaseTableCSSVariables = Partial<{
  /** 表格的字体颜色 */
  '--color': string
  /** 表格背景颜色 */
  '--bgcolor': string
  /** 鼠标悬停时的背景色 */
  '--hover-color': string
  /** 表格行高，注意该属性将被作为 CSS variable，不能使用数字作为简写 */
  '--row-height': string

  /** 表头的字体颜色 */
  '--header-color': string
  /** 表头的背景颜色 */
  '--header-bgcolor': string
  /** 表格行高，注意该属性将被作为 CSS variable，不能使用数字作为简写 */
  '--header-row-height': string

  /** 单元格的边框颜色 */
  '--border-color': string
  /** 单元格边框，默认为 1px solid var(--border-color) */
  '--cell-border': string
  /** 单元格上下边框，默认为 var(--cell-border) */
  '--cell-border-horizontal': string
  /** 单元格左右边框，默认为 var(--cell-border) */
  '--cell-border-vertical': string
  /** 表头单元格边框，默认为 1px solid var(--border-color) */
  '--header-cell-border': string
  /** 表头单元格上下边框，默认为 var(--header-cell-border) */
  '--header-cell-border-horizontal': string
  /** 表头单元格左右边框，默认为 var(--header-cell-border) */
  '--header-cell-border-vertical': string
}>

const ArtTableWrapper = styled.div`
  --color: #333;
  --bgcolor: white;
  --hover-color: #f5f5f5;
  --row-height: 48px;

  --header-color: #5a6c84;
  --header-bgcolor: #e9edf2;
  --header-row-height: 32px;

  --border-color: #dfe3e8;
  --cell-border: 1px solid var(--border-color);
  --cell-border-horizontal: var(--cell-border);
  --cell-border-vertical: var(--cell-border);
  --header-cell-border: 1px solid var(--border-color);
  --header-cell-border-horizontal: var(--header-cell-border);
  --header-cell-border-vertical: var(--header-cell-border);

  overflow-anchor: none;
  background: var(--bgcolor);
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }

  // 表格外边框由 art-table-wrapper 提供，而不是由单元格提供
  &.use-outer-border {
    border: 1px solid var(--border-color);

    td.first,
    th.first {
      border-left: none;
    }
    td.last,
    th.last {
      border-right: none;
    }
    tr.first th,
    tr.first td {
      border-top: none;
    }
    tr.last td {
      border-bottom: none;
    }
  }

  .${Classes.virtualBlank} {
    background: var(--bgcolor);
  }
`

const ArtTable = styled.div`
  // 表格的主要样式
  cursor: default;
  color: var(--color);
  font-size: 12px;
  line-height: 1.28571;
  position: relative;

  .${Classes.tableHeader} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--header-bgcolor);
    // 隐藏 header 中的滚动条
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .${Classes.tableBody} {
    overflow-x: auto;
    overflow-y: hidden;
  }

  &.sticky {
    .${Classes.tableHeader} {
      position: sticky;
      top: 0;
      z-index: ${Z.header};
    }
  }

  table {
    width: 100%;
    table-layout: fixed;
    background: var(--bgcolor);
    border-collapse: separate;
    border-spacing: 0;
  }

  tr:hover {
    --bgcolor: var(--hover-color);
  }

  th {
    font-weight: normal;
    text-align: left;
    padding: 8px 12px;
    height: var(--header-row-height);
    color: var(--header-color);
    background: var(--header-bgcolor);
    border-right: var(--header-cell-border-vertical);
    border-bottom: var(--header-cell-border-horizontal);
  }
  tr.first th {
    border-top: var(--header-cell-border-horizontal);
  }
  th.first {
    border-left: var(--header-cell-border-vertical);
  }

  td {
    padding: 8px 12px;
    background: var(--bgcolor);
    height: var(--row-height);
    border-right: var(--cell-border-vertical);
    border-bottom: var(--cell-border-horizontal);
  }
  td.first {
    border-left: var(--cell-border-vertical);
  }
  tr.first td {
    border-top: var(--cell-border-horizontal);
  }
  &.has-header {
    tr.first td {
      border-top: none;
    }
  }

  .lock-left,
  .lock-right {
    z-index: ${Z.lock};
  }

  .${Classes.leftLockShadow} {
    // 具体是否展示由 JS 来控制
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: ${Z.lockShadow};
    box-shadow: rgba(0, 0, 0, 0.25) 10px 0 8px -8px;
    border-right: var(--cell-border-vertical);
    pointer-events: none;
  }

  .${Classes.rightLockShadow} {
    // 具体是否展示由 JS 来控制
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: ${Z.lockShadow};
    box-shadow: rgba(0, 0, 0, 0.25) -10px 0 8px -8px;
    pointer-events: none;
  }
`

const EmptyWrapper = styled.div`
  color: #99a3b3;
  font-size: 12px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .empty-image {
    width: 50px;
    height: 50px;
  }

  .empty-tips {
    margin-top: 16px;
    line-height: 1.5;
  }
`

const StickyScroll = styled.div`
  overflow: auto;
  position: sticky;
  bottom: 0;
  z-index: ${Z.scrollItem};
  margin-top: -17px;

  .${Classes.stickyScrollItem} {
    // 必须有高度才能出现滚动条
    height: 1px;
    visibility: hidden;
  }
`

export const Styled = {
  ArtTableWrapper,
  ArtTable,
  StickyScroll,
  EmptyWrapper,
}
