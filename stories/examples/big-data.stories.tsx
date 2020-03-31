import { BaseTable, ArtColumn } from 'ali-react-table'
import React from 'react'
import { cols, useAllDataSource } from '../assets/ncov19-assets'

export default { title: '示例 / 大数据测试' }

export function 滚动容器为window() {
  const { dataSource, isLoading } = useAllDataSource()
  return (
    <BaseTable
      isLoading={isLoading}
      dataSource={dataSource}
      columns={[
        {
          lock: true,
          width: 80,
          name: 'index',
          getValue(record: any, rowIndex: number) {
            return rowIndex
          },
        },
        cols.updateTime,
        cols.provinceName,
        cols.cityName,
        ...cols.indCols,
      ]}
    />
  )
}

export function 滚动容器为指定高度的div() {
  const { dataSource, isLoading } = useAllDataSource()
  return (
    <BaseTable
      style={{ height: 400, overflow: 'auto' }}
      useOuterBorder
      isLoading={isLoading}
      dataSource={dataSource}
      columns={[
        {
          lock: true,
          width: 80,
          name: 'index',
          getValue(record: any, rowIndex: number) {
            return rowIndex
          },
        },
        cols.updateTime,
        cols.provinceName,
        cols.cityName,
        ...cols.indCols,
      ]}
    />
  )
}

export function 双向虚拟滚动() {
  const { dataSource, isLoading } = useAllDataSource()
  const repeatedColumns: ArtColumn[] = []

  for (let i = 0; i < 1000; i++) {
    for (const col of cols.indCols) {
      repeatedColumns.push({ ...col, name: `copy-${i} ${col.name}` })
    }
  }

  return (
    <BaseTable
      isLoading={isLoading}
      useVirtual={true}
      dataSource={[dataSource, dataSource, dataSource, dataSource, dataSource].flat()}
      columns={[
        {
          lock: true,
          width: 80,
          name: 'index',
          getValue(record: any, rowIndex: number) {
            return rowIndex
          },
        },
        cols.updateTime,
        cols.provinceName,
        cols.cityName,
        ...repeatedColumns,
      ]}
    />
  )
}
