const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackSetting = require('./webpack.setting');
const bundleCSS = new ExtractTextPlugin({ filename: 'assets/dist/stylesheets/[name].bundle.css', allChunks: true });

module.exports = {
  context: path.resolve(__dirname, './htdocs/assets/src/javascripts'),
  entry: {
    app: './app.js',
  },
  resolve: {
    modules: [
      __dirname + '/node_modules'
    ],
    alias: {
      src: __dirname + '/htdocs/assets/src/javascripts',
    }
  },
  output: {
    path: __dirname + '/htdocs/',
    publicPath: '/',
    filename: 'assets/dist/javascripts/[name].bundle.js'
  },
  devServer: {
    contentBase: 'htdocs',
    inline: true
    // hot: true
  },
  devtool: process.env.NODE_ENV === 'production' ? '': 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: [
            [ 'es2015', { modules: false } ]
          ]}
        }]
      },
      {
        test: /\.(sass|scss)$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: process.env.NODE_ENV === 'production' ? webpackSetting.css.production: webpackSetting.css.develop
        }),
      }
    ]
  },
  plugins: [
    bundleCSS
  ]
};