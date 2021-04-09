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

Vue.prototype.$http.interceptors.request.use((config) => {
  store.commit("setLoading", true);

  config.baseURL += `/${router.currentRoute.params}`;

  if (process.env.NODE_ENV === "development") {
    console.trace("[Axios request]", config);
  }

  return config;
});
// Intercept the response
Vue.prototype.$http.interceptors.response.use((response) => {
  if (process.env.NODE_ENV === "development") {
    console.trace("[Axios response]", response);
  }

  store.commit("setLoading", false);
  return response;
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  LightGallery,
  render: (h) => h(App),
}).$mount("#app");
