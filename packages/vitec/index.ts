import { App } from "vue";
import Button from "../ui/Button/Button.vue";


export default (app: App, option: VitecOptions): void => {
  app.config.globalProperties.$vitec = option;

  app.component(Button.name, Button);
};
