import Vue from "vue";

import { extend,configure, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate';

// Rules
import {
  confirmed,
  digits,
  email,
  max,
  max_value,
  min,
  min_value,
  regex,
  required,
} from "vee-validate/dist/rules";

// i18n
import i18n from "@/i18n";

configure({
  defaultMessage: (_field, values) => {
    return i18n.t(`validation.${values._rule_}`, values);
  },
});

// Install rules and messages
extend("confirmed", confirmed);
extend("digits", digits);
extend("email", email);
extend("max", max);
extend("max_value", max_value);
extend("min", min);
extend("min_value", min_value);
extend("regex", regex);
extend("required", required);

setInteractionMode("eager");



  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })


Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
