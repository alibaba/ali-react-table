import * as fusion from '@alifd/next'
import {
  BaseTable as ArtBaseTable,
  BaseTableProps,
  TablePipeline,
  useTablePipeline as _useTablePipeline,
} from 'ali-react-table'
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { HippoBaseTable } from './HippoBaseTable'

export const BaseTableThemeContext = React.createContext('default')

export function BaseTable(props: BaseTableProps) {
  const tableTheme = useContext(BaseTableThemeContext)

  let cssUrl: string
  let Table: any = ArtBaseTable

  if (tableTheme === 'hippo') {
    Table = HippoBaseTable
    cssUrl = 'https://gw.alipayobjects.com/os/lib/alife/hippo/2.12.11/dist/hippo.css'
  } else if (tableTheme === 'fusion') {
    cssUrl = 'https://gw.alipayobjects.com/os/lib/alifd/next/1.21.6/dist/next.css'
  } else if (tableTheme === 'antd') {
    // todo
  }

  return (
    <>
      {cssUrl && (
        <Helmet>
          <link rel="stylesheet" href={cssUrl} />
        </Helmet>
      )}
      <Table {...props} />
    </>
  )
}

export function useTablePipeline(arg?: any) {
  const tableTheme = useContext(BaseTableThemeContext)

  let indents = TablePipeline.defaultIndents

  if (tableTheme === 'hippo') {
    indents = {
      iconIndent: -8,
      iconGap: 16,
      iconWidth: 16,
      indentSize: 24,
      textOffset: -8 + 16 + 16,
    }
  }

  return _useTablePipeline({
    // todo 支持其他组件库
    components: (fusion as unknown) as any,
    indents,
  })
}
