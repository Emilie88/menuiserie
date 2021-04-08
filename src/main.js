import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import i18n from "./i18n";

import "./plugins";
import "./components";

import LightGallery from "vue-light-gallery";
import moment from "moment";

Vue.prototype.moment = moment;
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
