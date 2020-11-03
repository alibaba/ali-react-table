import { ArtColumn, features, isLeafNode, useTablePipeline } from 'ali-react-table'
import { buildDrillTree, buildRecordMap, DrillNode } from 'ali-react-table/pivot'
import { getAppTrafficData } from 'assets/cdn-data'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'
import React, { useEffect, useState } from 'react'
import { identity } from 'rxjs'

export default { title: '业务示例 / 典型数据报表' }

const amount = (v: any) => Number(v).toFixed(2)
const ratio = (v: any) => `${(Number(v) * 100).toFixed(2)}%`

export function 典型数据报表() {
  const indicatorTree: ArtColumn[] = [
    {
      name: 'APP指标',
      code: 'app_qty_pbt',
      render: String,
      children: [
        { code: 'imp_uv_dau_pct', name: '曝光UV占DAU比例', render: ratio },
        {
          code: 'all_app_trd_amt_1d',
          name: 'APP成交金额汇总',
          render(value: any, record: any, recordIndex: number) {
            return amount(value)
          },
          getCellProps(value: any, record: any, recordIndex: number) {
            if (value > 30) {
              return { style: { color: 'red' } }
            }
          },
        },
        { code: 'app_trd_usr_cnt_1d', name: 'APP成交用户数', render: amount },
      ],
    },
    {
      name: '转换率',
      code: 'all_imp2pay_rate',
      render: ratio,
      children: [
        { code: 'all_imp2pay_rate', name: '整体曝光至成交转化率', render: ratio },
        { code: 'search_imp2pay_rate', name: '搜索曝光至成交转化率', render: ratio },
        { code: 'classis_imp2pay_rate', name: '分类曝光至成交转化率', render: ratio },
        { code: 'cart_imp2pay_rate', name: '购物车曝光至成交转化率', render: ratio },
      ],
    },
  ]

  const mainCol: ArtColumn = {
    name: '指标',
    width: 200,
    lock: true,
    render(value: any, record: any, recordIndex: number) {
      return record.name
    },
  }

  const [state, setState] = useState({
    isLoading: true,
    columns: [] as ArtColumn[],
  })

  useEffect(() => {
    getAppTrafficData().then((data) => {
      const codes = ['city_name', 'shop_name']
      const topTree = buildDrillTree(data, codes)
      const recordMap = buildRecordMap({ data, codes })

      // 动态生成表格列
      const columns = convertDrillTreeToColumns(recordMap, topTree)
      setState({ isLoading: false, columns })
    })
  }, [])

  const [openKeys, onChangeOpenKeys] = useState(['APP指标', '转换率'])

  const pipeline = useTablePipeline()
    .input({ columns: [mainCol, ...state.columns], dataSource: indicatorTree })
    .primaryKey('name')
    .use(
      features.treeMode({
        openKeys,
        onChangeOpenKeys,
        indentSize: 20,
      }),
    )

  return <WebsiteBaseTable {...pipeline.getProps()} isLoading={state.isLoading} />

  function convertDrillTreeToColumns(recordMap: Map<string, any>, nodes: DrillNode[]): ArtColumn[] {
    const result: ArtColumn[] = []
    for (const node of nodes) {
      result.push({
        name: node.value,
        code: node.key,
        render(_v, { code, render }) {
          const record = recordMap.get(node.key)
          return (render ?? identity)(record?.[code])
        },
        getCellProps(_v, { code, getCellProps }) {
          const record = recordMap.get(node.key)
          if (getCellProps != null) {
            return getCellProps(record?.[code])
          }
        },
        width: 150,
        children: isLeafNode(node) ? null : convertDrillTreeToColumns(recordMap, node.children),
      })
    }
    return result
  }
}
