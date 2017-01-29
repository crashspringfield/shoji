var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
    app: './src/app.js'
  },

  output: {
    filename: 'dist/bundle.js',
    sourceMapFilename: 'dist/bundle.map'
  },

  devtool: '#source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }

}
