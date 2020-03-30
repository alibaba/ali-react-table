const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const baseTable = ['base-table/base-table.stories.mdx', 'base-table/base-table.stories.tsx']

const bizUtils = [
  'biz-utils/biz-utils.stories.mdx',
  'biz-utils/biz-utils-transforms.stories.mdx',
  'biz-utils/biz-utils-common-transforms.stories.mdx',
  'biz-utils/biz-utils-operation-bar.stories.mdx',
  'biz-utils/biz-utils-components.stories.mdx',
  'biz-utils/examples/**/*.stories.tsx',
]

const crossTable = [
  // 交叉表文档与示例
  'cross-table/cross-table.stories.mdx',
  'cross-table/cross-table.stories.tsx',
]

const pivotUtils = []

const lab = [
  // dvt-table 实验室
  'lab/lab.stories.mdx',
  'pivot-utils/pivot-utils.stories.mdx',
  'pivot-utils/pivot-utils.stories.tsx',
]

module.exports = {
  presets: ['@storybook/addon-docs/preset'],

  stories: [
    // 手动引入来控制顺序
    'index.stories.mdx',
    'changelog.stories.mdx',
    ...baseTable,
    ...bizUtils,
    ...crossTable,
    ...pivotUtils,
    'tools/**/*.stories.mdx',
    'examples/**/*.stories.tsx',
    ...lab,
  ].map(file => `../stories/${file}`),

  webpack: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        { loader: 'awesome-typescript-loader', options: { transpileOnly: true } },
        'react-docgen-typescript-loader',
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    if (config.resolve.plugins == null) {
      config.resolve.plugins = []
    }
    config.resolve.plugins.push(new TsconfigPathsPlugin())
    return config
  },
}
