import { App } from "vue";
import Button from "./Button.vue";

export default (app: App): void => {
  app.component(Button.name, Button);
};
