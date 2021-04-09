import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

// Get the locale from the local storage
let userLocale = localStorage.getItem("userLocale");
if (!userLocale) {
  userLocale =
    navigator.language.slice(0, 2) || navigator.browserLanguage.slice(0, 2);
}

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i,
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const i18n = new VueI18n({
  locale: userLocale,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});
//
export default i18n;
