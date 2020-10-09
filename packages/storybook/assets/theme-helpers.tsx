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
import { AntdBaseTable } from './AntdBaseTable'
import { FusionStyleReset } from './fusion-style-reset'
import { HippoBaseTable } from './HippoBaseTable'

export const BaseTableThemeContext = React.createContext('default')

const fusionCSSUrl = 'https://gw.alipayobjects.com/os/lib/alifd/next/1.21.6/dist/next.css'
const hippoCSSUrl = 'https://gw.alipayobjects.com/os/lib/alife/hippo/2.12.11/dist/hippo.css'
const antdCSSUrl = 'https://gw.alipayobjects.com/os/lib/antd/4.6.6/dist/antd.css'

export const AntdStyles = () => (
  <>
    <Helmet>
      <link rel="stylesheet" href={antdCSSUrl} />
    </Helmet>
    {/* todo <AntdStyleReset />*/}
  </>
)

export const FusionStyles = () => (
  <>
    <Helmet>
      <link rel="stylesheet" href={fusionCSSUrl} />
    </Helmet>
    {/* 重置 fusion 样式给文档网站带来的影响 */}
    <FusionStyleReset />
  </>
)

export const HippoStyles = () => (
  <>
    <Helmet>
      <link rel="stylesheet" href={hippoCSSUrl} />
    </Helmet>
    <FusionStyleReset />
  </>
)

export const ThemedBaseTable = React.forwardRef<_BaseTable, BaseTableProps>(function (props: BaseTableProps, ref) {
  const tableTheme = useContext(BaseTableThemeContext)

  let Table: any = _BaseTable

  if (tableTheme === 'hippo') {
    Table = HippoBaseTable
  } else if (tableTheme === 'antd') {
    Table = AntdBaseTable
  }

  return (
    <>
      {/*<WithCSS library={tableTheme} />*/}
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

  return _useTablePipeline({ components, indents })
}
