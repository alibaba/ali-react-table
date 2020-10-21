import React from 'react'
import styled from 'styled-components'
import { WebsiteBaseTable } from 'assets/WebsiteBaseTable'
import useThemeContext from '@theme/hooks/useThemeContext'
import ReactInspector from 'react-inspector'

export const DetailDiv = styled.div`
  display: flex;
  min-width: 800px;

  p:first-child {
    margin-top: 0;
  }
  p {
    margin: 0;
    line-height: 20px;
  }

  .right {
    margin-left: 48px;
  }
`

export const StyledWebsiteBaseTable = styled(WebsiteBaseTable)`
  tr.last-open {
    --bgcolor: rgba(128, 243, 87, 0.32);
    --hover-bgcolor: rgba(128, 243, 87, 0.32);

    .expansion-icon {
      fill: #4de247;
    }
  }

  tr.last-collapse {
    --bgcolor: rgba(253, 32, 32, 0.32);
    --hover-bgcolor: rgba(253, 32, 32, 0.32);

    .expansion-icon {
      fill: #e54950;
    }
  }
`

export function Inspector(props) {
  const { isDarkTheme } = useThemeContext()

  if (typeof window === 'undefined') {
    return null
  }

  const theme = isDarkTheme ? 'chromeDark' : 'chromeLight'

  return <ReactInspector theme={theme} {...props} />
}
