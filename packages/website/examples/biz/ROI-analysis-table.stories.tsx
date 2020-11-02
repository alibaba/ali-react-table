import * as hippo from '@alifd/next'
import { applyTransforms, ArtColumn, proto, traverseColumn } from 'ali-react-table'
import { amount, lfl, ratio } from 'assets/format'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'
import React, { useMemo } from 'react'
import styled from 'styled-components'

const HintDiv = styled.div`
  margin-bottom: 16px;
  font-size: 16px;
  color: var(--ifm-color-danger-dark);
`

function generateRandomData() {
  const mockData: any[] = []

  const randomPbpRate = () => {
    const array = [0.3, 0.4, 0.5, 0.6]
    return array[Math.floor(Math.random() * array.length)]
  }

  const randomAppTrdAmt = () => {
    const array = [300, 400, 500, 600]
    return array[Math.floor(Math.random() * array.length)]
  }

  const randomPosTrdAmt = () => {
    const array = [400, 500, 600, 800]
    return array[Math.floor(Math.random() * array.length)]
  }

  const randomMarketCost = () => {
    const array = [100, 200, 300, 500]
    return array[Math.floor(Math.random() * array.length)]
  }

  const randomNetProfit = () => {
    const array = [100, 200, 300]
    return array[Math.floor(Math.random() * array.length)]
  }

  for (let i = 1; i <= 11; i++) {
    const item: any = {
      stat_date: `3月${i}号`,
      pbp_rate_stage1: 0.4,
      pbp_rate_stage2: 0.5,
      pbp_rate_stage3: 0.6,
    }

    for (let d = 1; d <= 10; d++) {
      if (d + i <= 11) {
        item[`pbp_rate_day${d}`] = randomPbpRate()
        item[`app_trd_amt_day${d}`] = randomAppTrdAmt()
        item[`pos_trd_amt_day${d}`] = randomPosTrdAmt()
        item[`market_cost_day${d}`] = randomMarketCost()
        item[`net_profit_day${d}`] = randomNetProfit()
      }
    }

    mockData.push(item)
  }

  return mockData
}

const pbp = proto.array<ArtColumn>({
  align: 'right',
  render: ratio,
  width: 100,
  features: proto.object({
    pbp: true,
    dateOrder: proto.number,
  }),
})

const PbpRatioCell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  padding-right: 12px;
  user-select: none;

  &:hover {
    background: var(--ifm-color-emphasis-300);
  }
