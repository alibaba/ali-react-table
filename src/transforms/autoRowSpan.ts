import { SpanRect, TableTransform } from '../interfaces'
import { safeGetValue } from '../internals'
import { isLeafNode, traverseColumn } from '../utils'

function isIdentity(x: any, y: any) {
  return x === y
}

export function makeAutoRowSpanTransform(): TableTransform {
  return traverseColumn((col, { dataSource, range }) => {
    if (!col.features?.autoRowSpan) {
      return col
    }

    if (!isLeafNode(col)) {
      return col
    }

    const isFunc = typeof col.features.autoRowSpan === 'function'
    const shouldMergeCell = isFunc ? col.features.autoRowSpan : isIdentity

    const spanRects: SpanRect[] = []
    let lastBottom = 0
    let prevValue: any = null

    for (let rowIndex = 0; rowIndex < dataSource.length; rowIndex++) {
      const value = safeGetValue(col, dataSource[rowIndex], rowIndex)

      if (rowIndex === 0 || !shouldMergeCell(prevValue, value)) {
        const spanRect: SpanRect = {
          top: lastBottom,
          bottom: rowIndex,
          left: range.start,
          right: range.end,
        }
        for (let i = lastBottom; i < rowIndex; i++) {
          spanRects.push(spanRect)
        }
        lastBottom = rowIndex
      }
      prevValue = value
    }

    for (let i = lastBottom; i < dataSource.length; i++) {
      spanRects.push({
        top: lastBottom,
        bottom: dataSource.length,
        left: range.start,
        right: range.end,
      })
    }

    return {
      ...col,
      getSpanRect(value: any, row: any, rowIndex: number) {
        return spanRects[rowIndex]
      },
    }
  })
}
