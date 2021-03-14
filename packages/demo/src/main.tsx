import React from 'react'
import ReactDOM from 'react-dom'
import { StyleSheetManager } from 'styled-components'
import { DemoApp } from './DemoApp'
import 'antd/dist/antd.css'

const hot = (module as any).hot

if (hot) {
  hot.accept()
}

ReactDOM.render(
  <StyleSheetManager disableVendorPrefixes>
    <DemoApp />
  </StyleSheetManager>,
  document.getElementById('container'),
)
