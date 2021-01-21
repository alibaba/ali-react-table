import React from 'react'
import ReactDOM from 'react-dom'
import { StyleSheetManager } from 'styled-components'
import { App } from './App'

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
