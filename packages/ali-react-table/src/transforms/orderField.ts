import { TableTransform } from '../interfaces'
import { traverseColumn } from '../utils'
import { warnTransformsDeprecated } from './warnTransformsDeprecated'

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function makeOrderFieldTransform(startOrder = 1): TableTransform {
  warnTransformsDeprecated('makeOrderFieldTransform')

  return traverseColumn((column) => {
    if (column.features?.order || column.features?.orderField) {
      return {
        ...column,
        getValue(record: any, index: number): any {
          return index + startOrder
        },
      }
    }
    return column
  })
}
