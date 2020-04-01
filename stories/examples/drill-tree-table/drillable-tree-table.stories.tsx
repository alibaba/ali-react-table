import { BaseTable } from 'ali-react-table'
import { applyTransforms, SortItem } from 'ali-react-table/biz'
import { simpleEncode } from 'ali-react-table/pivot'
import produce from 'immer'
import _ from 'lodash'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { getIncomeData } from '../../assets/cdn-data'
import { amount, lfl, ratio } from '../../assets/format'
import { FusionStyles } from '../../assets/fusion-style'
import { Action, CheckedDimList, DataDimColumnTitle, immerReducer, PivotMeta, PivotState } from './designers'
import { drillTreeTransform } from './drillTreeTransform'

export default { title: '示例 / 支持下钻的树状表格' }

const dimensions = [
  { code: 'planet', name: '子公司' },
  { code: 'season', name: '季度' },
  { code: 'month', name: '月份' },
  { code: 'area', name: '门店' },
  { code: 'one', name: '一级类目' },
  { code: 'two', name: '二级类目' },
  { code: 'three', name: '三级类目' },
]

const indicators = [
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

export function 示例() {
  const [{ data, isLoading }, setData] = useState({ isLoading: true, data: [] as any[] })

  const dimValues = useMemo(() => {
    return Object.fromEntries(
      dimensions.map((dim) => {
        return [dim.code, _.uniq(data.map((d) => d[dim.code]))]
      }),
    )
  }, [data, dimensions])

  const meta: PivotMeta = { dimensions, indicators, dimValues }

  useEffect(() => {
    getIncomeData().then((data: any[]) => {
      setData({ data, isLoading: false })

      setState({
        ...state,
        filters: Object.fromEntries(
          dimensions.map((dim) => {
            return [dim.code, _.uniq(data.map((d) => d[dim.code]))]
          }),
        ),
      })
    })
  }, [])

  const [state, setState] = useState<PivotState>({
    dimCodes: ['planet', 'area', 'season'],
    openKeys: [simpleEncode([])],
    filters: Object.fromEntries(dimensions.map((dim) => [dim.code, meta.dimValues[dim.code]])),
    indCodes: indicators.map((ind) => ind.code),
    sorts: [],
  })

  const dispatch = useCallback((action: Action) => {
    setState((prev) =>
      produce(prev, (draft) => {
        immerReducer(draft, action, prev)
      }),
    )
  }, [])

  const filteredData = (() => {
    const checkedValuesMap = new Map(dimensions.map((dim) => [dim.code, new Set(state.filters[dim.code])]))
    return data.filter((d) => dimensions.every((dim) => checkedValuesMap.get(dim.code).has(d[dim.code])))
  })()

  const renderData = applyTransforms(
    {
      dataSource: filteredData,
      columns: [
        {
          name: '数据维度',
          code: 'name',
          width: 180,
          lock: true,
          title: <DataDimColumnTitle state={state} meta={meta} dispatch={dispatch} />,
        },
        ...meta.indicators,
      ],
    },
    drillTreeTransform({
      nameProp: 'name',
      treeMode: {
        primaryKey: 'key',
        openKeys: state.openKeys,
        onChangeOpenKeys(nextKeys: string[]) {
          setState((prev) => ({ ...prev, openKeys: nextKeys }))
        },
      },
      sort: {
        mode: 'single',
        sorts: state.sorts,
        onChangeSorts(nextSorts: SortItem[]) {
          setState((prev) => ({ ...prev, sorts: nextSorts }))
        },
      },
      dimensions: state.dimCodes.map((dimCode) => meta.dimensions.find((dim) => dimCode === dim.code)),
      indicators: state.indCodes.map((indCode) => meta.indicators.find((ind) => indCode === ind.code)),
    }),
  )

  return (
    <div>
      <FusionStyles />
      <CheckedDimList meta={meta} state={state} dispatch={dispatch} />
      <BaseTable
        style={{ marginTop: 8 }}
        defaultColumnWidth={120}
        isLoading={isLoading}
        dataSource={renderData.dataSource}
        columns={renderData.columns}
      />
    </div>
  )
}
