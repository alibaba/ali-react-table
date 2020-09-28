import React from 'react'
import styled from 'styled-components'
import { icons } from '../common-views'
import { TableTransform } from '../interfaces'
import { internals } from '../internals'
import { traverseColumn } from '../utils'

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

export interface TipsOptions {
  Balloon: any
}

export function makeTipsTransform({ Balloon }: TipsOptions): TableTransform {
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
        </HeaderCellWithTips>
      ),
    }
  })
}
