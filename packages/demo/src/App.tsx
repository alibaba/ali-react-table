import { BaseTable } from 'ali-react-table'
import React from 'react'
import { cols, useCityDataSource } from 'website/src/assets/ncov19-assets'

export function App() {
  const { dataSource } = useCityDataSource()

  return (
    <BaseTable
      dataSource={dataSource.flatMap((d) => d.children)}
      columns={[
        cols.lockProvCol,
        cols.cityName,
        ...cols.indCols,
        ...cols.indCols,
        ...cols.indCols,
        ...cols.indCols,
        ...cols.indCols,
        cols.lockTimeCol,
      ]}
    />
  )
}
