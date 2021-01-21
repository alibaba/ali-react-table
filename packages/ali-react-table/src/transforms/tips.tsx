import React from 'react'
import styled from 'styled-components'
import { icons } from '../common-views'
import { TableTransform } from '../interfaces'
import { internals } from '../internals'
import { traverseColumn } from '../utils'
import { warnTransformsDeprecated } from './warnTransformsDeprecated'

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

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export interface TipsOptions {
  Balloon?: any
  Tooltip?: any
}

/** @deprecated transform 用法已经过时，请使用 pipeline 来对表格进行拓展 */
export function makeTipsTransform({ Balloon, Tooltip }: TipsOptions): TableTransform {
  warnTransformsDeprecated('makeTipsTransform')

  return traverseColumn((col) => {
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
  })
}
