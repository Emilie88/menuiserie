import Vue from "vue";

// Lib imports
import axios from "axios";

Vue.prototype.$http = axios;

// Vue.prototype.$http.defaults.baseURL = "https://127.0.0.1:8000/api";
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

// if (localStorage.getItem("sessionToken")) {
//   Vue.prototype.$http.defaults.headers.common.Authorization = localStorage.getItem(
//     "sessionToken"
//   );
// }
