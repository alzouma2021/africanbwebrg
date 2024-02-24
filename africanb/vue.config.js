const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    public: process.env.HEROKU_APP_NAME
      ? `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`
      : 'http://localhost:8080', // Remplacez localhost:8080 par le port de développement de votre choix
  },
  transpileDependencies: [
    'vuetify'
  ],
})
