path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  context: __dirname + "/src",
  entry: './main',
  output: {
    filename: 'mission-control.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'] },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};



