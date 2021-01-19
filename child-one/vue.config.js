const { name } = require('./package');
module.exports = {
  devServer: {
    port: 1111,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 解决子项目字体文件加载失败的问题(由于qiankun 将子项目的 <link> 改成 <style> 执行导致的),在vue-cli4.x中自动处理了
  chainWebpack: (config) => {
    config.module
      .rule('fonts')
      .test(/.(ttf|otf|eot|woff|woff2)$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => ({ name: '/fonts/[name].[hash:8].[ext]' }))
      .end()
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',// 把子应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
}