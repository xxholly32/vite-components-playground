import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// dev mode
import ui from "../packages/vitec";
import "../packages/vitec/style/index.css";

// build mode
// import ui from "../packages/vitec/lib";
// import "../packages/vitec/lib/index.css";

import "./assets/style/main.css";

createApp(App)
  .use(ui, {
    // componentSize: "large"
  })
  .use(router)
  .mount("#app");
