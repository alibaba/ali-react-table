const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env = {}) => {
  return {
    entry: path.resolve(__dirname, 'src/main.tsx'),

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      libraryTarget: 'umd',
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: `index.html`,
        template: path.resolve(__dirname, 'src/template.html'),
      }),
    ],

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [new TsconfigPathsPlugin()],
    },

    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          loader: 'ts-loader',
          options: { transpileOnly: true },
          exclude: /node_modules/,
        },
        {
          test: /\.css?$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
      ],
    },

    devServer: {
      hot: true,
      port: 8080,
      after() {
        const openBrowser = require('react-dev-utils/openBrowser')
        setTimeout(() => {
          openBrowser('http://localhost:8080/')
        }, 200)
      },
    },
  }
}
