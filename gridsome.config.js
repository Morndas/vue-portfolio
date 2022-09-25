// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Sébastien Seigneur',
  siteDescription: 'Site web de Sébastien Seigneur (meta temporaire)',
  plugins: [],
  css: {
    loaderOptions: {
      scss: {
        additionalData : `
          @import "./src/assets/style/_variables.scss";
        `
      }
    }
  }
}
