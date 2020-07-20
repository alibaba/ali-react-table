import { CrossTable, LeftCrossTreeNode, TopCrossTreeNode } from 'ali-react-table/pivot'
import React from 'react'

export default { title: '交叉与透视 / 交叉表 / 示例' }

export function 基本用法() {
  const leftTree: LeftCrossTreeNode[] = [
    {
      key: 'forenoon',
      value: '上午',
      children: [
        { key: '9', value: '9:00-10:00' },
        { key: '10', value: '10:00-11:00' },
        { key: '11', value: '11:00-12:00' },
      ],
    },
    { key: 'lunch', value: '午餐' },
    {
      key: 'afternoon',
      value: '下午',
      children: [
        { key: '14', value: '14:00-15:00' },
        { key: '15', value: '15:00-16:00' },
        { key: '16', value: '16:00-17:00' },
      ],
    },
    { key: 'dinner', value: '晚餐' },
    {
      key: 'evening',
      value: '晚上',
      children: [
        { key: '20', value: '20:00-21:00' },
        { key: '21', value: '21:00-22:00' },
      ],
    },
  ]

  const makeTopChildren = (keyPrefix: string): TopCrossTreeNode[] => [
    { key: `${keyPrefix}-week-0`, value: '第一周', width: 80 },
    { key: `${keyPrefix}-week-1`, value: '第二周', width: 80 },
    { key: `${keyPrefix}-week-2`, value: '第三周', width: 80 },
    { key: `${keyPrefix}-week-3`, value: '第四周', width: 80 },
  ]
  const topTree: TopCrossTreeNode[] = [
    { key: '2020-01', value: '2020-01', children: makeTopChildren('2020-01') },
    { key: '2020-02', value: '2020-02', children: makeTopChildren('2020-02') },
    { key: '2020-03', value: '2020-03', children: makeTopChildren('2020-03') },
    { key: '2020-04', value: '2020-04', children: makeTopChildren('2020-04') },
    { key: '2020-05', value: '2020-05', children: makeTopChildren('2020-05') },
    { key: '2020-06', value: '2020-06', children: makeTopChildren('2020-06') },
  ]

  const getValue = (leftNode: LeftCrossTreeNode, topNode: TopCrossTreeNode) => {
    if (leftNode.key === 'lunch') {
      if (topNode.key.endsWith('week-0')) {
        return '肯德基'
      } else if (topNode.key.endsWith('week-1')) {
        return '麦当劳'
      } else if (topNode.key.endsWith('week-2')) {
        return '汉堡王'
      } else {
        return '烧烤'
      }
    } else if (leftNode.key === 'dinner') {
      if (topNode.key.endsWith('week-0')) {
        return '盒马'
      } else if (topNode.key.endsWith('week-1')) {
        return '海底捞'
      } else if (topNode.key.endsWith('week-2')) {
        return '麦当劳'
      } else {
        return '体重+1'
      }
    }
  }

  return (
    <div>
      <p style={{ fontSize: 16, marginTop: 0 }}>2020年 养猪计划</p>
      <CrossTable
        defaultColumnWidth={100}
        leftTree={leftTree}
        topTree={topTree}
        // 自定义的取数逻辑
        getValue={getValue}
        // 可选的 自定义的渲染逻辑
        render={(value, leftNode, topNode) => {
          return value
        }}
      />
    </div>
  )
}
