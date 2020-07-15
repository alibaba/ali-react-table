import { isLeafNode, traverseColumn } from '../utils'

export function makeVisibleTransform(visibleCodes: string[]) {
  const set = new Set(visibleCodes)
  return traverseColumn((column) => {
    if (!isLeafNode(column)) {
      return column
    }
    return set.has(column.code) ? column : { ...column, hidden: true }
  })
}
