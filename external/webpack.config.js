const path = require('path');

var target = process.env.BUILD_TARGET
var noMinify = process.env.NO_MINIFY

module.exports = {
  entry: `./${target}.js`,
  node: {
    fs: 'empty'
  },
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: `${target}.js`,
    libraryTarget: 'commonjs2'
  }
}
