import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/user/Profile.vue";
import ChangePassword from "../components/users/ChangePassword.vue";
import ProfileMain from "../components/users/ProfileMain.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/profile",
    component: Profile,
    children: [
      {
        path: "",
        component: ProfileMain,
      },
      {
        path: "change-password",
        component: ChangePassword,
      },
    ],
  },
  {
    path: "/screenA",
    name: "screenA",
    component: () => import("../views/admin/screenA.vue"),
    meta: {
      AdminRestrict: true,
    },
  },
  {
    path: "/screenB",
    name: "screenB",
    component: () => import("../views/user/screenB.vue"),
    meta: {
      UserRestrict: true,
    },
  },
  {
    path: "/404",
    name: "Page404",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.AdminRestrict)) {
    if (store.getters.role === 2) {
      next();
    } else {
      next({ path: "/404" });
    }
  }
  next();
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.UserRestrict)) {
    if (store.getters.role === 1 || store.getters.role === 2) {
      next();
    } else {
      next({ path: "/404" });
    }
  }
  next();
});

export default router;
