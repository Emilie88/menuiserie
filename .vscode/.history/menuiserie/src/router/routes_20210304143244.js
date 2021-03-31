function lazyLoading(view) {
  return async () => await import(`@/views/${view}.vue`);
}

export default [
  // {
  //   path: "",
  //   component: lazyLoading("user/Layout"),
  //   children: [
  //     {
  //       name: "DashboardClient",
  //       path: "dashboard",
  //       component: lazyLoading("user/DashboardClient"),
  //     },
  //   ],
  // },
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
    ],
  },
];
