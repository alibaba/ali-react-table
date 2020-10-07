const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const stories = require('./stories')

module.exports = {
  presets: ['@storybook/addon-docs/preset'],
  addons: ['@storybook/addon-storysource', '@storybook/addon-toolbars', '@storybook/addon-links/register'],

  typescript: {
    check: false,
  },

  stories,

  webpack: async (config) => {
    if (config.mode === 'production') {
      // 在生产环境下关闭 devtool
      config.devtool = false
    }

    if (config.resolve.plugins == null) {
      config.resolve.plugins = []
    }
    config.resolve.plugins.push(new TsconfigPathsPlugin())
    return config
  },
}
