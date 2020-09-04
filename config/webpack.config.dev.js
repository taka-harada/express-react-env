const { merge } = require('webpack-merge');
const path = require('path');
const webpackConfig = require('./webpack.config.js');

module.exports = merge(webpackConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../src/client'),
    historyApiFallback: true,
    inline: true,
    open: true,
    //hots: 'localhost',
    host: "0.0.0.0", //同一ネットワーク内の別デバイスからのアクセスをON
    useLocalIp: true, //自分のローカルipでアクセスする
    port: 8084,
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
    proxy: {
      '/api/**': {
        target: 'http://0.0.0.0:3000',
        secure: false,
        logLevel: 'debug'
      }
    },
  }
})