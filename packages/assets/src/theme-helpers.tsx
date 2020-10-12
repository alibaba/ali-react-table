import React from 'react'
import { Helmet } from 'react-helmet'

export const BaseTableThemeContext = React.createContext('default')

const fusionCSSUrl = 'https://gw.alipayobjects.com/os/lib/alifd/next/1.21.6/dist/next.css'
const hippoCSSUrl = 'https://gw.alipayobjects.com/os/lib/alife/hippo/2.12.11/dist/hippo.css'
const antdCSSUrl = 'https://gw.alipayobjects.com/os/lib/antd/4.6.6/dist/antd.css'

export const AntdStyles = () => (
  <Helmet>
    <link rel="stylesheet" href={antdCSSUrl} />
  </Helmet>
)

export const FusionStyles = () => (
  <Helmet>
    <link rel="stylesheet" href={fusionCSSUrl} />
  </Helmet>
)

export const HippoStyles = () => (
  <Helmet>
    <link rel="stylesheet" href={hippoCSSUrl} />
  </Helmet>
)
