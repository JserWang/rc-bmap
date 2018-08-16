const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

const { BundleAnalyzerPlugin } = BundleAnalyzer;

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          mangle: {
            safari10: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}), // use OptimizeCSSAssetsPlugin
    ],
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {// node_modules内的依赖库
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-libs',
          minChunks: 1, // 被不同entry引用次数(import),1次的话没必要提取
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100,
          chunks: 'initial',
          // enforce: true?
        },
        antd: {
          test: /[\\/]node_modules[\\/]antd[\\/]/,
          name: 'chunk-antd',
          priority: 110,
        },
        map: {
          test: /[\\/]node_modules[\\/]rc-bmap[\\/]/,
          name: 'chunk-map',
          priority: 115,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:12].css',
      chunkFilename: '[name].[contenthash:12].css', // use contenthash *
    }),
    new BundleAnalyzerPlugin(),
  ],
});
