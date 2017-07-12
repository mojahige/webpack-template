module.exports = {
  css: {
    develop: [
      { loader: 'css-loader', options: { sourceMap: true } },
      { loader: 'postcss-loader', options: { sourceMap: true } },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [ __dirname + '/node_modules', ],
          sourceMap: true
        }
      }
    ],
    production: [
      { loader: 'css-loader', options: {} },
      { loader: 'postcss-loader', options: {} },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [
            __dirname + '/node_modules',
          ]
        }
      }
    ]
  }
};