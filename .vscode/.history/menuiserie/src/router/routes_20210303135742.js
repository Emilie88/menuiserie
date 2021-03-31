function lazyLoading(view) {
  return async () => await import(`@/views/${view}.vue`);
}

export default [
  {
    path: "/",
    component: lazyLoading("EmptyLayout"),
    children: [
      {
        path: "",
        component: lazyLoading("user/Layout"),
        children: [
          {
            name: "Login",
            path: "sign-in",
            component: lazyLoading("user/Login"),
          },
          {
            name: "Register",
            path: "sign-up",
            component: lazyLoading("user/Register"),
          },

          //   {
          //     path: "/",
          //     redirect: {
          //       name: "ShoppingPage",
          //     },
          //   },
        ],
      },
    ],
    redirect: {
      name: "Login",
    },
  },
  {
    path: "/",
    component: lazyLoading("back-office/Layout"),
    children: [
      {
        path: "",
        component: lazyLoading("back-office/Layout"),
        children: [
          {
            name: "ShoppingPage",
            path: "/",
            component: lazyLoading("back-office/ShoppingPage"),
          },
          {
            name: "ProductDetails",
            path: "/product-details/:reference",
            component: lazyLoading("back-office/ProductDetails"),
          },
          {
            name: "Cart",
            path: "/cart",
            component: lazyLoading("back-office/Cart"),
          },
          {
            name: "ManageProducts",
            path: "/manage-products",
            component: lazyLoading("back-office/seller/ManageProducts"),
          },
        ],
      },
    ],
  },
];
