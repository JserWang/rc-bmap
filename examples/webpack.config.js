var path = require('path');

module.exports = {
    entry: {
      app: path.join(__dirname, 'components/index.js'),
    },
    output: {
      filename: '[name].js',
      publicPath: 'http://localhost:8080/build',
      path: path.resolve(__dirname, 'build')
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
    devServer: {
        contentBase: __dirname,
        port: 8080
    },
};