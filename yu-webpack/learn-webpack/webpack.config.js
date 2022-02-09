const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'main.js'
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          path.resolve(__dirname, './my-loader/style-loader.js'),
          path.resolve(__dirname, './my-loader/css-loader.js')
        ]
      }
    ]
  }
}