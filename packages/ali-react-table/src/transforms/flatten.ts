import { TableTransform } from '../interfaces'
import { isLeafNode, traverseColumn } from '../utils'
import { warnTransformsDeprecated } from './warnTransformsDeprecated'

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function makeFlattenTransform(): TableTransform {
  warnTransformsDeprecated('makeFlattenTransform')

  return traverseColumn((column) => {
    if (isLeafNode(column)) {
      return column
    }
    return column.features?.flatten ? column.children : column
  })
}
