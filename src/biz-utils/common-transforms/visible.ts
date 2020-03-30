import { isLeafNode } from '../../common-utils'
import { transformColumn } from '../utils'

export default function visible(visibleCodes: string[]) {
  const set = new Set(visibleCodes)
  return transformColumn(column => {
    if (!isLeafNode(column)) {
      return column
    }
    return set.has(column.code) ? column : { ...column, hidden: true }
  })
}
