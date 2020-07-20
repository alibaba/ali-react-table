import { BaseTable } from 'ali-react-table'
import {
  buildDrillTree,
  buildRecordMatrix,
  convertDrillTreeToCrossTree,
  createAggregateFunction,
  CrossTable,
  CrossTableLeftMetaColumn,
  DrillNode,
} from 'ali-react-table/pivot'
import React, { useState } from 'react'
import ReactJson from 'react-json-view'
import { PivotTableBasedOnCrossTable as _PivotTableBasedOnCrossTable } from '../examples/pivot/pivot-table-on-cross-table.stories'
import MinimumPivotTableDesigner from './MinimumPivotTableDesigner'

export default { title: '交叉与透视 / pivot-utils / 示例' }

export function 下钻树示例() {
  const dwdData = [
    { subs: '上海子公司', shop: '上海大宁店', month: '2022-01', valueA: 782, valueB: 566 },
    { subs: '上海子公司', shop: '上海大宁店', month: '2022-02', valueA: 856, valueB: 403 },
    { subs: '上海子公司', shop: '上海大宁店', month: '2022-03', valueA: 886, valueB: 555 },
    { subs: '上海子公司', shop: '上海大宁店', month: '2022-04', valueA: 555, valueB: 444 },
    { subs: '上海子公司', shop: '上海大宁店', month: '2022-05', valueA: 444, valueB: 333 },
    { subs: '上海子公司', shop: '上海曹家渡店', month: '2022-01', valueA: 922, valueB: 778 },
    { subs: '上海子公司', shop: '上海曹家渡店', month: '2022-02', valueA: 888, valueB: 887 },
    { subs: '上海子公司', shop: '上海曹家渡店', month: '2022-03', valueA: 879, valueB: 870 },
    { subs: '上海子公司', shop: '上海曹家渡店', month: '2022-04', valueA: 800, valueB: 723 },
    { subs: '上海子公司', shop: '上海曹家渡店', month: '2022-05', valueA: 813, valueB: 789 },
    { subs: '浙江子公司', shop: '亲橙里', month: '2022-01', valueA: 500, valueB: 463 },
    { subs: '浙江子公司', shop: '亲橙里', month: '2022-02', valueA: 833, valueB: 456 },
    { subs: '浙江子公司', shop: '亲橙里', month: '2022-03', valueA: 821, valueB: 442 },
    { subs: '浙江子公司', shop: '亲橙里', month: '2022-04', valueA: 834, valueB: 456 },
    { subs: '浙江子公司', shop: '亲橙里', month: '2022-05', valueA: 803, valueB: 700 },
  ]

  const drillTree = buildDrillTree(dwdData, ['subs', 'shop', 'month'])

  return (
    <div>
      <div style={{ fontSize: 16, lineHeight: 2 }}>输入数据（输入格式为一个对象的数组）</div>

      <BaseTable
        style={{ overflow: 'auto', height: 250 }}
        useOuterBorder
        columns={[
          { name: '子公司(subs)', code: 'subs' },
          { name: '门店(shop)', code: 'shop' },
          { name: '月份(month)', code: 'month' },
          { name: '指标A(valueA)', code: 'valueA' },
          { name: '指标B(valueB)', code: 'valueB' },
        ]}
        dataSource={dwdData}
        defaultColumnWidth={100}
      />

      <div style={{ marginTop: 16, fontSize: 16, lineHeight: 2 }}>
        <div>处理过程</div>
        <code>buildDrillTree(data, ['subs', 'shop', 'month'])</code>
      </div>

      <div style={{ marginTop: 16, fontSize: 16, lineHeight: 2 }}>输出一个 DrillNode 的数组</div>
      <ReactJson
        name={null}
        src={drillTree}
        collapsed={2}
        enableClipboard={false}
        displayObjectSize={false}
        displayDataTypes={false}
      />
    </div>
  )
}

