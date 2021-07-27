import React from 'react'
import ReactDOM from 'react-dom'
import { DemoApp } from './DemoApp'

import 'antd/dist/antd.css'
import 'ali-react-table/src/styles/index.scss'

const hot = (module as any).hot

if (hot) {
  hot.accept()
}

ReactDOM.render(<DemoApp />, document.getElementById('container'))
