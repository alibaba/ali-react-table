import { Button } from '@alifd/next'
import React from 'react'
import styled from 'styled-components'

const PivotTableDesignerDiv = styled.div`
  .designer-row {
    min-height: 36px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .label {
      width: 160px;
    }

    .prompt {
      color: #999;
    }

    .spare-dim {
      text-decoration: underline;
      margin-left: 8px;
      cursor: pointer;
      :hover {
        outline: 1px dashed #ccc;
        outline-offset: 4px;
      }
    }
  }
`

export function MinimumPivotTableDesigner({
  dimensions,
  leftCodes,
  topCodes,
  indicatorSide,
  onChangeIndicatorSide,
  onChangeLeftCodes,
  onChangeTopCodes,
  showSubtotal,
  onChangeShowSubtotal,
  showSupportsExpandToggle,
  supportsExpand,
  onChangeSupportsExpand,
}: {
  dimensions: Array<{ code: string; name: string }>
  leftCodes: string[]
  topCodes: string[]
  indicatorSide: string
  onChangeIndicatorSide(side: string): void
  onChangeLeftCodes(codes: string[]): void
  onChangeTopCodes(codes: string[]): void
  showSubtotal: boolean
  onChangeShowSubtotal(show: boolean): void
  showSupportsExpandToggle?: boolean
  supportsExpand?: boolean
  onChangeSupportsExpand?(bool: boolean): void
}) {
  const dimMap = new Map(dimensions.map((dim) => [dim.code, dim]))
  const spareDims = dimensions.filter((dim) => !leftCodes.includes(dim.code) && !topCodes.includes(dim.code))

  return (
    <PivotTableDesignerDiv>
      <div className="designer-row">
        <span className="label">表格结构：</span>
        <Button.Group>
          <Button type={indicatorSide === 'left' ? 'primary' : 'normal'} onClick={() => onChangeIndicatorSide('left')}>
            指标放在左侧
          </Button>
          <Button type={indicatorSide === 'top' ? 'primary' : 'normal'} onClick={() => onChangeIndicatorSide('top')}>
            指标放在上方
          </Button>
        </Button.Group>

        <Button.Group style={{ marginLeft: 16 }}>
          <Button onClick={() => onChangeShowSubtotal(true)} type={showSubtotal ? 'primary' : 'normal'}>
            显示总计/小计
          </Button>
          <Button onClick={() => onChangeShowSubtotal(false)} type={!showSubtotal ? 'primary' : 'normal'}>
            隐藏总计/小计
          </Button>
        </Button.Group>

        {showSupportsExpandToggle && (
          <Button.Group style={{ marginLeft: 16 }}>
            <Button onClick={() => onChangeSupportsExpand(true)} type={supportsExpand ? 'primary' : 'normal'}>
              开启展开/收拢
            </Button>
            <Button onClick={() => onChangeSupportsExpand(false)} type={!supportsExpand ? 'primary' : 'normal'}>
              关闭展开/收拢
            </Button>
          </Button.Group>
        )}
      </div>
      <div className="designer-row">
        <span className="label">清空维度：</span>
        <Button.Group>
          <Button onClick={() => onChangeLeftCodes([])} disabled={leftCodes.length === 0}>
            清空左侧维度
          </Button>
          <Button onClick={() => onChangeTopCodes([])} disabled={topCodes.length === 0}>
            清空上方维度
          </Button>
        </Button.Group>
      </div>
      <div className="designer-row">
        <span className="label">左侧的维度序列：</span>
        {leftCodes.length === 0 && <span className="prompt">暂无维度</span>}
        {leftCodes.map((code, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span style={{ margin: '0 4px' }}>&gt;</span>}
            <span>{dimMap.get(code).name}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="designer-row">
        <span className="label">左侧的可添加的维度：</span>
        {spareDims.length === 0 && <span className="prompt">暂无维度</span>}
        {spareDims.map((dim) => (
          <span key={dim.code} className="spare-dim" onClick={() => onChangeLeftCodes(leftCodes.concat([dim.code]))}>
            {dim.name}
          </span>
        ))}
      </div>
      <div className="designer-row">
        <span className="label">上方维度序列：</span>
        {topCodes.length === 0 && <span className="prompt">暂无维度</span>}
        {topCodes.map((code, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span style={{ margin: '0 4px' }}>&gt;</span>}
            <span>{dimMap.get(code).name}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="designer-row">
        <span className="label">上方的可添加的维度：</span>
        {spareDims.length === 0 && <span className="prompt">暂无维度</span>}
        {spareDims.map((dim) => (
          <span key={dim.code} className="spare-dim" onClick={() => onChangeTopCodes(topCodes.concat([dim.code]))}>
            {dim.name}
          </span>
        ))}
      </div>
    </PivotTableDesignerDiv>
  )
}
