// todo 在 1.0 版本的时候 移除此文件
console.warn("[ali-react-table] 从 'ali-react-table/biz' 导入符号已经过时，请直接从 'ali-react-table' 导入符号.")

export * from './ali-react-table'

export { default as CustomColumnsDialog, CustomColumnsDialogProps } from './deprecated-biz/CustomColumnsDialog'
export { TableOperationFeature, useOperationBar } from './deprecated-biz/operation-bar'

const isDev = process.env.NODE_ENV !== 'production'

function deprecateMessage(oldName: string, newName: string) {
  return `[ali-react-table] ${oldName} 已经过时, 请使用 ${newName} 代替`
}

function deprecate<T>(fn: T, oldName: string, newName: string): T {
  let warned = false
  return ((...args: any[]) => {
    if (isDev && !warned) {
      warned = true
      console.warn(deprecateMessage(oldName, newName))
    }
    return (fn as any)(...args)
  }) as any
}

import {
  ColumnHoverOptions as _ColumnHoverOptions,
  ColumnRangeHoverOptions as _ColumnRangeHoverOptions,
  ColumnResizeOptions as _ColumnResizeOptions,
  SortHeaderCellProps as _SortHeaderCellProps,
  SortOptions as _SortOptions,
  TipsOptions as _TipsOptions,
  traverseColumn,
  TreeModeOptions as _TreeModeOptions,
} from './ali-react-table'

/** @deprecated [ali-react-table] transformColumn 已经过时, 请使用 traverseColumn 代替 */
export const transformColumn = deprecate(traverseColumn, 'transformColumn', 'traverseColumn')

/** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
export namespace commonTransforms {
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  export type ColumnRangeHoverOptions = _ColumnRangeHoverOptions

  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  export type ColumnHoverOptions = _ColumnHoverOptions

  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  export type ColumnResizeOptions = _ColumnResizeOptions

  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  export type SortHeaderCellProps = _SortHeaderCellProps

  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  export type SortOptions = _SortOptions

  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  export type TipsOptions = _TipsOptions

  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  export type TreeModeOptions = _TreeModeOptions
}

import {
  makeAutoRowSpanTransform,
  makeBuildTreeTransform,
  makeColumnHoverTransform,
  makeColumnRangeHoverTransform,
  makeColumnResizeTransform,
  makeFlattenTransform,
  makeOrderFieldTransform,
  makeSortTransform,
  makeTipsTransform,
  makeTreeModeTransform,
  makeVisibleTransform,
  treeMetaSymbol,
} from './transforms'

/** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
export const commonTransforms = {
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get autoRowSpan() {
    isDev && console.warn(deprecateMessage('commonTransforms.autoRowSpan', 'makeAutoRowSpanTransform'))
    return makeAutoRowSpanTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get buildTree() {
    isDev && console.warn(deprecateMessage('commonTransforms.buildTree', 'makeBuildTreeTransform'))
    return makeBuildTreeTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get columnHover() {
    isDev && console.warn(deprecateMessage('commonTransforms.columnHover', 'makeColumnHoverTransform'))
    return makeColumnHoverTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get columnRangeHover() {
    isDev && console.warn(deprecateMessage('commonTransforms.columnRangeHover', 'makeColumnRangeHoverTransform'))
    return makeColumnRangeHoverTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get columnResize() {
    isDev && console.warn(deprecateMessage('commonTransforms.columnResize', 'makeColumnResizeTransform'))
    return makeColumnResizeTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get flatten() {
    isDev && console.warn(deprecateMessage('commonTransforms.flatten', 'makeFlattenTransform'))
    return makeFlattenTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get orderField() {
    isDev && console.warn(deprecateMessage('commonTransforms.orderField', 'makeOrderFieldTransform'))
    return makeOrderFieldTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get sort() {
    isDev && console.warn(deprecateMessage('commonTransforms.sort', 'makeSortTransform'))
    return makeSortTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get tips() {
    isDev && console.warn(deprecateMessage('commonTransforms.tips', 'makeTipsTransform'))
    return makeTipsTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get treeMode() {
    isDev && console.warn(deprecateMessage('commonTransforms.treeMode', 'makeTreeModeTransform'))
    return makeTreeModeTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get visible() {
    isDev && console.warn(deprecateMessage('commonTransforms.visible', 'makeVisibleTransform'))
    return makeVisibleTransform
  },
  /** @deprecated commonTransforms 已经过时，请直接从 ali-react-table 引入相关的 api */
  get treeMetaSymbol(): typeof treeMetaSymbol {
    isDev &&
      console.warn(
        `[ali-react-table] commonTransforms.treeMetaSymbol 已经过时, 请直接从 ali-react-table 导入 treeMetaSymbol`,
      )
    return treeMetaSymbol
  },
} as const
