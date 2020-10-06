import * as fusion from '@alifd/next'
import {
  BaseTable as _BaseTable,
  BaseTableProps,
  TablePipeline,
  useTablePipeline as _useTablePipeline,
} from 'ali-react-table'
import * as antd from 'antd'
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { AntBaseTable } from './AntBaseTable'
import { HippoBaseTable } from './HippoBaseTable'

export const BaseTableThemeContext = React.createContext('default')

export const BaseTable = React.forwardRef<_BaseTable, BaseTableProps>(function (props: BaseTableProps, ref) {
  const tableTheme = useContext(BaseTableThemeContext)

  // 默认加载 fusion 样式，不然很多组件的样式就挂了…
  let cssUrl = 'https://gw.alipayobjects.com/os/lib/alifd/next/1.21.6/dist/next.css'
  let Table: any = _BaseTable

  if (tableTheme === 'hippo') {
    Table = HippoBaseTable
    cssUrl = 'https://gw.alipayobjects.com/os/lib/alife/hippo/2.12.11/dist/hippo.css'
  } else if (tableTheme === 'antd') {
    Table = AntBaseTable
    cssUrl = 'https://gw.alipayobjects.com/os/lib/antd/4.6.6/dist/antd.css'
  }

  return (
    <>
      {cssUrl && (
        <Helmet>
          <link rel="stylesheet" href={cssUrl} />
        </Helmet>
      )}
      <Table ref={ref} {...props} />
    </>
  )
})

export function useTablePipeline(arg?: any) {
  const tableTheme = useContext(BaseTableThemeContext)

  let indents = TablePipeline.defaultIndents
  let components = fusion as any

  if (tableTheme === 'hippo') {
    indents = {
      iconIndent: -8,
      iconGap: 16,
      iconWidth: 16,
      indentSize: 24,
      textOffset: -8 + 16 + 16,
    }
  } else if (tableTheme == 'antd') {
    components = antd
    indents = {
      iconIndent: -8,
      iconGap: 8,
      iconWidth: 16,
      indentSize: 16,
      textOffset: 16,
    }
  }

  return _useTablePipeline({
    components,
    indents,
  })
}
