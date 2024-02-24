const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    allowedHosts: ['africanweb-26408e5071aa.herokuapp.com'], 
  },
  transpileDependencies: [
    'vuetify'
  ],
})
