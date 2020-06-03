const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const stories = require('./stories')

module.exports = {
  presets: ['@storybook/addon-docs/preset'],
  addons: ['@storybook/addon-storysource', '@storybook/addon-links/register'],

  stories,

  webpack: async (config) => {
    if (config.mode === 'production') {
      // 在生产环境下关闭 devtool
      config.devtool = false
    }

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
