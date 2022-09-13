const path = require('path');
const common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge(common,{
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  } 
});