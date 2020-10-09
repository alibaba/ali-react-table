import React from 'react'
import { BaseTable } from 'ali-react-table'
import styled, { css } from 'styled-components'
import * as assets from 'assets'
import useThemeContext from '@theme/hooks/useThemeContext'
import { WebsiteStyleReset } from './WebsiteStyleReset'

const darkThemeMixin = css`
  --bgcolor: #333;
  --header-bgcolor: #45494f;
  --hover-color: #46484a;
  --hover-bgcolor: #46484a;
  --highlight-bgcolor: #191a1b;
  --header-highlight-bgcolor: #191a1b;
  --color: #dadde1;
  --header-color: #dadde1;
  --lock-shadow: rgba(200, 200, 200, 0.1) 0 0 6px 2px;
  --border-color: #3c4045;
`

const StyledBaseTable = styled(BaseTable)`
  ${(props) => (props.isDarkTheme ? darkThemeMixin : '')};
`

export const WebsiteBaseTable = React.forwardRef((props, ref) => {
  const { isDarkTheme } = useThemeContext()

  return (
    <>
      <StyledBaseTable isDarkTheme={isDarkTheme} ref={ref} {...props} />
      {/* 动态引入 fusion 的样式 */}
      <assets.FusionStyles />
      {/* 重置 fusion 样式给文档网站带来的影响 */}
      <WebsiteStyleReset />
    </>
  )
})
