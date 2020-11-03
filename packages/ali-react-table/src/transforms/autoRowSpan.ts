import { SpanRect, TableTransform } from '../interfaces'
import { internals } from '../internals'
import { isLeafNode, traverseColumn } from '../utils'
import { warnTransformsDeprecated } from './warnTransformsDeprecated'

function isIdentity(x: any, y: any) {
  return x === y
}

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function makeAutoRowSpanTransform(): TableTransform {
  warnTransformsDeprecated('makeAutoRowSpanTransform')

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
    let prevRow: any = null

    for (let rowIndex = 0; rowIndex < dataSource.length; rowIndex++) {
      const row = dataSource[rowIndex]
      const value = internals.safeGetValue(col, row, rowIndex)

      if (rowIndex === 0 || !shouldMergeCell(prevValue, value, prevRow, row)) {
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
      prevRow = row
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
