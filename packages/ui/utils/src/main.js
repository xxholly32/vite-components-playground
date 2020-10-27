import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import ui from "../packages";
import ui from "../lib/index.esm";
import "../lib/index.css";
import "vite-plugin-vuedoc/style.css";

import "./assets/style/main.css";

createApp(App)
  .use(ui)
  .use(router)
  .mount("#app");
