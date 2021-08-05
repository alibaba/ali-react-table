const path = require('path')
// const artPkg = require('../ali-react-table/package.json')

module.exports = {
  title: 'ali-react-table',
  tagline: '现代化的高性能 React 表格组件',
  url: 'https://ali-react-table.js.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'alibaba',
  projectName: 'ali-react-table',
  trailingSlash: false,

  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: 'ali-react-table',
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        { to: 'examples', label: '示例', position: 'left' },
        { to: 'blog', label: '博客', position: 'left' },
        { href: 'https://shinima.github.io/ali-react-table-v1-doc/', label: '1.x 文档', position: 'left' },
        {
          href: 'https://github.com/alibaba/ali-react-table',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            { label: '表格示例', to: 'docs/table/examples' },
            { label: '更新日志', to: 'docs/changelog' },
          ],
        },
        {
          title: '帮助',
          items: [
            { label: 'Github Issues', href: 'https://github.com/alibaba/ali-react-table/issues' },
            { label: '钉钉', href: 'dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=feichao93' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: 'Blog', to: 'blog' },
            { label: 'docusaurus', href: 'https://github.com/facebook/docusaurus' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alibaba Inc. Built with ❤️ by feichao.`,
    },

    algolia: {
      apiKey: '10375f97d074db729b52cd376905287c',
      indexName: 'ali-react-table',
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/alibaba/ali-react-table/edit/master/packages/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/alibaba/ali-react-table/edit/master/packages/blog/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss'), require.resolve('./src/css/fusion.css')],
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    path.resolve(__dirname, 'tspaths-docusaurus-plugin.js'),
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'examples',
        path: 'examples',
        routeBasePath: 'examples',
        editUrl: 'https://github.com/alibaba/ali-react-table/edit/master/packages/website/',
        sidebarPath: require.resolve('./example-sidebars.js'),
      },
    ],
  ],
}
