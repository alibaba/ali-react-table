import { TableTransform } from '../interfaces'
import { transformColumn } from '../utils'

export function orderField(startOrder = 1): TableTransform {
  return transformColumn((column) => {
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
