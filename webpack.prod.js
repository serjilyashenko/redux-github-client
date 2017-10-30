const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'none',
  plugins: [
    new UglifyJSPlugin(),
  ],
});