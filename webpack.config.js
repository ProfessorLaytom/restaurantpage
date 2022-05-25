const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
      new HtmlWebpackPlugin({
          title:'The Den'
      })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};