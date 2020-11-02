import { App } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default (app: App): void => {
  app.component(HelloWorld.name, HelloWorld);
};
