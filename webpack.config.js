const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development'

  console.log(`production? -> ${!isDevelopment}`)

  return [
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
            use: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      }
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
                    sourceMap: isDevelopment,
                    importLoaders: 2
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    sourceMap: isDevelopment,
                    plugins: isDevelopment
                      ? [
                          require('autoprefixer')({
                            grid: true
                          })
                        ]
                      : [
                          require('autoprefixer')({
                            grid: true
                          }),
                          require('csswring')
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
}
