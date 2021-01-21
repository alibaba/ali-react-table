import { isLeafNode, makeRecursiveMapper, mergeCellProps } from '../../utils'
import { TablePipeline } from '../pipeline'

export interface ColumnHoverFeatureOptions {
  /** 鼠标悬停的颜色，默认为 'var(--hover-bgcolor)' */
  hoverColor?: string

  /** 非受控用法：默认的 colIndex */
  defaultHoverColIndex?: number

  /** 受控用法：当前鼠标悬停列的下标（colIndex) */
  hoverColIndex?: number

  /** 受控用法：colIndex 改变的回调 */
  onChangeHoverColIndex?(nextColIndex: number): void
}

export function columnHover(opts: ColumnHoverFeatureOptions = {}) {
  const stateKey = 'columnHover'

  return (pipeline: TablePipeline) => {
    const hoverColor = opts.hoverColor ?? 'var(--hover-bgcolor)'
    const hoverColIndex = opts.hoverColIndex ?? pipeline.getStateAtKey(stateKey) ?? opts.defaultHoverColIndex ?? -1
    const onChangeHoverColIndex = (nextColIndex: number) => {
      pipeline.setStateAtKey(stateKey, nextColIndex)
      opts.onChangeHoverColIndex?.(nextColIndex)
    }

    return pipeline.mapColumns(
      makeRecursiveMapper((col, { startIndex, endIndex }) => {
        const range = { start: startIndex, end: endIndex }
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
              style: { '--bgcolor': colIndexMatched ? hoverColor : undefined } as any,
              onMouseEnter() {
                onChangeHoverColIndex(range.start)
              },
              onMouseLeave() {
                onChangeHoverColIndex(-1)
              },
            })
          },
        }
      }),
    )
  }
}
