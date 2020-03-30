import { isLeafNode } from '../../common-utils'
import { TableTransform } from '../../interfaces'
import { transformColumn } from '../utils'

export default function flatten(): TableTransform {
  return transformColumn(column => {
    if (isLeafNode(column)) {
      return column
    }
    return column.features?.flatten ? column.children : column
  })
}
