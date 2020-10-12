import OriginalLayout from '@theme-original/Layout'
import React from 'react'
import * as assets from 'assets/src'
import { WebsiteStyleReset } from '../ReactLiveScope/WebsiteStyleReset'

export default function Layout(props) {
  console.log('my layout!!')

  return (
    <>
      <OriginalLayout {...props} />
      <assets.FusionStyles />
      <WebsiteStyleReset />
    </>
  )
}
