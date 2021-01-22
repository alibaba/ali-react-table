import { Classes } from '../styles'

// 表格 DOM 结构
// div.art-table-wrapper
// └── div.art-loading-wrapper
//     ├── div.art-loading-indicator-wrapper
//     │   └── div.art-loading-indicator
//     │
//     └── div.art-loading-content-wrapper
//         ├── div.art-table
//         │   │
//         │   ├── div.art-table-header
//         │   │  └── table
//         │   │      ├── colgroup
//         │   │      └── thead  注意这里会出现自定义内容，可能存在嵌套表格
//         │   │
//         │   ├── div.art-table-body
//         │   │   ├── div.art-virtual-blank.top
//         │   │   ├── table
//         │   │   │   ├── colgroup
//         │   │   │   └── tbody 注意这里会出现自定义内容，可能存在嵌套表格
//         │   │   └── div.art-virtual-blank.bottom
//         │   │
//         │   ├── div.art-table-footer
//         │   │  └── table
//         │   │      ├── colgroup
//         │   │      └── tfoot  注意这里会出现自定义内容，可能存在嵌套表格
//         │   │
//         │   ├── div.art-lock-shadow-mask
//         │   │   └── div.art-left-lock-shadow
//         │   └── div.art-lock-shadow-mask
//         │       └── div.art-right-lock-shadow
//         │
//         └── div.art-sticky-scroll
//             └── div.art-sticky-scroll-item
//
// 在「可能存在嵌套表格」的情况下，我们可以采用以下的方式来避免「querySelector 不小心获取到了的嵌套表格上的元素」：
//  artTable.querySelector(':scope > .art-lock-shadow-mask .art-left-lock-shadow')

// 表格 DOM 结构辅助工具
export class TableDOMHelper {
  readonly artTableWrapper: HTMLDivElement
  readonly artTable: HTMLDivElement
  readonly tableHeader: HTMLDivElement
  readonly tableBody: HTMLDivElement
  readonly tableFooter: HTMLDivElement

  readonly stickyScroll: HTMLDivElement
  readonly stickyScrollItem: HTMLDivElement

  constructor(artTableWrapper: HTMLDivElement) {
    this.artTableWrapper = artTableWrapper
    this.artTable = artTableWrapper.querySelector<HTMLDivElement>(`.${Classes.artTable}`)
    this.tableHeader = this.artTable.querySelector(`:scope > .${Classes.tableHeader}`)
    this.tableBody = this.artTable.querySelector(`:scope > .${Classes.tableBody}`)
    this.tableFooter = this.artTable.querySelector(`:scope > .${Classes.tableFooter}`)

    const stickyScrollSelector = `.${Classes.artTable} + .${Classes.stickyScroll}`
    this.stickyScroll = artTableWrapper.querySelector<HTMLDivElement>(stickyScrollSelector)
    this.stickyScrollItem = this.stickyScroll.querySelector(`.${Classes.stickyScrollItem}`)
  }

  getVirtualTop(): HTMLDivElement {
    return this.tableBody.querySelector<HTMLDivElement>(`.${Classes.virtualBlank}.top`)
  }

  getTableRows(): NodeListOf<HTMLTableRowElement> {
    const htmlTable = this.getTableBodyHtmlTable()
    return htmlTable.querySelectorAll<HTMLTableRowElement>(`:scope > tbody > .${Classes.tableRow}`)
  }

  getTableBodyHtmlTable(): HTMLTableElement {
    return this.artTable.querySelector(`.${Classes.tableBody} table`)
  }

  getLeftLockShadow(): HTMLDivElement {
    const selector = `:scope > .${Classes.lockShadowMask} .${Classes.leftLockShadow}`
    return this.artTable.querySelector<HTMLDivElement>(selector)
  }

  getRightLockShadow(): HTMLDivElement {
    const selector = `:scope > .${Classes.lockShadowMask} .${Classes.rightLockShadow}`
    return this.artTable.querySelector<HTMLDivElement>(selector)
  }

  getLoadingIndicator(): HTMLDivElement {
    return this.artTableWrapper.querySelector<HTMLDivElement>(`.${Classes.loadingIndicator}`)
  }
}
