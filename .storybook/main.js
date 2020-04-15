const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const baseTable = ['base-table/base-table.stories.mdx', 'base-table/base-table.stories.tsx']

const biz = [
  'biz/biz.stories.mdx',
  'biz/biz-transforms.stories.mdx',
  'biz/biz-common-transforms.stories.mdx',
  'biz/biz-operation-bar.stories.mdx',
  'biz/biz-components.stories.mdx',
  'biz/examples/**/*.stories.tsx',
]

const pivot = [
  'pivot/cross-table.stories.mdx',
  'pivot/cross-table.stories.tsx',
  'pivot/pivot-utils.stories.mdx',
  'pivot/pivot-utils.stories.tsx',
]

module.exports = {
  presets: ['@storybook/addon-docs/preset'],
  addons: ['@storybook/addon-storysource', '@storybook/addon-links/register'],

  stories: [
    // 手动引入来控制顺序
    'index.stories.mdx',
    'changelog.stories.mdx',
    ...baseTable,
    ...biz,
    ...pivot,
    'tools/**/*.stories.mdx',
    'examples/**/*.stories.tsx',
  ].map((file) => `../stories/${file}`),

  webpack: async (config) => {
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
