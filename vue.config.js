module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  },
  devServer: {
    port: 1101,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/dev-api": {
        target: "http://1.1.1", // 跨域地址
        chageOrigin: true, //是否跨域
        secure: true //是否使用https
      }
    }
  }
};
