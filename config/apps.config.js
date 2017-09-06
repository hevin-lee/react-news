/**
 * Created by Hevin on 17/6/8.
 */
var path = require('path');

module.exports = {
  // 基本的应用配置信息
  __DEV__ : (process.env.NODE_ENV || "dev") === "dev",
  assetsPath : function (_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'prod'
      ? module.exports.build.assetsSubDirectory
      : module.exports.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
  },
  apps: [
   
  ],
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/', //cdn域名地址
  },
  dev: {
    port: 8086,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
  },

  // 用于服务端渲染的Server路径
  ssrServer: {
    serverEntrySrc: "./src/ssr_server.js"
  },

  // 依赖项配置
  proxy: {
    //后端服务器地址 http://your.backend/
    "/api/*": "http://localhost:3001"
  },

  // 后端 api 配置，这样配置可以避免将测试服务器端口暴露出去
  api: {
    dev: {},
    prod: {}
  }
};
