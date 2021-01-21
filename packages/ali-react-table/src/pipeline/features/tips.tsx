import React from 'react'
import styled from 'styled-components'
import { icons } from '../../common-views'
import { internals } from '../../internals'
import { makeRecursiveMapper } from '../../utils'
import { TablePipeline } from '../pipeline'

const HeaderCellWithTips = styled.div`
  display: flex;
  align-items: center;

  .tip-icon-wrapper {
    margin-left: 2px;
  }

  .tip-icon {
    display: flex;
    fill: currentColor;
  }
`

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
            <HeaderCellWithTips style={{ justifyContent }}>
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
            </HeaderCellWithTips>
          ),
        }
      }),
    )
  }
}
