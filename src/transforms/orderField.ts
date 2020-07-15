import { TableTransform } from '../interfaces'
import { traverseColumn } from '../utils'

export function makeOrderFieldTransform(startOrder = 1): TableTransform {
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
