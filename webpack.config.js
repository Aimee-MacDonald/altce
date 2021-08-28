const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, 'bundles'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    }]
  },
  mode: 'development'
}