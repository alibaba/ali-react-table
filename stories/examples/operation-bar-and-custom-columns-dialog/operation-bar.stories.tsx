import { EarthFilled16 } from '@carbon/icons-react'
import { applyTransforms, BaseTable, exportTableAsExcel } from 'ali-react-table'
import React from 'react'
import { FusionStyles } from '../../assets/fusion-style'
import { testProvColumns, useProvinceDataSource } from '../../assets/ncov19-assets'
import { useOperationBar } from './components'

export default { title: '示例 / 表格操作栏' }

export function 表格操作栏() {
  const { isLoading, dataSource } = useProvinceDataSource()

  const columns = testProvColumns.map((col, i) => ({
    ...col,
    features: {
      enforceVisible: i === 0,
      defaultVisible: true,
    },
  }))

  const operationBar = useOperationBar({
    features: [
      { type: 'custom', node: '自定义文本' },
      {
        type: 'click',
        title: (
          <>
            <EarthFilled16 style={{ fill: 'currentColor', marginRight: 2 }} />
            自定义点击区域
          </>
        ),
      },
      { type: 'separator' },
      {
        type: 'export',
        onExport() {
          exportTableAsExcel(require('xlsx'), dataSource, columns, 'export.xlsx')
        },
      },
      { type: 'custom-columns' },
    ],
    columns,
    actionColor: '#5e85f7',
  })

  const renderData = applyTransforms({ columns, dataSource }, ...operationBar.transforms)

  return (
    <div>
      <FusionStyles />
      <operationBar.view>{operationBar.nodes}</operationBar.view>
      <BaseTable isLoading={isLoading} dataSource={renderData.dataSource} columns={renderData.columns} />
    </div>
  )
}
