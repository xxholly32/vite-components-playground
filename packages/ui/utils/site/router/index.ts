import { createRouter, createWebHistory } from "vue-router";
import DocMain from "../components/DocMain.vue";
import demos from "./demo-routes";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/doc/Intro",
    },
    {
      path: "/doc",
      component: DocMain,
      children: demos,
    },
  ],
});
