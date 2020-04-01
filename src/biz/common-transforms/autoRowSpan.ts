import { safeGetValue } from '../../common-utils/internals'
import isLeafNode from '../../common-utils/isLeafNode'
import { SpanRect } from '../../interfaces'
import { TableTransform } from '../interfaces'
import { transformColumn } from '../utils'

export default function autoRowSpan(): TableTransform {
  return transformColumn((col, { dataSource, range }) => {
    if (!col.features?.autoRowSpan) {
      return col
    }

    if (!isLeafNode(col)) {
      return col
    }

    const shouldMergeCell =
      typeof col.features.autoRowSpan === 'function'
        ? col.features.autoRowSpan
        : (v1: any, v2: any) => {
            return v1 === v2
          }

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
