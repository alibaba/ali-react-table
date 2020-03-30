import { TableTransform } from '../../interfaces'
import { transformColumn } from '../utils'

export default function orderField(startOrder = 1): TableTransform {
  return transformColumn(field => {
    if (field.features?.order) {
      return {
        ...field,
        getValue(record: any, index: number): any {
          return index + startOrder
        },
      }
    }
    return field
  })
}
