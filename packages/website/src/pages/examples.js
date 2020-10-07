import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

function StorybookIframe() {
  return (
    <iframe
      src={process.env.NODE_ENV !== 'production' ? 'http://localhost:2333/' : '/storybook'}
      style={{ display: 'block', width: '100%', height: 'calc(100vh - 60px)', border: 'none' }}
    />
  )
}

function Home(props) {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      noFooter
    >
      <StorybookIframe />
    </Layout>
  )
}

export default Home
