var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'rc-bmap': path.join(__dirname, 'src/index.js'),
  },
  externals: [
    {
      react: {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React',
      },
    },
    {
      'react-dom': {
        amd: 'react-dom',
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        root: 'ReactDOM',
      },
    },
  ],
  output: {
    filename: '[name].min.js',
    library: 'rc-bmap',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'examples/dist')
  },
  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ["transform-decorators-legacy"]
      }
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        warnings: false,
      },
    }),
  ]
};