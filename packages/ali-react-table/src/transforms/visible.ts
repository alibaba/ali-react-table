import { isLeafNode, traverseColumn } from '../utils'
import { warnTransformsDeprecated } from './warnTransformsDeprecated'

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function makeVisibleTransform(visibleCodes: string[]) {
  warnTransformsDeprecated('makeVisibleTransform')

  const set = new Set(visibleCodes)
  return traverseColumn((column) => {
    if (!isLeafNode(column)) {
      return column
    }
    return set.has(column.code) ? column : { ...column, hidden: true }
  })
}
