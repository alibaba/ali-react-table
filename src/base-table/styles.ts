import styled from 'styled-components'

const prefix = 'art-'

// artTableWrapper modifiers: use-outer-border
// artTable modifiers: lock empty sticky has-header

export const Classes = {
  /** BaseTable 表格组件的外层包裹 div */
  artTableWrapper: `${prefix}table-wrapper`,

  /** BaseTable 主要内容 div；包含 3 个 left/main/right section */
  artTable: `${prefix}table`,

  lockShadow: `${prefix}lock-shadow`,

  mainSection: `${prefix}main-section`,
  leftSection: `${prefix}left-section`,
  rightSection: `${prefix}right-section`,

  tableInner: `${prefix}table-inner`,
  tableHeaderWrapper: `${prefix}table-header-wrapper`,
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

  /** 空白表格的（唯一）单元格 */
  emptyTableCell: `${prefix}empty-table-cell`,
  /** 数据为空时表格内容的外层 div */
  emptyWrapper: `${prefix}empty-wrapper`,
  emptyImage: `${prefix}empty-image`,
  emptyTips: `${prefix}empty-tips`,

  loadingWrapper: `${prefix}loading-wrapper`,
  loadingIndicatorWrapper: `${prefix}loading-indicator-wrapper`,
  loadingIndicator: `${prefix}loading-indicator`,
  loadingIndicatorIcon: `${prefix}loading-indicator-icon`,
  loadingContentWrapper: `${prefix}loading-content-wrapper`,
}

export const Z = {
  lock: 20,
  scrollItem: 30,
  header: 5,
  virtual: 3,
  tableInner: 2,
  shadow: 1,
}

export type BaseTableCSSVariables = Partial<{
  /** 表格的字体颜色 */
  '--color': string
  /** 表格背景颜色 */
  '--bgcolor': string
  /** 表头的字体颜色 */
  '--header-color': string
  /** 表头的背景颜色 */
  '--header-bgcolor': string
  /** 单元格的边框颜色 */
  '--border-color': string

  /** 表格行高，注意该属性将被作为 CSS variable，不能使用数字作为简写 */
  '--row-height': string
  /** 表格行 鼠标悬停时的背景色 */
  '--row-hover-color': string
  /** 表格行高，注意该属性将被作为 CSS variable，不能使用数字作为简写 */
  '--header-row-height': string

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

  /** 单元格边框 */
  '--cell-border-top': string
  /** 单元格边框 */
  '--cell-border-bottom': string
  /** 单元格边框 */
  '--cell-border-left': string
  /** 单元格边框 */
  '--cell-border-right': string

  /** 表头单元格边框 */
  '--header-cell-border-top': string
  /** 表头单元格边框 */
  '--header-cell-border-bottom': string
  /** 表头单元格边框 */
  '--header-cell-border-left': string
  /** 表头单元格边框 */
  '--header-cell-border-right': string
}>

const ArtTableWrapper = styled.div`
  --color: #333;
  --bgcolor: white;
  --header-color: #5a6c84;
  --header-bgcolor: #e9edf2;
  --border-color: #dfe3e8;

  --row-height: 48px;
  --row-hover-color: #f5f5f5;
  --header-row-height: 32px;

  --cell-border: 1px solid var(--border-color);
  --cell-border-horizontal: var(--cell-border);
  --cell-border-vertical: var(--cell-border);

  --header-cell-border: 1px solid var(--border-color);
  --header-cell-border-horizontal: var(--header-cell-border);
  --header-cell-border-vertical: var(--header-cell-border);

  --cell-border-top: var(--cell-border-horizontal);
  --cell-border-bottom: var(--cell-border-horizontal);
  --cell-border-left: var(--cell-border-vertical);
  --cell-border-right: var(--cell-border-vertical);

  --header-cell-border-top: var(--header-cell-border-horizontal);
  --header-cell-border-bottom: var(--header-cell-border-horizontal);
  --header-cell-border-left: var(--header-cell-border-vertical);
  --header-cell-border-right: var(--header-cell-border-vertical);

  background: var(--bgcolor);
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }

  // 表格外边框由 art-table-wrapper 提供，而不是由单元格提供
  &.use-outer-border {
    border: 1px solid var(--border-color);

    .${Classes.tableCell}.first, .${Classes.tableHeaderCell}.first {
      border-left: none;
    }
    .${Classes.tableCell}.last, .${Classes.tableHeaderCell}.last {
      border-right: none;
    }
    .${Classes.tableHeaderRow}.first .${Classes.tableHeaderCell}, .${Classes.tableRow}.first .${Classes.tableCell} {
      border-top: none;
    }
    .${Classes.tableRow}.last .${Classes.tableCell} {
      border-bottom: none;
    }
  }

  // 表格 header 总是从 body 中同步滚动 scrollLeft
  .${Classes.tableHeader} {
    overflow: hidden;
  }

  .${Classes.virtualBlank} {
    background: var(--bgcolor);
    // 这里是为了遮盖 z-index=1 的 lock-shadow
    z-index: ${Z.virtual};
  }
`