`

function redIfSmallerThanZero(v: number) {
  if (v < 0) {
    return { style: { background: '#f9cace' } }
  }
}

/** 使用 row.render 来渲染单元格 */
function rowRender(value: any, row: any, rowIndex: number) {
  return row.render(value, row, rowIndex)
}

function pbpRatioRender(v: number, col: ArtColumn, row: any) {
  if (isNaN(v) || v == null) {
    return null
  }

  const dateOrder = col.features.dateOrder

  const getTableRow = (codePrefix: string, name: string, render: any) => {
    const current = row[`${codePrefix}day${dateOrder}`]
    const left1 = row[`${codePrefix}day${dateOrder - 1}`]
    const left2 = row[`${codePrefix}day${dateOrder - 2}`]
    const lfl = (current - left1) / left1
    return { name, current, left1, left2, lfl, render }
  }

  const pbp_rate = getTableRow('pbp_rate_', '回本率', ratio)
  const app_trd_amt = getTableRow('app_trd_amt_', '线上GMV', amount)
  const pos_trd_amt = getTableRow('pos_trd_amt_', '线下GMV', amount)
  const market_cost = getTableRow('market_cost_', '营销费用', amount)
  const net_profit = getTableRow('net_profit_', '净利额', amount)

  const currentCol = {
    name: `第${dateOrder}天`,
    code: 'current',
    align: 'right' as const,
    getCellProps: redIfSmallerThanZero,
    render: rowRender,
  }
  const left1Col = {
    name: `第${dateOrder - 1}天`,
    code: 'left1',
    align: 'right' as const,
    getCellProps: redIfSmallerThanZero,
    render: rowRender,
  }
  const left2Col = {
    name: `第${dateOrder - 2}天`,
    code: 'left2',
    align: 'right' as const,
    getCellProps: redIfSmallerThanZero,
    render: rowRender,
  }
  const lflCol = {
    name: `对比第${dateOrder - 1}天`,
    code: 'lfl',
    align: 'right' as const,
    render: lfl,
  }

  const dataSource = [pbp_rate, app_trd_amt, pos_trd_amt, market_cost, net_profit]

  return (
    <hippo.Balloon
      trigger={<PbpRatioCell>{ratio(v)}</PbpRatioCell>}
      closable={false}
      triggerType="click"
      style={{
        maxWidth: 'none',
        width: 500,
        background: 'var(--ifm-color-emphasis-0)',
        border: '1px solid var(--ifm-color-emphasis-200)',
      }}
    >
      <WebsiteBaseTable
        columns={[
          { name: '明细', code: 'name' },
          {
            name: `${row.stat_date} 第${dateOrder}天`,
            align: 'center' as const,
            children: [currentCol, dateOrder >= 2 && lflCol].filter(Boolean),
          },
          dateOrder >= 2 && left1Col,
          dateOrder >= 3 && left2Col,
        ].filter(Boolean)}
        dataSource={dataSource}
      />
    </hippo.Balloon>
  )
}

export default { title: '业务示例 / 投入产出分析表格' }

export function 投入产出分析表格() {
  const dataSource = useMemo(() => generateRandomData(), [])

  const columnProto = proto.array<ArtColumn>({ width: 100, align: 'right' })

  const columns = columnProto([
    { lock: true, code: 'stat_date', name: '日期' },
    {
      name: '阶段情况',
      align: 'left',
      children: columnProto([
        { code: 'pbp_rate_stage1', name: '阶段1回本率', render: ratio },
        { code: 'pbp_rate_stage2', name: '阶段2回本率', render: ratio },
        { code: 'pbp_rate_stage3', name: '阶段3回本率', render: ratio },
      ]),
    },
    {
      name: '分日情况',
      align: 'left',
      children: pbp([
        { code: 'pbp_rate_day1', name: '第1天回本率', features: { dateOrder: 1 } },
        { code: 'pbp_rate_day2', name: '第2天回本率', features: { dateOrder: 2 } },
        { code: 'pbp_rate_day3', name: '第3天回本率', features: { dateOrder: 3 } },
        { code: 'pbp_rate_day4', name: '第4天回本率', features: { dateOrder: 4 } },
        { code: 'pbp_rate_day5', name: '第5天回本率', features: { dateOrder: 5 } },
        { code: 'pbp_rate_day6', name: '第6天回本率', features: { dateOrder: 6 } },
        { code: 'pbp_rate_day7', name: '第7天回本率', features: { dateOrder: 7 } },
        { code: 'pbp_rate_day8', name: '第8天回本率', features: { dateOrder: 8 } },
        { code: 'pbp_rate_day9', name: '第9天回本率', features: { dateOrder: 9 } },
        { code: 'pbp_rate_day10', name: '第10天回本率', features: { dateOrder: 10 } },
      ]),
    },
  ])

  const renderData = applyTransforms(
    { dataSource: dataSource, columns },
    traverseColumn((col) => {
      if (!col.features?.pbp) {
        return col
      }
      return {
        ...col,
        getCellProps() {
          return { style: { padding: 0 } }
        },
        render(v: number, row: any) {
          return pbpRatioRender(v, col, row)
        },
      }
    }),
  )

  return (
    <div>
      <HintDiv>交互提示：点击分日情况单元格 查看详细数据</HintDiv>
      <WebsiteBaseTable columns={renderData.columns} dataSource={renderData.dataSource} />
    </div>
  )
}
