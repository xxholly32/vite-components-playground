import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// dev mode
import ui from "../packages/vitec";
import "../packages/theme/index.css";

// build mode
// import ui from "../packages/Button/lib/index";
// import "../packages/Button/lib/index.css";

import "./assets/style/main.css";

createApp(App).use(ui).use(router).mount("#app");
