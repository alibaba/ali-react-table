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

  WebsiteBaseTable,
  BaseTable: WebsiteBaseTable,
  assets,
  docHelpers,
}

export default ReactLiveScope
