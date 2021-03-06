/**
 * Webpack Library Config (Library App)
 * The config file is for other packages to consume this one.
 */

const commonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(commonConfig, {
  devServer: {
    contentBase: './dist',
  },
  entry: './src/export.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'treasure-goblin.js',
    library: {
      name: 'treasure-goblin',
      type: 'umd',
      umdNamedDefine: true
    },
    // Resolution for 'self' used in nodeJS ENV
    // https://github.com/webpack/webpack/issues/6525
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  }
});
