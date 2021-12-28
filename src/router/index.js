import Vue from "vue";
import VueRouter from "vue-router";
import StaticExample from "../views/StaticExample.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: StaticExample,
  },
  {
    path: "/static",
    name: "StaticExample",
    component: StaticExample,
  },
  {
    path: "/dynamic",
    name: "Dynamic Example",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "DynamicExample" */ "../views/DynamicExample.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
