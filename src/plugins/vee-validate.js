import Vue from "vue";
import {
  extend,
  setInteractionMode,
  ValidationProvider,
  ValidationObserver,
} from "vee-validate";

// Rules
import {
  confirmed,
  digits,
  email,
  required,
  regex,
} from "vee-validate/dist/rules";

import i18n from "@/i18n";

// Install rules and messages
extend("confirmed", confirmed);
extend("digits", digits);
extend("email", {
  ...email,
  message: i18n.t("mailRule"),
});
extend("regex", regex);
extend("required", {
  ...required,
  message: i18n.t("requiredField"),
});

setInteractionMode("eager");

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
