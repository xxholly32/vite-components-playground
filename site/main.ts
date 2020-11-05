import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// dev mode
import ui from "../packages/HelloWorld";

// build mode
// import ui from "../packages/HelloWorld/lib/index";
// import "../packages/HelloWorld/lib/index.css";

import "vite-plugin-vuedoc/style.css";
import "./assets/style/main.css";

createApp(App).use(ui).use(router).mount("#app");
