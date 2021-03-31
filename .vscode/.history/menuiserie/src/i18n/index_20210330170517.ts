// Lib imports
import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "./lang";

// Vee-validate
import enVeeValidate from "vee-validate/dist/locale/en.json";
import frVeeValidate from "vee-validate/dist/locale/fr.json";
import itVeeValidate from "vee-validate/dist/locale/it.json";
import esVeeValidate from "vee-validate/dist/locale/es.json";
// #endregion dictionnaries

Vue.use(VueI18n);

// Get the locale from the local storage
// let userLocale = localStorage.getItem('userLocale');
// if (!userLocale) {
//   userLocale = navigator.language.slice(0, 2);
// }

let languages = ["en", "fr", "ro"];

// VeeValidate load i18n
messages["en"].validation = enVeeValidate.messages;
messages["fr"].validation = frVeeValidate.messages;
messages["it"].validation = itVeeValidate.messages;
messages["es"].validation = esVeeValidate.messages;

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages,
});

export default i18n;
