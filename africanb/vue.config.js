const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    // Supprimez l'option 'public'
    allowedHosts: ['africanweb-26408e5071aa.herokuapp.com'], // Ajoutez le domaine Heroku à la liste des hosts autorisés
  },,
  transpileDependencies: [
    'vuetify'
  ],
})