export function 简单交叉表() {
  const data = [
    { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-01', valueA: 782, valueB: 566 },
    { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-02', valueA: 856, valueB: 403 },
    { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-03', valueA: 886, valueB: 555 },
    { subs: '上海子公司', shop: '上海大宁店', season: '二季度', month: '2022-04', valueA: 555, valueB: 444 },
    { subs: '上海子公司', shop: '上海大宁店', season: '二季度', month: '2022-05', valueA: 444, valueB: 333 },
    { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-01', valueA: 922, valueB: 778 },
    { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-02', valueA: 888, valueB: 887 },
    { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-03', valueA: 879, valueB: 870 },
    { subs: '上海子公司', shop: '上海曹家渡店', season: '二季度', month: '2022-04', valueA: 800, valueB: 723 },
    { subs: '上海子公司', shop: '上海曹家渡店', season: '二季度', month: '2022-05', valueA: 813, valueB: 789 },
    { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-01', valueA: 500, valueB: 463 },
    { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-02', valueA: 833, valueB: 456 },
    { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-03', valueA: 821, valueB: 442 },
    { subs: '浙江子公司', shop: '亲橙里', season: '二季度', month: '2022-04', valueA: 834, valueB: 456 },
    { subs: '浙江子公司', shop: '亲橙里', season: '二季度', month: '2022-05', valueA: 803, valueB: 700 },
  ]

  const leftDims: CrossTableLeftMetaColumn[] = [
    { code: 'subs', name: '子公司' },
    { code: 'shop', name: '门店' },
  ]

  const topDims = [
    { code: 'season', name: '季度' },
    { code: 'month', name: '月份' },
  ]

  const leftCodes = leftDims.map((dim) => dim.code)
  const topCodes = topDims.map((dim) => dim.code)

  const leftTree = buildDrillTree(data, leftCodes)
  const topTree = buildDrillTree(data, topCodes)

  const matrix = buildRecordMatrix({ data, leftCodes, topCodes })

  return (
    <CrossTable
      defaultColumnWidth={100}
      leftTree={leftTree}
      topTree={topTree}
      leftMetaColumns={leftDims}
      getValue={(leftNode, topNode) => {
        const record = matrix.get(leftNode.key).get(topNode.key)
        return record.valueA
      }}
    />
  )
}

export function 简单透视表() {
  const data = [
    { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-01', valueA: 782, valueB: 566 },
    { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-02', valueA: 856, valueB: 403 },
    { subs: '上海子公司', shop: '上海大宁店', season: '一季度', month: '2022-03', valueA: 886, valueB: 555 },
    { subs: '上海子公司', shop: '上海大宁店', season: '二季度', month: '2022-04', valueA: 555, valueB: 444 },
    { subs: '上海子公司', shop: '上海大宁店', season: '二季度', month: '2022-05', valueA: 444, valueB: 333 },
    { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-01', valueA: 922, valueB: 778 },
    { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-02', valueA: 888, valueB: 887 },
    { subs: '上海子公司', shop: '上海曹家渡店', season: '一季度', month: '2022-03', valueA: 879, valueB: 870 },
    { subs: '上海子公司', shop: '上海曹家渡店', season: '二季度', month: '2022-04', valueA: 800, valueB: 723 },
    { subs: '上海子公司', shop: '上海曹家渡店', season: '二季度', month: '2022-05', valueA: 813, valueB: 789 },
    { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-01', valueA: 500, valueB: 463 },
    { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-02', valueA: 833, valueB: 456 },
    { subs: '浙江子公司', shop: '亲橙里', season: '一季度', month: '2022-03', valueA: 821, valueB: 442 },
    { subs: '浙江子公司', shop: '亲橙里', season: '二季度', month: '2022-04', valueA: 834, valueB: 456 },
    { subs: '浙江子公司', shop: '亲橙里', season: '二季度', month: '2022-05', valueA: 803, valueB: 700 },
  ]

  const dimensions = [
    { code: 'subs', name: '子公司' },
    { code: 'shop', name: '门店' },
    { code: 'season', name: '季度' },
    { code: 'month', name: '月份' },
  ]

  const indicators = [
    { code: 'valueA', name: '指标A', width: 100, align: 'right' as const, expression: 'SUM(valueA)' },
    { code: 'valueB', name: '指标B', width: 100, align: 'right' as const, expression: 'SUM(valueB)' },
  ]

  const [indicatorSide, onChangeIndicatorSide] = useState('top')
  const [topCodes, onChangeTopCodes] = useState(['season'])
  const [leftCodes, onChangeLeftCodes] = useState(['subs', 'shop'])
  const [showSubtotal, onChangeShowSubtotal] = useState(true)

  function generateSubtotalNode(drillNode: DrillNode) {
    return {
      position: 'start' as const,
      value: drillNode.path.length === 0 ? '总计' : '小计',
    }
  }

  const leftDrillTree = buildDrillTree(data, leftCodes, { includeTopWrapper: true })
  const [leftTreeRoot] = convertDrillTreeToCrossTree(leftDrillTree, {
    indicators: indicatorSide === 'left' ? indicators : null,
    generateSubtotalNode: showSubtotal ? generateSubtotalNode : null,
  })

  const topDrillTree = buildDrillTree(data, topCodes, { includeTopWrapper: true })
  const [topTreeRoot] = convertDrillTreeToCrossTree(topDrillTree, {
    indicators: indicatorSide === 'top' ? indicators : null,
    generateSubtotalNode: showSubtotal ? generateSubtotalNode : null,
  })

  const aggregate = createAggregateFunction(indicators)
  const matrix = buildRecordMatrix({ data, leftCodes, topCodes, aggregate })

  return (
    <div>
      {/* MinimumPivotTableDesigner 是一个简单的透视表设计器，提供了对维度配置和表格结构的编辑功能 */}
      <MinimumPivotTableDesigner
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
        defaultColumnWidth={100}
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
      />
    </div>
  )
}

export const 基于交叉表的透视表 = _PivotTableBasedOnCrossTable
