import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// dev mode
import ui from "../packages/vitec";
import "../packages/vitec/style/index.css";

// build mode
// import ui from "../lib/vitec";
// import "../lib/vitec/style/index.css";

// tailwindcsss
import "./assets/style/main.css";

createApp(App)
  .use(ui, {
    // componentSize: "large"
  })
  .use(router)
  .mount("#app");
