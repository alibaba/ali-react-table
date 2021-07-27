import React from 'react'
import { icons } from '../../common-views'
import { internals } from '../../internals'
import { makeRecursiveMapper } from '../../utils'
import { TablePipeline } from '../pipeline'

export function tips() {
  return function tipsSteap(pipeline: TablePipeline) {
    const Balloon = pipeline.ctx.components.Balloon
    const Tooltip = pipeline.ctx.components.Tooltip

    if (Balloon == null && Tooltip == null) {
      throw new Error('使用 tips 之前需要通过 pipeline context 设置 components.Balloon / components.Tooltip')
    }

    return pipeline.mapColumns(
      makeRecursiveMapper((col) => {
        if (!col.features?.tips) {
          return col
        }

        const justifyContent = col.align === 'right' ? 'flex-end' : col.align === 'center' ? 'center' : 'flex-start'

        return {
          ...col,
          title: (
            <div style={{ justifyContent }} className="artx-tips__header-cell">
              {internals.safeRenderHeader(col)}
              {Balloon ? (
                // fusion/hippo
                <Balloon
                  closable={false}
                  trigger={
                    <div className="tip-icon-wrapper">
                      <icons.Info className="tip-icon" />
                    </div>
                  }
                >
                  {col.features.tips}
                </Balloon>
              ) : (
                // antd
                <Tooltip title={col.features.tips}>
                  <div className="tip-icon-wrapper">
                    <icons.Info className="tip-icon" />
                  </div>
                </Tooltip>
              )}
            </div>
          ),
        }
      }),
    )
  }
}
