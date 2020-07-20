import { CrossTreeTable, LeftCrossTreeNode, TopCrossTreeNode } from 'ali-react-table/pivot'
import React from 'react'

export default { title: '交叉与透视 / 交叉树状表格 / 示例' }

export function 基本示例() {
  const leftTree: LeftCrossTreeNode[] = [
    {
      key: 'forenoon',
      value: '上午',
      data: { parent: true },
      children: [
        { key: '9', value: '9:00-10:00', data: { x: 0 } },
        { key: '10', value: '10:00-11:00', data: { x: 1 } },
        { key: '11', value: '11:00-12:00', data: { x: 2 } },
      ],
    },
    {
      key: 'afternoon',
      value: '下午',
      data: { parent: true },
      children: [
        { key: '14', value: '14:00-15:00', data: { x: 3 } },
        { key: '15', value: '15:00-16:00', data: { x: 4 } },
        { key: '16', value: '16:00-17:00', data: { x: 5 } },
      ],
    },
    {
      key: 'evening',
      value: '晚上',
      data: { parent: true },
      children: [
        { key: '20', value: '20:00-21:00', data: { x: 7 } },
        { key: '21', value: '21:00-22:00', data: { x: 8 } },
      ],
    },
  ]

  const makeTopChildren = (keyPrefix: string): TopCrossTreeNode[] => [
    { key: `${keyPrefix}-week-0`, value: '第一周', data: { y: 0 } },
    { key: `${keyPrefix}-week-1`, value: '第二周', data: { y: 1 } },
    { key: `${keyPrefix}-week-2`, value: '第三周', data: { y: 2 } },
    { key: `${keyPrefix}-week-3`, value: '第四周', data: { y: 3 } },
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
    if (leftNode.data.parent) {
      const map: any = {
        forenoon: '万事开头难',
        afternoon: '然后中间难',
        evening: '最后结束难',
      }
      return map[leftNode.key]
    }

    const courses = ['数学', '英语', '计算机基础', '数据结构', '线性代数', '微积分', '概率论']
    const i = (leftNode.data.x + topNode.data.y) % courses.length
    return courses[i]
  }

  return (
    <div>
      <p style={{ fontSize: 16, marginTop: 0 }}>2020年 学习计划</p>
      <CrossTreeTable
        // 非受控用法：
        defaultOpenKeys={[leftTree[0].key]}
        // 受控用法：
        // const [openKeys, onChangeOpenKeys] = useState([leftTree[0].key])
        // openKeys={openKeys}
        // onChangeOpenKeys={onChangeOpenKeys}

        // 表格第一列的配置
        primaryColumn={{ lock: true, name: '数据维度', width: 200 }}
        defaultColumnWidth={100}
        leftTree={leftTree}
        topTree={topTree}
        getValue={getValue}
      />
    </div>
  )
}
