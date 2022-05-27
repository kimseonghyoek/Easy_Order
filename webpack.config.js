const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './frontend/src/index.js'
  ],
  output: {
    // 번들링 된 결과물 나옴
    filename: 'index_bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: 'http://localhost:8080'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/src/index.html'
    }),
    new MiniCssExtract({ filename: `[name].css`})
  ]
}