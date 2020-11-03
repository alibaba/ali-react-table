import { CellProps, HoverRange } from '../../interfaces'
import { isLeafNode, makeRecursiveMapper, mergeCellProps } from '../../utils'
import { TablePipeline } from '../pipeline'

const EMPTY_RANGE: HoverRange = {
  start: -1,
  end: -1,
} as const

export interface ColumnRangeHoverFeatureOptions {
  /** 鼠标悬停时单元格的背景色，默认为 'var(--hover-bgcolor)' */
  hoverColor?: string

  /** 鼠标悬停时表头的背景色，默认为 'var(--header-hover-bgcolor)' */
  headerHoverColor?: string

  /** 非受控用法：默认的悬停范围 */
  defaultHoverRange?: HoverRange

  /** 受控用法：当前悬停范围 */
  hoverRange?: HoverRange

  /** 受控用法：悬停渲染改变的回调 */
  onChangeHoverRange?(nextColIndexRange: HoverRange): void
}

export function columnRangeHover(opts: ColumnRangeHoverFeatureOptions = {}) {
  const stateKey = 'columnHover'

  return function columnRangeHoverStep(pipeline: TablePipeline) {
    const hoverRange = opts.hoverRange ?? pipeline.getStateAtKey(stateKey) ?? opts.defaultHoverRange ?? EMPTY_RANGE

    const hoverColor = opts.hoverColor ?? 'var(--hover-bgcolor)'
    const headerHoverColor = opts.headerHoverColor ?? 'var(--header-hover-bgcolor)'

    const onChangeHoverRange = (nextColIndexRange: HoverRange) => {
      pipeline.setStateAtKey(stateKey, nextColIndexRange)
      opts.onChangeHoverRange?.(nextColIndexRange)
    }

    return pipeline.mapColumns(
      makeRecursiveMapper((col, { startIndex, endIndex }) => {
        const colRange = { start: startIndex, end: endIndex }
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
      }),
    )
  }
}
