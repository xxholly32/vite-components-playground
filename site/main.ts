import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "vite-plugin-vuedoc/style.css";
import "./assets/style/main.css";

// dev mode
import ui from "../packages/vitec";
import "../packages/theme/index.css"

// build mode
// import ui from "../packages/Button/lib/index";
// import "../packages/Button/lib/index.css";

createApp(App).use(ui).use(router).mount("#app");
