import { TableTransform } from '../interfaces'
import { isLeafNode, traverseColumn } from '../utils'

export function makeFlattenTransform(): TableTransform {
  return traverseColumn((column) => {
    if (isLeafNode(column)) {
      return column
    }
    return column.features?.flatten ? column.children : column
  })
}
