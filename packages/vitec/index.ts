import { App } from "vue";
// import Button from "@vitec/button";
import Button from "@vitec/button";
import { VitecOptions } from "@vitec/utils";

export default (app: App, options: VitecOptions): void => {
  const optionsResolver: VitecOptions = Object.assign(
    {
      componentSize: "default",
    },
    options
  );

  app.config.globalProperties.$vitec = optionsResolver;

  app.component(`vc-button`, Button);
};
