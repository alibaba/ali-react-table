import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <h2 style={{ margin: '1rem' }}>todo 放置一个自定义的页面用来 存放一些比较复杂的表格示例</h2>
    </Layout>
  )
}

export default Home
