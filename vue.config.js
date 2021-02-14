module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "fr",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
  devServer: {
    proxy: "https://127.0.0.1:8000/",
  },
};
