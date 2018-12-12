//  var CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  baseUrl: './',
  devServer: {
    proxy: {
      '/': {
        target: "",
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/": "/"
        }
      },
    }
  },

  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      "element-ui": "ELEMENT",
      "axios": "axios",
    },
  },
  productionSourceMap: false,
}