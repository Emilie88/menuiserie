module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    // i18n: {
    //   locale: "fr",
    //   fallbackLocale: "fr",
    //   localeDir: "locales",
    //   enableInSFC: true,
    // },
  },
  devServer: {
    proxy: "https://localhost:8000/",
  },
};