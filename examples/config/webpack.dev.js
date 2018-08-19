const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src/'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    publicPath: '//localhost:9000/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
