const path = require('path');

const sassOptions = {
  includePaths: [
    __dirname + '/node_modules',
  ],
  sourceMap: true
};

module.exports = {
  css: {
    develop: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          includePaths: [
            __dirname + '/node_modules',
          ],
          sourceMap: true
        }
      }
    ],
    production: [
      {
        loader: 'css-loader',
        options: {}
      },
      'postcss-loader',
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