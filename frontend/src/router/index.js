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
    component: () =>
      import(
        /* webpackChunkName: "DynamicExample" */ "../views/DynamicExample.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
