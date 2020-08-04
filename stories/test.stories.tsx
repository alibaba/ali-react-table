import { BaseTable } from 'ali-react-table'
import React from 'react'
import { amount, time } from './assets/format'
import { useProvinceDataSource } from './assets/ncov19-assets'

export default { title: 'test' }

export function Test() {
  const { dataSource, isLoading } = useProvinceDataSource()

  return (
    <BaseTable
      style={{ width: 600, height: 300, overflow: 'auto' }}
      useOuterBorder
      dataSource={dataSource}
      columns={[
        { lock: true, code: 'provinceName', name: '省份', width: 150 },
        { code: 'confirmedCount', name: '确诊', width: 100, render: amount, align: 'right' },
        { code: 'suspectedCount', name: '疑似', width: 100, render: amount, align: 'right' },
        { code: 'curedCount', name: '治愈', width: 100, render: amount, align: 'right' },
        { code: 'deadCount', name: '死亡', width: 100, render: amount, align: 'right' },
        { lock: true, code: 'updateTime', name: '最后更新时间', width: 180, render: time },
      ]}
    />
  )
}
