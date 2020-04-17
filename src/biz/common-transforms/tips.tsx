import { Information16 } from '@carbon/icons-react'
import React from 'react'
import styled from 'styled-components'
import { safeRenderHeader } from '../../common-utils/internals'
import { TableTransform } from '../interfaces'
import { transformColumn } from '../utils'

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

export default function tips({ Balloon }: { Balloon: any }): TableTransform {
  return transformColumn((col) => {
    if (!col.features?.tips) {
      return col
    }

    const justifyContent = col.align === 'right' ? 'flex-end' : col.align === 'center' ? 'center' : 'flex-start'

    return {
      ...col,
      title: (
        <HeaderCellWithTips style={{ justifyContent }}>
          {safeRenderHeader(col)}
          <Balloon
            closable={false}
            trigger={
              <div className="tip-icon-wrapper">
                <Information16 className="tip-icon" />
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
