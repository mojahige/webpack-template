const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'
const buildMode = isDevelopment ? 'development' : 'production'

console.log(`mode: ${buildMode}`)

module.exports = [
  {
    entry: {
      app: './htdocs/assets/javascripts/src/app.js'
    },
    output: {
      path: path.resolve(__dirname, 'htdocs/assets/javascripts'),
      publicPath: '/assets/javascripts',
      filename: '[name].js'
    },
    resolve: {
      extensions: ['*', '.js'],
      modules: [__dirname + '/node_modules', 'node_modules']
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'htdocs'),
      open: true
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: 'babel-loader'
        }
      ]
    },
    optimization: !isDevelopment
      ? {
          minimizer: [
            new UglifyJSPlugin({
              uglifyOptions: { extractComments: true }
            })
          ]
        }
      : {}
  },
  {
    entry: {
      app: './htdocs/assets/stylesheets/src/app.scss'
    },
    output: {
      path: path.resolve(__dirname, 'htdocs/assets/stylesheets'),
      publicPath: '/assets/stylesheets',
      filename: '[name].css'
    },
    resolve: {
      alias: {
        javascripts: path.join(__dirname, 'htdocs/assets/javascripts/src')
      },
      modules: [__dirname + '/node_modules', 'node_modules']
    },
    devtool: isDevelopment ? 'source-map' : '',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  url: false,
                  minimize: !isDevelopment,
                  sourceMap: isDevelopment,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  sourceMap: isDevelopment,
                  plugins: [
                    require('autoprefixer')({
                      grid: true
                    })
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: isDevelopment
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [new ExtractTextPlugin('[name].css')]
  }
]
