// Lib imports
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './lang';

// #region DevExtreme
// Devextreme localization's tools import
import { locale, loadMessages } from 'devextreme/localization';
import config from 'devextreme/core/config';

// #endregion DevExtreme

// #region dictionnaries
// DevExtreme
import frDevExtreme from 'devextreme/localization/messages/fr.json';
import itDevExtreme from 'devextreme/localization/messages/it.json';
import esDevExtreme from 'devextreme/localization/messages/es.json';

// Vee-validate
import enVeeValidate from 'vee-validate/dist/locale/en.json';
import frVeeValidate from 'vee-validate/dist/locale/fr.json';
import itVeeValidate from 'vee-validate/dist/locale/it.json';
import esVeeValidate from 'vee-validate/dist/locale/es.json';
// #endregion dictionnaries

import constants from '@/constants';

Vue.use(VueI18n);

// Get the locale from the local storage
let userLocale = localStorage.getItem('userLocale');
if (!userLocale) {
  userLocale = navigator.language.slice(0, 2);
}

// Setting up Vue i18n currency format
const numberFormats = {};

constants.languages.forEach(lang => {
  numberFormats[`${lang}`] = {
    currency: {
      style: 'currency',
      currency: localStorage.getItem('partnerCurrency'),
    },
  };
});

// Fallback
if (-1 === constants.languages.indexOf(userLocale)) {
  userLocale = constants.languages[0];
}

// DevExtreme load i18n
loadMessages(frDevExtreme);
loadMessages(itDevExtreme);
loadMessages(esDevExtreme);

locale(userLocale);
config({
  defaultCurrency: localStorage.getItem('partnerCurrency'),
});

// VeeValidate load i18n
messages['en'].validation = enVeeValidate.messages;
messages['fr'].validation = frVeeValidate.messages;
messages['it'].validation = itVeeValidate.messages;
messages['es'].validation = esVeeValidate.messages;

const i18n = new VueI18n({
  locale: userLocale,
  fallbackLocale: constants.languages[0],
  messages,
  numberFormats,
});

export default i18n;
