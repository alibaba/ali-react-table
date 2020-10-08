const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const stories = [
  'table/table.stories.tsx',
  'table/pipeline.stories.tsx',
  'table/transforms.stories.tsx',
  'examples/**/*.stories.tsx',
].map((file) => `../stories/${file}`)

module.exports = {
  addons: ['@storybook/addon-storysource', '@storybook/addon-toolbars'],

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
