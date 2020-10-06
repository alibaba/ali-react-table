import {
  makeAutoRowSpanTransform,
  makeBuildTreeTransform,
  makeColumnHoverTransform,
  makeColumnRangeHoverTransform,
  makeTipsTransform,
} from '../../transforms'
import { TablePipeline } from '../pipeline'

export function columnHover() {
  const stateKey = 'columnHover'

  // todo 受控用法

  return <P extends TablePipeline>(pipeline: P) =>
    pipeline.useTransform(
      makeColumnHoverTransform({
        hoverColor: 'var(--hover-bgcolor)',
        hoverColIndex: pipeline.state[stateKey] ?? -1,
        onChangeHoverColIndex: (nextColIndex) => {
          pipeline.setStateAtKey(stateKey, nextColIndex)
        },
      }),
    )
}

export function columnRangeHover() {
  const stateKey = 'columnHover'

  // todo 受控用法

  return <P extends TablePipeline>(pipeline: P) =>
    pipeline.useTransform(
      makeColumnRangeHoverTransform({
        hoverRange: pipeline.state[stateKey] ?? { start: -1, end: -1 },
        onChangeHoverRange: (nextColIndexRange) => {
          pipeline.setStateAtKey(stateKey, nextColIndexRange)
        },
      }),
    )
}

export function autoRowSpan() {
  return <P extends TablePipeline>(pipeline: P) => pipeline.useTransform(makeAutoRowSpanTransform())
}

export function tips() {
  return <P extends TablePipeline>(pipeline: P) => {
    const Balloon = pipeline.ctx.components.Balloon
    if (Balloon == null) {
      throw new Error('使用 tips 之前需要通过 pipeline context 设置 components.Balloon')
    }
    return pipeline.useTransform(makeTipsTransform({ Balloon }))
  }
}

export function buildTree(idProp: string, parentIdProp: string) {
  return <P extends TablePipeline>(pipeline: P) => pipeline.useTransform(makeBuildTreeTransform(idProp, parentIdProp))
}
