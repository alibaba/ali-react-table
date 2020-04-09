import { transformColumn } from '../utils'
import React from 'react'
import { isLeafNode } from '../../common-utils'
import { TableTransform } from '../interfaces'

const EMPTY_RANGE = { start: -1, end: -1 }

type IndexRange = {
  start: number
  end: number
}

type ReactTdAttributes = React.TdHTMLAttributes<HTMLTableDataCellElement>

export function attachColumnHoverCellProps(
  cellProps: ReactTdAttributes = {},
  {
    onChangeHoverColIndexRange,
    hoverColIndexRange,
    colRange,
    hoverColor,
  }: {
    onChangeHoverColIndexRange: (nextColIndexRange: IndexRange) => void
    hoverColIndexRange: IndexRange
    colRange: IndexRange
    hoverColor: string
  },
): ReactTdAttributes {
  const colIndexMatched = colRange.end > hoverColIndexRange.start && hoverColIndexRange.end > colRange.start

  return {
    ...cellProps,
    onMouseEnter(e) {
      cellProps.onMouseEnter?.(e)
      onChangeHoverColIndexRange(colRange)
    },
    onMouseLeave(e) {
      cellProps.onMouseLeave?.(e)
      onChangeHoverColIndexRange(EMPTY_RANGE)
    },
    style: {
      ...cellProps.style,
      backgroundColor: colIndexMatched ? hoverColor : cellProps?.style?.backgroundColor,
    },
  }
}

// TODO 添加点击 保持高亮列的功能？

export default function columnRangeHover({
  hoverColor = '#f5f5f5',
  headerHoverColor = '#ddd',
  hoverColIndexRange,
  onChangeHoverColIndexRange,
}: {
  hoverColor?: string
  headerHoverColor?: string
  hoverColIndexRange: IndexRange
  onChangeHoverColIndexRange(nextColIndexRange: IndexRange): void
}): TableTransform {
  return transformColumn((col, { range: colRange }) => {
    if (!isLeafNode(col)) {
      if (headerHoverColor == null) {
        return col
      }

      return {
        ...col,
        headerCellProps: attachColumnHoverCellProps(col.headerCellProps, {
          onChangeHoverColIndexRange,
          hoverColor: headerHoverColor,
          colRange: colRange,
          hoverColIndexRange: hoverColIndexRange,
        }),
      }
    }

    const prevGetCellProps = col.getCellProps

    return {
      ...col,
      headerCellProps: attachColumnHoverCellProps(col.headerCellProps, {
        onChangeHoverColIndexRange,
        hoverColor: headerHoverColor,
        colRange: colRange,
        hoverColIndexRange: hoverColIndexRange,
      }),

      getCellProps(value: any, record: any, rowIndex: number): ReactTdAttributes {
        const prevCellProps = prevGetCellProps?.(value, record, rowIndex) ?? {}

        return attachColumnHoverCellProps(prevCellProps, {
          onChangeHoverColIndexRange,
          hoverColor,
          colRange,
          hoverColIndexRange: hoverColIndexRange,
        })
      },
    }
  })
}
