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
    filename: 'index.js',
    library: 'treasure-goblin',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  }
});
