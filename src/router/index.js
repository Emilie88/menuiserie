import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/realisations",
    name: "Realisations",
    component: () => import("../views/Realisations.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../components/Contact.vue"),
  },
  {
    path: "/abouts",
    name: "Abouts",
    component: () => import("../views/Abouts.vue"),
  },
  {
    path: "/devis",
    name: "Devis",
    component: () => import("../views/Devis.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
