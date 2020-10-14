import React from 'react'
import { BaseTable } from 'ali-react-table'
import styled from 'styled-components'
import useThemeContext from '@theme/hooks/useThemeContext'

const DarkBaseTable = styled(BaseTable)`
  --bgcolor: #333;
  --header-bgcolor: #45494f;
  --hover-bgcolor: #46484a;
  --header-hover-bgcolor: #606164;
  --highlight-bgcolor: #191a1b;
  --header-highlight-bgcolor: #191a1b;
  --color: #dadde1;
  --header-color: #dadde1;
  --lock-shadow: rgb(37 37 37 / 0.5) 0 0 6px 2px;
  --border-color: #3c4045;
`

export const WebsiteBaseTable = React.forwardRef((props, ref) => {
  const { isDarkTheme } = useThemeContext()

  // 下面的写法下，切换主题将导致组件重新加载
  // 如果要避免重新加载，可以使用 styled-components 提供的 css 方法
  const Table = isDarkTheme ? DarkBaseTable : BaseTable

  return <Table ref={ref} {...props} />
})
