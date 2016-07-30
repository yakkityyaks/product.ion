var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/client/production'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel?presets[]=es2015&presets[]=react'],
      include: path.join(__dirname, 'app/client')
    },
    // CSS
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'app/client/'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};
