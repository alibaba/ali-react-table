import {
  buildDrillTree,
  buildRecordMatrix,
  convertDrillTreeToCrossTree,
  CrossTable,
  DrillNode,
} from 'ali-react-table/pivot'
import { getIncomeData } from 'assets/cdn-data'
import { amount, lfl, ratio } from 'assets/format'
import { MinimumPivotTableDesigner } from 'assets/MinimumPivotTableDesigner'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'
import { createAggregateFunction } from 'dvt-aggregation'
import React, { useEffect, useState } from 'react'

export default { title: '其他 / 简易透视表' }

const dimensions = [
  { code: 'planet', name: '子公司', width: 150 },
  { code: 'area', name: '门店', width: 150 },
  { code: 'season', name: '季度' },
  { code: 'month', name: '月份' },
  { code: 'one', name: '一级类目' },
  { code: 'two', name: '二级类目' },
  { code: 'three', name: '三级类目' },
]

const dimMap = new Map(dimensions.map((dim) => [dim.code, dim]))

const indicators = [
  {
    code: 'a',
    name: '指标A',
    width: 100,
    align: 'right' as const,
    expression: 'SUM(a)',
    render: amount,
  },
  {
    code: 'b',
    name: '指标B',
    width: 100,
    align: 'right' as const,
    expression: 'SUM(b)',
    render: amount,
  },
  {
    code: 'c',
    name: '指标C',
    hidden: true,
    render: amount,
    expression: 'SUM(c)',
  },
  {
    code: 'lfl',
    name: '环比指标',
    expression: '(b - c) / c',
    width: 100,
    align: 'right' as const,
    render: lfl,
  },
  {
    code: 'd',
    name: '指标D',
    expression: 'SUM(d)',
    render: amount,
    width: 120,
    align: 'right' as const,
  },
  {
    code: 'rate',
    name: '占比指标',
    expression: 'd / b',
    render: ratio,
    width: 120,
    align: 'right' as const,
  },
]

const visibleIndicators = indicators.filter((ind) => !ind.hidden)

function generateSubtotalNode(drillNode: DrillNode) {
  return {
    position: 'start' as const,
    value: drillNode.path.length === 0 ? '总计' : '小计',
  }
}

export function 简易透视表() {
  const [{ data, isLoading }, setState] = useState({ isLoading: true, data: [] as any[] })

  useEffect(() => {
    getIncomeData().then((data) => setState({ data, isLoading: false }))
  }, [])

  const [indicatorSide, onChangeIndicatorSide] = useState('top')
  const [leftCodes, onChangeLeftCodes] = useState(['planet', 'area', 'one'])
  const [topCodes, onChangeTopCodes] = useState(['season', 'month'])
  const [showSubtotal, onChangeShowSubtotal] = useState(true)
  const [supportsExpand, onChangeSupportsExpand] = useState(false)

  const [leftExpandKeys, onChangeLeftExpandKeys] = useState<string[]>([])
  const leftExpandKeySet = new Set(leftExpandKeys)
  const leftDrillTree = buildDrillTree(data, leftCodes, {
    includeTopWrapper: true,
    isExpand: !supportsExpand ? undefined : (key) => leftExpandKeySet.has(key),
  })
  const [leftTreeRoot] = convertDrillTreeToCrossTree(leftDrillTree, {
    indicators: indicatorSide === 'left' ? visibleIndicators : null,
    generateSubtotalNode: showSubtotal ? generateSubtotalNode : null,
    supportsExpand,
    expandKeys: leftExpandKeys,
    onChangeExpandKeys: onChangeLeftExpandKeys,
  })

  const [topExpandKeys, onChangeTopExpandKeys] = useState<string[]>([])
  const topExpandKeySet = new Set(topExpandKeys)
  const topDrillTree = buildDrillTree(data, topCodes, {
    includeTopWrapper: true,
    isExpand: !supportsExpand ? undefined : (key) => topExpandKeySet.has(key),
  })
  const [topTreeRoot] = convertDrillTreeToCrossTree(topDrillTree, {
    indicators: indicatorSide === 'top' ? visibleIndicators : null,
    generateSubtotalNode: showSubtotal ? generateSubtotalNode : null,
    supportsExpand,
    expandKeys: topExpandKeys,
    onChangeExpandKeys: onChangeTopExpandKeys,
  })

  const aggregate = createAggregateFunction(indicators)
  const matrix = buildRecordMatrix({
    data,
    leftCodes,
    topCodes,
    aggregate,
    prebuiltLeftTree: leftDrillTree,
    prebuiltTopTree: topDrillTree,
  })

  return (
    <div>
      <MinimumPivotTableDesigner
        showSupportsExpandToggle
        supportsExpand={supportsExpand}
        onChangeSupportsExpand={onChangeSupportsExpand}
        showSubtotal={showSubtotal}
        onChangeShowSubtotal={onChangeShowSubtotal}
        dimensions={dimensions}
        leftCodes={leftCodes}
        onChangeLeftCodes={onChangeLeftCodes}
        topCodes={topCodes}
        onChangeTopCodes={onChangeTopCodes}
        indicatorSide={indicatorSide}
        onChangeIndicatorSide={onChangeIndicatorSide}
      />
      <CrossTable
        className="bordered"
        BaseTableComponent={WebsiteBaseTable}
        isLoading={isLoading}
        defaultColumnWidth={100}
        useVirtual={true}
        leftMetaColumns={leftCodes.map((code) => dimMap.get(code))}
        leftTree={leftTreeRoot.children}
        leftTotalNode={leftTreeRoot} // 当 leftTree 为空时，leftTotalNode 用于渲染总计行
        topTree={topTreeRoot.children}
        topTotalNode={topTreeRoot} // 当 topTree 为空时，topTotalNode 用于渲染总计列
        getValue={(leftNode, topNode) => {
          // 注意这里我们使用 node.data.dataKey 来获取单元格在 matrix 中的 record
          const record = matrix.get(leftNode.data.dataKey).get(topNode.data.dataKey)
          if (record == null) {
            return '-'
          }
          const indicator = leftNode.data?.indicator ?? topNode.data?.indicator
          return record[indicator.code]
        }}
        render={(value, leftNode, topNode) => {
          const render = leftNode.data?.indicator?.render ?? topNode.data?.indicator?.render
          return render ? render(value) : value
        }}
      />
    </div>
  )
}
