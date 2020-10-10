import React from 'react'
import cx from 'clsx'
import * as art from 'ali-react-table'
import styled from 'styled-components'
import * as fusion from '@alifd/next'
import * as assets from 'assets'
import * as docHelpers from './docHelpers'
import { WebsiteBaseTable } from './WebsiteBaseTable'

const ReactLiveScope = {
  React,
  ...React,
  fusion,
  ...fusion,
  styled,
  cx,
  art,
  ...art,

  assets,
  docHelpers,

  // 在网站中用 WebsiteBaseTable 代替 BaseTable，使得表格支持暗色模式
  BaseTable: WebsiteBaseTable,
}

export default ReactLiveScope
