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

// Install rules and messages
extend("confirmed", confirmed);
extend("digits", digits);
extend("email", {
  ...email,
  message: "Email must be valid",
});
extend("regex", regex);
extend("required", {
  ...required,
  message: "This field is required",
});

setInteractionMode("eager");

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
