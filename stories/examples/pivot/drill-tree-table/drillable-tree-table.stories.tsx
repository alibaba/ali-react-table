import { CrossTreeTable } from 'ali-react-table/pivot'
import _ from 'lodash'
import * as mobx from 'mobx'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { getIncomeData } from '../../../assets/cdn-data'
import { amount, lfl, ratio } from '../../../assets/format'
import { FusionStyles } from '../../../assets/fusion-style'
import { CheckedDimList, PrimaryColumnTitle } from './designers'
import { Pivot, PivotView } from './models'

mobx.configure({ enforceActions: 'observed' })

export default { title: '示例 / 交叉与透视 / 支持下钻的树状表格' }

const ALL_DIMS = [
  { code: 'planet', name: '子公司' },
  { code: 'season', name: '季度' },
  { code: 'month', name: '月份' },
  { code: 'area', name: '门店' },
  { code: 'one', name: '一级类目' },
  { code: 'two', name: '二级类目' },
  { code: 'three', name: '三级类目' },
]

const INDICATORS = [
  {
    code: 'a',
    name: '目标收入',
    align: 'right' as const,
    render: amount,
    features: { sortable: true },
    expression: 'SUM(a)',
  },
  {
    code: 'b',
    name: '实际收入',
    render: amount,
    align: 'right' as const,
    features: { sortable: true },
    expression: 'SUM(b)',
  },
  {
    code: 'c',
    name: '上月收入',
    render: amount,
    hidden: true,
    align: 'right' as const,
    features: { sortable: true },
    expression: 'SUM(c)',
  },
  {
    code: 'lfl',
    name: '收入月环比',
    render: lfl,
    align: 'right' as const,
    features: { sortable: true },
    expression: '(a - c) / a',
  },
  {
    code: 'd',
    name: '重点商品收入',
    render: amount,
    align: 'right' as const,
    features: { sortable: true },
    expression: 'SUM(d)',
  },
  {
    code: 'rate',
    name: '重点商品收入占比',
    render: ratio,
    align: 'right' as const,
    features: { sortable: true },
    expression: 'd / b',
  },
]

const Inner = observer(() => {
  const [pivot] = useState(() => {
    return new Pivot({
      allDimensions: ALL_DIMS,
      allIndicators: INDICATORS,
      dimCodes: ['planet', 'area', 'season'],
    })
  })

  const [pivotView] = useState(() => new PivotView(pivot))

  useEffect(() => {
    getIncomeData().then(
      action((data: any[]) => {
        pivot.data = data
        pivot.isLoading = false
        pivot.filters = Object.fromEntries(
          pivot.allDimensions.map((dim) => {
            return [dim.code, _.uniq(data.map((d) => d[dim.code]))]
          }),
        )
      }),
    )
  }, [])

  return (
    <div>
      <FusionStyles />
      <CheckedDimList pivot={pivot} />
      <CrossTreeTable
        style={{ marginTop: 8 }}
        primaryColumn={{
          lock: true,
          name: '数据维度',
          width: 180,
          title: <PrimaryColumnTitle pivot={pivot} />,
        }}
        defaultColumnWidth={120}
        isLoading={pivot.isLoading}
        leftTree={pivotView.leftTree}
        topTree={pivotView.topTree}
        getValue={(leftNode, topNode) => {
          const record = pivotView.recordMap.get(leftNode.key)
          const ind = topNode.data.indicator
          return record?.[ind.code]
        }}
        render={(value, leftNode, topNode) => {
          const ind = topNode.data.indicator
          return ind.render ? ind.render(value) : value
        }}
      />
    </div>
  )
})

export function 基本示例() {
  return <Inner />
}
