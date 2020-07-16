import React, { useState } from 'react'
import { TableTransform } from '../interfaces'
import { isLeafNode, mergeCellProps, traverseColumn } from '../utils'

export interface ColumnHoverOptions {
  hoverColor?: string
  hoverColIndex: number
  onChangeHoverColIndex(nextColIndex: number): void
}

export function makeColumnHoverTransform({
  hoverColor = '#f5f5f5',
  hoverColIndex,
  onChangeHoverColIndex,
}: ColumnHoverOptions): TableTransform {
  return traverseColumn((col, { range }) => {
    if (!isLeafNode(col)) {
      return col
    }

    const colIndexMatched = range.start <= hoverColIndex && hoverColIndex < range.end

    const prevGetCellProps = col.getCellProps

    return {
      ...col,
      getCellProps(value: any, record: any, rowIndex: number) {
        const prevCellProps = prevGetCellProps?.(value, record, rowIndex)

        return mergeCellProps(prevCellProps, {
          style: { backgroundColor: colIndexMatched ? hoverColor : undefined },
          onMouseEnter() {
            onChangeHoverColIndex(range.start)
          },
          onMouseLeave() {
            onChangeHoverColIndex(-1)
          },
        })
      },
    }
  })
}

export function useColumnHoverTransform({
  hoverColor,
  defaultHoverColIndex = -1,
}: { hoverColor?: string; defaultHoverColIndex?: number } = {}) {
  const [hoverColIndex, onChangeHoverColIndex] = useState(defaultHoverColIndex)
  return makeColumnHoverTransform({ hoverColor, hoverColIndex, onChangeHoverColIndex })
}
