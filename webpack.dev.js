const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 100,
    poll: 1000,
  },
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
