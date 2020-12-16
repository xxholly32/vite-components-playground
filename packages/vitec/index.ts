import { App } from "vue";
import Button from "../ui/Button/Button.vue";

export default (app: App): void => {
  app.component(Button.name, Button);
};
