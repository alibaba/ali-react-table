import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: '高性能',
    imageUrl: 'img/feature-virtual-scrolling.svg',
    description: <>内置虚拟滚动，数据量较大时自动开启，轻松应对 10 万行 / 10 万列的数据规模。</>,
  },
  {
    title: '实用表格特性',
    imageUrl: 'img/feature-rich-builtins.svg',
    description: <>表头吸顶；左侧/右侧锁列；粘性滚动条；表格页脚；优化的加载图标位置</>,
  },
  {
    title: '可定制性',
    imageUrl: 'img/feature-highly-customizable.svg',
    description: (
      <>简单灵活的 API，丰富的定制能力。一套代码同时适配 Ant Design, Alibaba Fusion Design，盒马内部的 Hippo Design</>
    ),
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()

  const { siteConfig = {} } = context
  const heroBgImgUrl = useBaseUrl('img/herobg.svg')

  return (
    <Layout title="ali-react-table" description="ali-react-table: 现代化的高性能 React 表格组件">
      <header
        className={clsx('hero hero--primary', styles.heroBanner)}
        style={{
          background: `url(${heroBgImgUrl}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom left',
        }}
      >
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/')}
            >
              开始使用
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
