import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import i18n from "./i18n";
import DaySpanVuetify from "dayspan-vuetify";

import "./plugins";
import "./components";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import LightGallery from "vue-light-gallery";
Vue.use(LightGallery);
Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => "#1976d2",
  },
});

Vue.config.productionTip = false;

// Vue.prototype.$http.interceptors.request.use((config) => {
//   store.commit("setLoading", true);

//   config += `/${router.currentRoute.params}`;

// if (process.env.NODE_ENV === "development") {
// console.trace("[Axios request]", config);
// }

//   return config;
// });

new Vue({
  router,
  store,
  vuetify,
  i18n,
  LightGallery,
  render: (h) => h(App),
}).$mount("#app");
