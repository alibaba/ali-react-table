import React from 'react'
import { isLeafNode } from '../../common-utils'
import { TableTransform } from '../interfaces'
import { transformColumn } from '../utils'

const EMPTY_RANGE = { start: -1, end: -1 }

type HoverRange = {
  start: number
  end: number
}

type ReactTdAttributes = React.TdHTMLAttributes<HTMLTableDataCellElement>

export function attachColumnHoverCellProps(
  cellProps: ReactTdAttributes = {},
  {
    onChangeHoverRange,
    hoverRange,
    colRange,
    hoverColor,
  }: {
    onChangeHoverRange: (nextColIndexRange: HoverRange) => void
    hoverRange: HoverRange
    colRange: HoverRange
    hoverColor: string
  },
): ReactTdAttributes {
  const colIndexMatched = colRange.end > hoverRange.start && hoverRange.end > colRange.start

  return {
    ...cellProps,
    onMouseEnter(e) {
      cellProps.onMouseEnter?.(e)
      onChangeHoverRange(colRange)
    },
    onMouseLeave(e) {
      cellProps.onMouseLeave?.(e)
      onChangeHoverRange(EMPTY_RANGE)
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
  hoverRange,
  onChangeHoverRange,
}: {
  hoverColor?: string
  headerHoverColor?: string
  hoverRange: HoverRange
  onChangeHoverRange(nextColIndexRange: HoverRange): void
}): TableTransform {
  return transformColumn((col, { range: colRange }) => {
    if (!isLeafNode(col)) {
      if (headerHoverColor == null) {
        return col
      }

      return {
        ...col,
        headerCellProps: attachColumnHoverCellProps(col.headerCellProps, {
          onChangeHoverRange,
          hoverColor: headerHoverColor,
          colRange,
          hoverRange,
        }),
      }
    }

    const prevGetCellProps = col.getCellProps

    return {
      ...col,
      headerCellProps: attachColumnHoverCellProps(col.headerCellProps, {
        onChangeHoverRange,
        hoverColor: headerHoverColor,
        colRange,
        hoverRange,
      }),

      getCellProps(value: any, record: any, rowIndex: number): ReactTdAttributes {
        const prevCellProps = prevGetCellProps?.(value, record, rowIndex) ?? {}

        return attachColumnHoverCellProps(prevCellProps, {
          onChangeHoverRange,
          hoverColor,
          colRange,
          hoverRange,
        })
      },
    }
  })
}
