import { TableTransform } from 'ali-react-table'
import React, { useState } from 'react'
import { isLeafNode, traverseColumn } from '../utils'

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
    const colIndexMatched = range.start <= hoverColIndex && hoverColIndex < range.end

    if (!isLeafNode(col)) {
      return col
    }

    const prevGetCellProps = col.getCellProps

    return {
      ...col,
      getCellProps(value: any, record: any, rowIndex: number): React.TdHTMLAttributes<HTMLTableDataCellElement> {
        const prevCellProps = prevGetCellProps?.(value, record, rowIndex) ?? {}

        return {
          ...prevCellProps,
          style: {
            ...prevCellProps.style,
            backgroundColor: colIndexMatched ? hoverColor : undefined,
          },
          onMouseEnter(e) {
            prevCellProps.onMouseEnter?.(e)
            onChangeHoverColIndex(range.start)
          },
          onMouseLeave(e) {
            prevCellProps.onMouseLeave?.(e)
            onChangeHoverColIndex(-1)
          },
        }
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
