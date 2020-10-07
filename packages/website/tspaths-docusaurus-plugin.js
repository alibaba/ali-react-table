const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',

    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [{ test: /\.tsx?$/, loader: 'ts-loader', options: { transpileOnly: true } }],
        },
        resolve: {
          plugins: [new TsconfigPathsPlugin()],
        },
      }
    },
  }
}
