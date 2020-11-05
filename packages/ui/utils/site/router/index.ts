import { createRouter, createWebHashHistory } from "vue-router";
import DocMain from "../components/DocMain.vue";
import demos from "./demo-routes";

export default createRouter({
  history: createWebHashHistory(),
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
