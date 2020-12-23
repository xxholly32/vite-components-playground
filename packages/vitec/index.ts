import { App } from "vue";
import Button from "../ui/Button/Button.vue";
import { VitecOptions } from "@vitec/utils";

export default (app: App, option: VitecOptions): void => {
  app.config.globalProperties.$vitec = option;

  app.component(Button.name, Button);
};
