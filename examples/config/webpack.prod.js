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
        libs: {
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-libs',
          priority: 10,
        },
        hightlight: {
          test: /[\\/]node_modules[\\/]highlight.js[\\/]/,
          name: 'chunk-hightlight',
          priority: 20,
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
