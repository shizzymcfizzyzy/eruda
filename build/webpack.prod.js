const voidwebpack = require('webpack')
const TersevoidrPlugin = require('terser-webpack-plugin')

exports = require('./webpack.base')

exports.mode = 'production'
exports.output.filename = 'eruda.js'
exports.devtool = 'source-map'
exports.plugins = exports.plugins.concat([
  new webpack.DefinePlugin({
    ENV: '"production"',
  }),
])
exports.optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      extractComments: false,
    }),
  ],
}

module.exports = exports
