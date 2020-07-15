import { applyTransforms, BaseTable, makeBuildTreeTransform, makeTreeModeTransform } from 'ali-react-table'
import React, { useEffect, useRef, useState } from 'react'
import { amount, lfl, ratio } from '../assets/format'

export default { title: '示例 / 异步数据加载树状表格' }

// prettier-ignore
const fullData = [
  { key: 'key:@total@', parentKey: null, name: '总计', childCount: 1, a: 126434.47, b: 90437.96, c: 86279.48, d: 59811.81, lfl: 0.31, rate: 0.66 },
  { key: 'key:火星', parentKey: 'key:@total@', name: '火星', childCount: 1, a: 69665.75, b: 46072.06, c: 43819.82, d: 30336.13, lfl: 0.37, rate: 0.65 },
  { key: 'key:火星 一季度', parentKey: 'key:火星', name: '一季度', childCount: 3, a: 14438.76, b: 9822.21, c: 8724.7, d: 5929.93, lfl: 0.39, rate: 0.6 },
  { key: 'key:火星 一季度 2022-01', parentKey: 'key:火星 一季度', name: '2022-01', childCount: 0, a: 4349.64, b: 3072.48, c: 2412.92, d: 1840.75, lfl: 0.44, rate: 0.59 },
  { key: 'key:火星 一季度 2022-02', parentKey: 'key:火星 一季度', name: '2022-02', childCount: 0, a: 4873.01, b: 3239.29, c: 3072.48, d: 1931.65, lfl: 0.36, rate: 0.59 },
  { key: 'key:火星 一季度 2022-03', parentKey: 'key:火星 一季度', name: '2022-03', childCount: 0, a: 5216.1, b: 3510.44, c: 3239.29, d: 2157.52, lfl: 0.37, rate: 0.61 },
  { key: 'key:火星 二季度', parentKey: 'key:火星', name: '二季度', childCount: 3, a: 16870.42, b: 10983.12, c: 10585.88, d: 7037.24, lfl: 0.37, rate: 0.64 },
  { key: 'key:火星 二季度 2022-04', parentKey: 'key:火星 二季度', name: '2022-04', childCount: 0, a: 5214.15, b: 3411.93, c: 3510.44, d: 2110.52, lfl: 0.32, rate: 0.61 },
  { key: 'key:火星 二季度 2022-05', parentKey: 'key:火星 二季度', name: '2022-05', childCount: 0, a: 5749.32, b: 3663.5, c: 3411.93, d: 2376.51, lfl: 0.4, rate: 0.64 },
  { key: 'key:火星 二季度 2022-06', parentKey: 'key:火星 二季度', name: '2022-06', childCount: 0, a: 5906.94, b: 3907.68, c: 3663.5, d: 2550.21, lfl: 0.37, rate: 0.65 },
]

function delay<T>(ms: number, resolvedValue: T) {
  return new Promise<T>((resolve) => {
    setTimeout(resolve, ms, resolvedValue)
  })
}

/** 一个 mock 的树状数据服务，实际使用时要替换为相应的真实接口 */
class MockTreeDataService {
  // 加载根节点的数据
  async loadRootNodeData(): Promise<any> {
    const rootDataNode = fullData.find((d) => d.parentKey == null)
    return delay(1000, rootDataNode)
  }

  // 加载父节点的 key 加载子节点数据
  async loadNodeDataByParentKey(parentKey: string): Promise<any[]> {
    const slice = fullData.filter((d) => d.parentKey == parentKey)
    return delay(500, slice)
  }
}

export function AsyncLoadingTreeTable() {
  const [state, setState] = useState({ isLoading: true, data: [] as any[] })

  const dataServiceRef = useRef<MockTreeDataService>()

  useEffect(() => {
    dataServiceRef.current = new MockTreeDataService()

    dataServiceRef.current.loadRootNodeData().then((rootNodeData) => {
      setState({ data: [rootNodeData], isLoading: false })
    })
  }, [])

  function loadNodeDataByParentKey(parentKey: string) {
    setState((prev) => ({ isLoading: true, data: prev.data }))
    dataServiceRef.current.loadNodeDataByParentKey(parentKey).then((newData) => {
      setState((prev) => {
        return {
          isLoading: false,
          data: prev.data.concat(newData),
        }
      })
    })
  }

  const [openKeys, onChangeOpenKeys] = useState<string[]>([])

  const renderData = applyTransforms(
    {
      dataSource: state.data,
      columns: [
        { name: '名称', code: 'name', width: 180, lock: true },
        { code: 'a', name: '目标收入', render: amount, align: 'right' },
        { code: 'b', name: '实际收入', render: amount, align: 'right' },
        { code: 'd', name: '重点商品收入', render: amount, align: 'right' },
        { code: 'lfl', name: '收入月环比', render: lfl, align: 'right' },
        { code: 'rate', name: '重点商品收入占比', render: ratio, align: 'right' },
      ],
    },
    makeBuildTreeTransform('key', 'parentKey'),
    makeTreeModeTransform({
      primaryKey: 'key',
      openKeys,

      onChangeOpenKeys(nextKeys, key, action) {
        onChangeOpenKeys(nextKeys)

        const needLoadData = state.data.every((d) => d.parentKey !== key)
        if (action === 'expand' && needLoadData) {
          // 如果当前展开了某一个节点，且该节点的子节点数据尚未加载，
          //  则调用 loadNodeDataByParentKey 加载更多数据
          loadNodeDataByParentKey(key)
        }
      },

      // 提供一个自定义的 isLeafNode 方法，使得表格为父节点正确渲染收拢/展开按钮
      isLeafNode(node) {
        return node.childCount === 0
      },
    }),
  )

  return (
    <BaseTable
      defaultColumnWidth={120}
      isLoading={state.isLoading}
      dataSource={renderData.dataSource}
      columns={renderData.columns}
    />
  )
}
