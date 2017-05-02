var path = require('path')

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        loader: 'babel-loader'
      }
    ]
  }
}
