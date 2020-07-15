import {
  applyTransforms,
  ArtColumn,
  BaseTable,
  Classes,
  makeBuildTreeTransform,
  makeTreeModeTransform,
} from 'ali-react-table'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAppTrafficData } from '../assets/cdn-data'
import { ratio } from '../assets/format'

export default { title: '示例 / 树状表格中的最近展开标记' }

const StyledBaseTable = styled(BaseTable)`
  .${Classes.tableRow}.last-open {
    background: rgba(128, 243, 87, 0.32);

    .expansion-icon {
      fill: #4de247;
    }
  }

  .${Classes.tableRow}.last-collapse {
    background: rgba(253, 32, 32, 0.32);

    .expansion-icon {
      fill: #e54950;
    }
  }
`

export function TreeTableWithLastOpenMark() {
  const columns: ArtColumn[] = [
    { code: 'name', name: '数据维度', lock: true, width: 200 },
    { code: 'shop_name', name: '门店' },
    { code: 'imp_uv_dau_pct', name: '曝光UV占DAU比例', render: ratio, align: 'right' },
    { code: 'app_qty_pbt', name: 'APP件单价', align: 'right' },
    { code: 'all_app_trd_amt_1d', name: 'APP成交金额汇总', align: 'right' },
  ]

  const [state, setState] = useState({
    isLoading: true,
    data: [] as any[],
    lastOpenKey: '',
    lastCollapseKey: '',
  })

  useEffect(() => {
    getAppTrafficData().then((data) => {
      setState({ isLoading: false, data, lastOpenKey: '', lastCollapseKey: '' })
    })
  }, [])

  const [openKeys, onChangeOpenKeys] = useState([])

  // 注意 renderData 要用起来
  const renderData = applyTransforms(
    { columns: columns, dataSource: state.data },

    // 从平铺的数据中，根据 id/parent_id 字段构建出树状结构
    makeBuildTreeTransform('id', 'parent_id'),

    makeTreeModeTransform({
      primaryKey: 'id',
      openKeys,
      onChangeOpenKeys(nextKeys, key, action) {
        onChangeOpenKeys(nextKeys)
        if (action === 'expand') {
          setState({ ...state, lastOpenKey: key, lastCollapseKey: '' })
        } else {
          setState({ ...state, lastOpenKey: '', lastCollapseKey: key })
        }
      },
    }),
  )

  return (
    <StyledBaseTable
      dataSource={renderData.dataSource}
      columns={renderData.columns}
      isLoading={state.isLoading}
      getRowProps={(record) => {
        if (record.id === state.lastOpenKey) {
          return { className: 'last-open' }
        } else if (record.id === state.lastCollapseKey) {
          return { className: 'last-collapse' }
        }
      }}
    />
  )
}
