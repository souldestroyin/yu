import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

import LoginRoutes from '@/modules/login/router'
import ReleaseRoutes from '@/modules/release/router'


const routes: Array<RouteRecordRaw> = [
  ...LoginRoutes,
  ...ReleaseRoutes,

  {
    path: "/",
    name: "Home",
    component: LoginRoutes,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
