function lazyLoading(view) {
  return async () => await import(`@/views/${view}.vue`);
}
const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem("token")) {
    next();
  } else {
    next("/login");
  }
};

export default [
  {
    path: "/",
    component: lazyLoading("EmptyLayout"),
    children: [
      {
        path: "",
        component: lazyLoading("visiteur/Layout"),
        children: [
          {
            name: "Home",
            path: "",
            component: lazyLoading("visiteur/Home"),
          },
          {
            name: "Realisations",
            path: "realisations",
            component: lazyLoading("visiteur/Realisations"),
          },
          {
            name: "Devis",
            path: "devis",
            component: lazyLoading("visiteur/Devis"),
          },
          {
            name: "Contact",
            path: "contact",
            component: lazyLoading("visiteur/Contact"),
          },

          {
            name: "Login",
            path: "login",
            component: lazyLoading("visiteur/Login"),
          },
          {
            name: "Register",
            path: "register",
            component: lazyLoading("visiteur/Register"),
          },
          //   {
          //     path: "",
          //     redirect: {
          //       name: "DashboardClient",
          //     },
          //   },
        ],
      },
      {
        path: "",
        beforeEnter: ifAuthenticated,
        component: lazyLoading("user/Layout"),
        children: [
          {
            name: "DashboardClient",
            path: "dashboardClient",
            component: lazyLoading("user/DashboardClient"),
          },

          {
            name: "Testimonials",
            path: "testimonials",
            component: lazyLoading("user/Testimonials"),
          },
          {
            name: "ProfileUser",
            path: "profileSettings",
            component: lazyLoading("user/ProfileSettings"),
          },
        ],
      },
      {
        path: "",
        beforeEnter: ifAuthenticated,
        component: lazyLoading("admin/Layout"),
        children: [
          {
            name: "DashboardAdmin",
            path: "dashboardAdmin",
            component: lazyLoading("admin/DashboardAdmin"),
          },
          {
            name: "Realisation",
            path: "realisation",
            component: lazyLoading("admin/Realisation"),
          },
          {
            name: "Messages",
            path: "messages",
            component: lazyLoading("admin/Messages"),
          },
          {
            name: "ProfileSettingsAdmin",
            path: "profileAdmin",
            component: lazyLoading("admin/ProfileSettingsAdmin"),
          },
        ],
      },
    ],
  },
];
