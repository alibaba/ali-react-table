'use strict'

module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-object-rest-spread',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}
