import * as fusion from '@alifd/next'
import {
  BaseTable as _BaseTable,
  BaseTableProps,
  TablePipeline,
  useTablePipeline as _useTablePipeline,
} from 'ali-react-table'
import * as antd from 'antd'
import { AntdBaseTable, BaseTableThemeContext, HippoBaseTable } from 'assets'
import React, { useContext } from 'react'
import { WebsiteBaseTable } from '../src/theme/ReactLiveScope/WebsiteBaseTable'

// todo
export const ThemedBaseTable = WebsiteBaseTable

export const ThemedBaseTable1 = React.forwardRef<_BaseTable, BaseTableProps>(function (props: BaseTableProps, ref) {
  const tableTheme = useContext(BaseTableThemeContext)

  let Table: any = _BaseTable

  if (tableTheme === 'hippo') {
    Table = HippoBaseTable
  } else if (tableTheme === 'antd') {
    Table = AntdBaseTable
  }

  return (
    <>
      <Table ref={ref} {...props} />
    </>
  )
})

export function useThemedTablePipeline(arg?: any) {
  const tableTheme = useContext(BaseTableThemeContext)

  let indents = TablePipeline.defaultIndents
  let components = fusion as any

  if (tableTheme === 'hippo') {
    indents = {
      iconIndent: -8,
      iconGap: 16,
      iconWidth: 16,
      indentSize: 24,
    }
  } else if (tableTheme == 'antd') {
    components = antd
    indents = {
      iconIndent: -8,
      iconGap: 8,
      iconWidth: 16,
      indentSize: 16,
    }
  }

  return _useTablePipeline({ components, indents })
}
