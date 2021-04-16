import Vue from "vue";

// Lib imports
import axios from "axios";

Vue.prototype.$http = axios;

// Vue.prototype.$http.defaults.baseURL = "https://127.0.0.1:8000/api";

if (localStorage.getItem("token")) {
  Vue.prototype.$http.defaults.headers.common.Authorization = localStorage.getItem(
    "token",
  );
}
