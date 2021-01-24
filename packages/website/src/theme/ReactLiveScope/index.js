import useThemeContext from '@theme/hooks/useThemeContext'
import React from 'react'
import cx from 'clsx'
import * as art from 'ali-react-table'
import * as artPivot from 'ali-react-table/pivot'
import { CrossTable, CrossTreeTable } from 'ali-react-table/pivot'
import { createAggregateFunction } from 'dvt-aggregation'
import styled from 'styled-components'
import * as fusion from '@alifd/next'
import * as assets from '../../assets'
import * as docHelpers from './docHelpers'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'

const ReactLiveScope = {
  React,
  ...React,
  fusion,
  ...fusion,
  styled,
  cx,
  art,
  ...art,
  artPivot,
  ...artPivot,
  createAggregateFunction,

  assets,
  docHelpers,

  // 在网站中用 WebsiteBaseTable 代替 BaseTable，使得表格支持暗色模式
  BaseTable: WebsiteBaseTable,
  CrossTable: (props) => <CrossTable BaseTableComponent={WebsiteBaseTable} {...props} />,
  CrossTreeTable: (props) => <CrossTreeTable BaseTableComponent={WebsiteBaseTable} {...props} />,
  useThemeContext,
}

export default ReactLiveScope
