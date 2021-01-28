import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import i18n from "./i18n";

import "./plugins/vee-validate";
import "./plugins/axios";
import LightGallery from "vue-light-gallery";
Vue.use(LightGallery);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  LightGallery,
  render: (h) => h(App),
}).$mount("#app");
