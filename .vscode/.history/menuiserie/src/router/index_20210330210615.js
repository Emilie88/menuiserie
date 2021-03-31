import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";

// Routes
import routes from "./routes";

Vue.use(VueRouter);

// Create a new router
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, _from, savedPosition) {
    return goTo(to.hash ? to.hash : savedPosition ? savedPosition.y : 0);
  },
});
// router.beforeEach((to, from, next) => {

// })

export default router;

// import Vue from "vue";
// import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/realisations",
//     name: "Realisations",
//     component: () => import("../views/Realisations.vue"),
//   },
//   {
//     path: "/contact",
//     name: "Contact",
//     component: () => import("../components/Contact.vue"),
//   },

//   {
//     path: "/devis",
//     name: "Devis",
//     component: () => import("../views/Devis.vue"),
//   },
//   {
//     path: "/login-register",
//     name: "LoginRegister",
//     component: () => import("../views/LoginRegister.vue"),
//   },
//   {
//     path: "/testimonials",
//     name: "Testimonials",
//     component: () => import("../views/Testimonials.vue"),
//   },
//   {
//     path: "/dashboardClient",
//     name: "DashboardClient",
//     component: () => import("../views/DashboardClient.vue"),
//   },
//   {
//     path: "/espace-client",
//     name: "EspaceClient",
//     component: () => import("../views/EspaceClient.vue"),
//   },
// ];

// const router = new VueRouter({
//   routes,
// });

// export default router;
