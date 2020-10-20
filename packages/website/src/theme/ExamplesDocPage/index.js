import React from 'react'
import DocPage from '@theme/DocPage'
import { createGlobalStyle } from 'styled-components'

const DisableNavBarFixedTop = createGlobalStyle`
.navbar--fixed-top {
  position: static;
}
`

export default function ExamplesDocPage(props) {
  return (
    <>
      <DisableNavBarFixedTop />
      <DocPage {...props} />
    </>
  )
}
