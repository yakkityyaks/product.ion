// var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
//COPIED FROM NANBOARD. MODIFY ALL
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'public');

var config ={
  entry: APP_DIR + '/components/app.jsx',
  module : {
  loaders : [
    {
      test : /\.jsx?/,
      include : APP_DIR,
      loader : 'babel'
    }
  ]
},
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
