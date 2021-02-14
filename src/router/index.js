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
    path: "/devis",
    name: "Devis",
    component: () => import("../views/Devis.vue"),
  },
  {
    path: "/login-register",
    name: "LoginRegister",
    component: () => import("../views/LoginRegister.vue"),
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: () => import("../views/Testimonials.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
