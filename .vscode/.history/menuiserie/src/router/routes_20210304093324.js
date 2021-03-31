function lazyLoading(view) {
  return async () => await import(`@/views/${view}.vue`);
}

export default [
  // {
  //   path: "/",
  //   component: lazyLoading("EmptyLayout"),
  // children: [
  //   {
  //     path: "",
  //     component: lazyLoading("user/Layout"),
  // children: [
  //   {
  //     name: 'SignInForm',
  //     path: 'sign-in',
  //     component: lazyLoading('public-pages/SignInForm'),
  //   },
  //     {
  //       name: 'SignUpForm',
  //       path: 'sign-up',
  //       component: lazyLoading('public-pages/SignUpForm'),
  //     },
  //     {
  //       path: '/',
  //       redirect: {
  //         name: 'ShoppingPage',
  //       },
  //     },
  //   ],
  //   },
  // ],
  // redirect: {
  //   name: 'SignInForm',
  // },
  // },
  {
    path: "",
    // meta: { auth: true },
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
  // ],
  // },
];
