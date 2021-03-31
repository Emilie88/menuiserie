module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "fr",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  devServer: {
    proxy: "https://localhost:8000/",
  },
};
