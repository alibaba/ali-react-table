import { useState } from 'react'
import { CellProps, HoverRange, TableTransform } from '../interfaces'
import { isLeafNode, mergeCellProps, traverseColumn } from '../utils'
import { warnTransformsDeprecated } from './warnTransformsDeprecated'

const EMPTY_RANGE = {
  start: -1,
  end: -1,
} as const

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export interface ColumnRangeHoverOptions {
  hoverColor?: string
  headerHoverColor?: string
  hoverRange: HoverRange
  onChangeHoverRange(nextColIndexRange: HoverRange): void
}

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function makeColumnRangeHoverTransform({
  hoverColor = 'var(--hover-bgcolor)',
  headerHoverColor = 'var(--header-hover-bgcolor)',
  hoverRange,
  onChangeHoverRange,
}: ColumnRangeHoverOptions): TableTransform {
  warnTransformsDeprecated('makeColumnRangeHoverTransform')

  return traverseColumn((col, { range: colRange }) => {
    const match = colRange.end > hoverRange.start && hoverRange.end > colRange.start

    if (!isLeafNode(col)) {
      if (headerHoverColor == null) {
        return col
      }

      return {
        ...col,
        headerCellProps: mergeCellProps(col.headerCellProps, {
          onMouseEnter() {
            onChangeHoverRange(colRange)
          },
          onMouseLeave() {
            onChangeHoverRange(EMPTY_RANGE)
          },
          style: { '--header-bgcolor': match ? headerHoverColor : undefined } as any,
        }),
      }
    }

    const prevGetCellProps = col.getCellProps

    return {
      ...col,
      headerCellProps: mergeCellProps(col.headerCellProps, {
        onMouseEnter() {
          onChangeHoverRange(colRange)
        },
        onMouseLeave() {
          onChangeHoverRange(EMPTY_RANGE)
        },
        style: { '--header-bgcolor': match ? headerHoverColor : undefined } as any,
      }),

      getCellProps(value: any, record: any, rowIndex: number): CellProps {
        const prevCellProps = prevGetCellProps?.(value, record, rowIndex)

        return mergeCellProps(prevCellProps, {
          onMouseEnter() {
            onChangeHoverRange(colRange)
          },
          onMouseLeave() {
            onChangeHoverRange(EMPTY_RANGE)
          },
          style: { '--bgcolor': match ? hoverColor : undefined } as any,
        })
      },
    }
  })
}

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function useColumnHoverRangeTransform({
  hoverColor,
  headerHoverColor,
  defaultHoverRange = EMPTY_RANGE,
}: Omit<ColumnRangeHoverOptions, 'hoverRange' | 'onChangeHoverRange'> & { defaultHoverRange?: HoverRange } = {}) {
  const [hoverRange, onChangeHoverRange] = useState(defaultHoverRange)
  return makeColumnRangeHoverTransform({ hoverColor, headerHoverColor, hoverRange, onChangeHoverRange })
}
