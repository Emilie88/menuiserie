import Vue from "vue";

// Lib imports
import axios from "axios";

Vue.prototype.$http = axios;

// Vue.prototype.$http.defaults.baseURL = appConfig.apiUrl;

if (localStorage.getItem("sessionToken")) {
  Vue.prototype.$http.defaults.headers.common.Authorization = localStorage.getItem(
    "sessionToken"
  );
}
