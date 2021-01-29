import React from 'react'
import ReactDOM from 'react-dom'
import { StyleSheetManager } from 'styled-components'
import { App } from './App'
import 'antd/dist/antd.css'

const hot = (module as any).hot

if (hot) {
  hot.accept()
}

ReactDOM.render(
  <StyleSheetManager disableVendorPrefixes>
    <App />
  </StyleSheetManager>,
  document.getElementById('container'),
)
