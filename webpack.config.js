const path = require('path');

module.exports = {
  entry: [ './src/app.js', './src/main.scss' ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map', // any "source-map"-like devtool is possible
  module: {
    rules: [ {
      test: /\.scss$/,
      use: [ {
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: 'sass-loader'
      } ]
    }, {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      use: [ {
        loader: "file-loader"
      } ]
    } ]
  }
};