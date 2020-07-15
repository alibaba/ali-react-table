// todo 在 1.0 版本的时候 移除此文件
console.warn("[ali-react-table] 从 'ali-react-table/biz' 导入符号已经过时，请直接从 'ali-react-table' 导入符号.")

export * from './ali-react-table'

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

import { traverseColumn, compareStringOrNumber } from './ali-react-table'

/** @deprecated [ali-react-table] transformColumn 已经过时, 请使用 traverseColumn 代替 */
export const transformColumn = deprecate(traverseColumn, 'transformColumn', 'traverseColumn')

/** @deprecated [ali-react-table] smartCompare 已经过时, 请使用 compareStringOrNumber 代替 */
export const smartCompare = deprecate(compareStringOrNumber, 'smartCompare', 'compareStringOrNumber')

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
  get autoRowSpan() {
    isDev && console.warn(deprecateMessage('commonTransforms.autoRowSpan', 'makeAutoRowSpanTransform'))
    return makeAutoRowSpanTransform
  },
  get buildTree() {
    isDev && console.warn(deprecateMessage('commonTransforms.buildTree', 'makeBuildTreeTransform'))
    return makeBuildTreeTransform
  },
  get columnHover() {
    isDev && console.warn(deprecateMessage('commonTransforms.columnHover', 'makeColumnHoverTransform'))
    return makeColumnHoverTransform
  },
  get columnRangeHover() {
    isDev && console.warn(deprecateMessage('commonTransforms.columnRangeHover', 'makeColumnRangeHoverTransform'))
    return makeColumnRangeHoverTransform
  },
  get columnResize() {
    isDev && console.warn(deprecateMessage('commonTransforms.columnResize', 'makeColumnResizeTransform'))
    return makeColumnResizeTransform
  },
  get flatten() {
    isDev && console.warn(deprecateMessage('commonTransforms.flatten', 'makeFlattenTransform'))
    return makeFlattenTransform
  },
  get orderField() {
    isDev && console.warn(deprecateMessage('commonTransforms.orderField', 'makeOrderFieldTransform'))
    return makeOrderFieldTransform
  },
  get sort() {
    isDev && console.warn(deprecateMessage('commonTransforms.sort', 'makeSortTransform'))
    return makeSortTransform
  },
  get tips() {
    isDev && console.warn(deprecateMessage('commonTransforms.tips', 'makeTipsTransform'))
    return makeTipsTransform
  },
  get treeMode() {
    isDev && console.warn(deprecateMessage('commonTransforms.treeMode', 'makeTreeModeTransform'))
    return makeTreeModeTransform
  },
  get visible() {
    isDev && console.warn(deprecateMessage('commonTransforms.visible', 'makeVisibleTransform'))
    return makeVisibleTransform
  },
  get treeMetaSymbol(): typeof treeMetaSymbol {
    isDev &&
      console.warn(
        `[ali-react-table] commonTransforms.treeMetaSymbol 已经过时, 请直接从 ali-react-table 导入 treeMetaSymbol`,
      )
    return treeMetaSymbol
  },
} as const
