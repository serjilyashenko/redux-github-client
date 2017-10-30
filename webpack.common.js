const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      template: './index.ejs',
      filename: './index.html',
      chunks: ['main']
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              [
                'env',
                {
                  module: false
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'autoprefixer-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
