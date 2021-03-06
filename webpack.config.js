const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    popup: __dirname + '/src/js/popup.js',
    background: __dirname + '/src/js/background.js',
    client: __dirname + '/src/js/client.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([{
      from: 'src/manifest.json'
    }, {
      from: 'src/img'
    }, {
      from: 'src/css'
    }]),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/popup.html',
      filename: 'popup.html',
      chunks: ['popup']
    })
  ]
}