const MainSection = styled.div`
  // 表格的基本样式
  .${Classes.tableBody} {
    overflow: auto;
  }
  .${Classes.tableHeader} {
    overflow: hidden;
  }
`

const EmptyTableCell = styled.td`
  height: 200px;

  .use-outer-border & {
    border: none;
  }
`

const ArtTable = styled.div`
  // 表格的主要样式
  cursor: default;
  color: var(--color);
  font-size: 12px;
  line-height: 1.28571;
  position: relative;

  &.has-header {
    .${Classes.tableRow}.first td {
      border-top: none;
    }
  }

  &.sticky {
    .${Classes.tableHeaderWrapper} {
      position: sticky;
      top: 0;
      z-index: ${Z.header};
    }
  }

  .${Classes.tableHeaderWrapper} {
    background: var(--header-bgcolor);
  }

  .${Classes.tableRow} {
    &.hovered {
      background: var(--row-hover-color);
    }
  }

  table {
    width: 100%;
    table-layout: fixed;
    background: var(--bgcolor);
  }

  .${Classes.tableCell} {
    height: var(--row-height);
  }
  td,
  th {
    padding: 8px 12px;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
  }

  // 表头单元格的基本样式
  th {
    height: var(--header-row-height);
    color: var(--header-color);
    font-weight: 400;
    background: var(--header-bgcolor);
    text-align: left;
  }

  // 表格的边框样式
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td {
    border-left: var(--cell-border-left);
    border-right: var(--cell-border-right);
    border-top: var(--cell-border-top);
    border-bottom: var(--cell-border-bottom);
  }

  th {
    border-left: var(--header-cell-border-left);
    border-right: var(--header-cell-border-right);
    border-top: var(--header-cell-border-top);
    border-bottom: var(--header-cell-border-bottom);
  }
`

const LockSectionBase = styled.div`
  z-index: ${Z.lock};

  table {
    width: auto;
    overflow: hidden;
  }

  .${Classes.tableBody} {
    overflow: hidden;
  }
`

const LeftSection = styled(LockSectionBase)`
  position: absolute;
  left: 0;
  top: 0;

  &.${Classes.lockShadow} {
    &::before {
      content: '';
      position: absolute;
      top: 6px;
      width: 10px;
      bottom: 6px;
      z-index: ${Z.shadow};
      right: 0;
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
    }
    > .${Classes.tableInner} {
      position: relative;
      // 这里是为了遮盖 z-index=1 的 lock-shadow
      z-index: ${Z.tableInner};
    }
  }
`

const RightSection = styled(LockSectionBase)`
  position: absolute;
  right: 0;
  top: 0;

  &.${Classes.lockShadow} {
    &::before {
      content: '';
      position: absolute;
      top: 6px;
      width: 10px;
      bottom: 6px;
      z-index: ${Z.shadow};
      left: 0;
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
    }
    > .${Classes.tableInner} {
      position: relative;
      z-index: ${Z.tableInner};
    }
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

  .${Classes.emptyImage} {
    width: 50px;
    height: 50px;
  }

  .${Classes.emptyTips} {
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
  MainSection,
  LeftSection,
  RightSection,
  StickyScroll,
  EmptyWrapper,
  EmptyTableCell,
}
