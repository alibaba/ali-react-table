import {
  HoverRange,
  makeAutoRowSpanTransform,
  makeBuildTreeTransform,
  makeColumnHoverTransform,
  makeColumnRangeHoverTransform,
  makeTipsTransform,
} from '../../transforms'
import { buildTree as _buildTree } from '../../utils'
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

export function columnHover(inputOpts: boolean | ColumnHoverFeatureOptions = {}) {
  const stateKey = 'columnHover'

  return <P extends TablePipeline>(pipeline: P) => {
    if (inputOpts === false) {
      return pipeline
    }
    const opts: ColumnHoverFeatureOptions = typeof inputOpts === 'boolean' ? {} : inputOpts

    const hoverColIndex = opts.hoverColIndex ?? pipeline.state[stateKey] ?? opts.defaultHoverColIndex ?? -1

    return pipeline.useTransform(
      makeColumnHoverTransform({
        hoverColor: opts.hoverColor,
        hoverColIndex: hoverColIndex,
        onChangeHoverColIndex: (nextColIndex) => {
          pipeline.setStateAtKey(stateKey, nextColIndex)
          opts.onChangeHoverColIndex?.(nextColIndex)
        },
      }),
    )
  }
}

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

export function columnRangeHover(inputOpts: boolean | ColumnRangeHoverFeatureOptions = {}) {
  const stateKey = 'columnHover'

  return <P extends TablePipeline>(pipeline: P) => {
    if (inputOpts === false) {
      return pipeline
    }
    const opts: ColumnRangeHoverFeatureOptions = typeof inputOpts === 'boolean' ? {} : inputOpts
    const hoverRange = opts.hoverRange ?? pipeline.state[stateKey] ?? opts.defaultHoverRange ?? { start: -1, end: -1 }

    return pipeline.useTransform(
      makeColumnRangeHoverTransform({
        hoverColor: opts.hoverColor,
        headerHoverColor: opts.headerHoverColor,
        hoverRange: hoverRange,
        onChangeHoverRange: (nextColIndexRange) => {
          pipeline.setStateAtKey(stateKey, nextColIndexRange)
          opts.onChangeHoverRange?.(nextColIndexRange)
        },
      }),
    )
  }
}

export function autoRowSpan() {
  return <P extends TablePipeline>(pipeline: P) => pipeline.useTransform(makeAutoRowSpanTransform())
}

export function tips() {
  return <P extends TablePipeline>(pipeline: P) => {
    const Balloon = pipeline.ctx.components.Balloon
    const Tooltip = pipeline.ctx.components.Tooltip
    if (Balloon == null && Tooltip == null) {
      throw new Error('使用 tips 之前需要通过 pipeline context 设置 components.Balloon / components.Tooltip')
    }
    return pipeline.useTransform(makeTipsTransform({ Balloon, Tooltip }))
  }
}

export function buildTree(idProp: string, parentIdProp: string) {
  return <P extends TablePipeline>(pipeline: P) =>
    pipeline.mapDataSource((rows) => _buildTree(idProp, parentIdProp, rows))
}
