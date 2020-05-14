import {
  buildDrillTree,
  buildRecordMap,
  createAggregateFunction,
  CrossTreeTable,
  DrillNode,
  simpleEncode,
} from 'ali-react-table/pivot'
import produce from 'immer'
import _ from 'lodash'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import isLeafNode from '../../../src/common-utils/isLeafNode'
import { getIncomeData } from '../../assets/cdn-data'
import { amount, lfl, ratio } from '../../assets/format'
import { FusionStyles } from '../../assets/fusion-style'
import { Action, CheckedDimList, DataDimColumnTitle, immerReducer, PivotMeta, PivotState } from './designers'

export default { title: '示例 / 支持下钻的树状表格' }

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

function usePivotState() {
  const [state, setState] = useState<PivotState>({
    isLoading: true,
    data: [],
    dimCodes: ['planet', 'area', 'season'],
    openKeys: [simpleEncode([])],
    filters: Object.fromEntries(ALL_DIMS.map((dim) => [dim.code, []])),
    indCodes: INDICATORS.map((ind) => ind.code),
    sorts: [],
  })

  const onChangeOpenKeys = (nextKeys: string[]) => setState((prev) => ({ ...prev, openKeys: nextKeys }))

  useEffect(() => {
    getIncomeData().then((data: any[]) => {
      setState({
        ...state,
        data,
        isLoading: false,
        filters: Object.fromEntries(
          ALL_DIMS.map((dim) => {
            return [dim.code, _.uniq(data.map((d) => d[dim.code]))]
          }),
        ),
      })
    })
  }, [])

  const meta: PivotMeta = useMemo(() => {
    const dimValues = Object.fromEntries(
      ALL_DIMS.map((dim) => {
        return [dim.code, _.uniq(state.data.map((d) => d[dim.code]))]
      }),
    )
    return { dimensions: ALL_DIMS, indicators: INDICATORS, dimValues }
  }, [state.data])

  const dispatch = useCallback((action: Action) => {
    setState((prev) =>
      produce(prev, (draft) => {
        immerReducer(draft, action, prev)
      }),
    )
  }, [])

  const filteredData = useMemo(() => {
    const checkedValuesMap = new Map(ALL_DIMS.map((dim) => [dim.code, new Set(state.filters[dim.code])]))
    return state.data.filter((d) => ALL_DIMS.every((dim) => checkedValuesMap.get(dim.code).has(d[dim.code])))
  }, [state.data, state.filters])

  return { dispatch, filteredData, meta, state, onChangeOpenKeys }
}

export function 基本示例() {
  const { filteredData, state, dispatch, meta } = usePivotState()
  const leftTree = buildDrillTree(filteredData, state.dimCodes, {
    includeTopWrapper: true,
    enforceExpandTotalNode: false,
  })
  const topTree = meta.indicators.map((indicator) => ({
    key: indicator.code,
    value: indicator.name,
    align: indicator.align,
    data: { indicator },
  }))

  const aggregate = createAggregateFunction(INDICATORS)
  const recordMap = buildRecordMap({
    data: filteredData,
    codes: state.dimCodes,
    aggregate,
  })

  return (
    <div>
      <FusionStyles />
      <CheckedDimList meta={meta} state={state} dispatch={dispatch} />
      <CrossTreeTable
        style={{ marginTop: 8 }}
        primaryColumn={{
          lock: true,
          name: '数据维度',
          width: 180,
          title: <DataDimColumnTitle meta={meta} state={state} dispatch={dispatch} />,
        }}
        defaultColumnWidth={120}
        isLoading={state.isLoading}
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
    </div>
  )
}

export function 受控展开收拢() {
  const { filteredData, state, dispatch, meta, onChangeOpenKeys } = usePivotState()

  const openKeySet = new Set(state.openKeys)
  function isExpand(key: string) {
    return openKeySet.has(key)
  }
  const leftTree = buildDrillTree(filteredData, state.dimCodes, {
    includeTopWrapper: true,
    isExpand,
    enforceExpandTotalNode: false,
  })
  const topTree = meta.indicators.map((indicator) => ({
    key: indicator.code,
    value: indicator.name,
    align: indicator.align,
    data: { indicator },
  }))

  const aggregate = createAggregateFunction(INDICATORS)
  const recordMap = buildRecordMap({
    data: filteredData,
    codes: state.dimCodes,
    aggregate,
    isExpand,
  })

  return (
    <div>
      <FusionStyles />
      <CheckedDimList meta={meta} state={state} dispatch={dispatch} />
      <CrossTreeTable
        style={{ marginTop: 8 }}
        primaryColumn={{
          lock: true,
          name: '数据维度',
          width: 180,
          title: <DataDimColumnTitle state={state} meta={meta} dispatch={dispatch} />,
        }}
        defaultColumnWidth={120}
        isLoading={state.isLoading}
        leftTree={leftTree}
        topTree={topTree}
        getValue={(leftNode, topNode) => {
          const ind = topNode.data.indicator
          const record = recordMap.get(leftNode.key)
          return record?.[ind.code]
        }}
        render={(value, leftNode, topNode) => {
          const ind = topNode.data.indicator
          return ind.render ? ind.render(value) : value
        }}
        openKeys={state.openKeys}
        onChangeOpenKeys={onChangeOpenKeys}
        indentSize={20}
        isLeafNode={(node: DrillNode) => {
          return !node.hasChild && isLeafNode(node)
        }}
      />
    </div>
  )
}
