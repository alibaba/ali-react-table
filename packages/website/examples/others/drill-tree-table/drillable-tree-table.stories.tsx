// @ts-ignore
import BrowserOnly from '@docusaurus/BrowserOnly'
import { CrossTreeTable } from 'ali-react-table/pivot'
import { getIncomeData } from 'assets/cdn-data'
import { amount, lfl, ratio } from 'assets/format'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'
import _ from 'lodash'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { CheckedDimList, PrimaryColumnTitle } from './designers'
import { Pivot, PivotView } from './models'

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

export const DrillableTreeTableExample = observer(() => {
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

  const { recordMap, leftTree, topTree } = pivotView

  return (
    <BrowserOnly fallback={<div>loading...</div>}>
      {() => (
        <>
          <CheckedDimList pivot={pivot} />
          <CrossTreeTable
            BaseTableComponent={WebsiteBaseTable}
            style={{ marginTop: 8 }}
            primaryColumn={{
              lock: true,
              name: '数据维度',
              width: 180,
              title: <PrimaryColumnTitle pivot={pivot} />,
            }}
            defaultColumnWidth={120}
            isLoading={pivot.isLoading}
            leftTree={leftTree}
            topTree={topTree}
            getValue={(leftNode, topNode) => {
              const record = recordMap.get(leftNode.key)
              const ind = topNode.data.indicator
              return record?.[ind.code]
            }}
            render={(value, leftNode, topNode) => {
              const ind = topNode.data.indicator
              return ind.render ? ind.render(value) : value
            }}
          />
        </>
      )}
    </BrowserOnly>
  )
})
