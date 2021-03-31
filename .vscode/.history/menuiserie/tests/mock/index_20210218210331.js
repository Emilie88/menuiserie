import Vue from "vue";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(Vue.prototype.$http, {
  delayResponse: 10, // ms
});

mock
  .onGet("http://127.0.0.1:8000/api/comments")
  .reply(200, require("./comments/all.json"));
