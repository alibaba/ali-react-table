import React from 'react'
import { BaseTable } from 'ali-react-table'
import styled, { css } from 'styled-components'
import useThemeContext from '@theme/hooks/useThemeContext'

const darkThemeMixin = css`
  --bgcolor: #333;
  --header-bgcolor: #45494f;
  --hover-color: #46484a;
  --hover-bgcolor: #46484a;
  --highlight-bgcolor: #191a1b;
  --header-highlight-bgcolor: #191a1b;
  --color: #dadde1;
  --header-color: #dadde1;
  --lock-shadow: rgb(37 37 37 / 0.5) 0 0 6px 2px;
  --border-color: #3c4045;
`

const StyledBaseTable = styled(BaseTable)`
  ${(props) => (props.isDarkTheme ? darkThemeMixin : '')};
`

export const WebsiteBaseTable = React.forwardRef((props, ref) => {
  const { isDarkTheme } = useThemeContext()

  return <StyledBaseTable isDarkTheme={isDarkTheme} ref={ref} {...props} />
})
