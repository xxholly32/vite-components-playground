import { getCurrentInstance } from "vue";
import { VitecOptions } from "./common";

export function useGlobalConfig(name = "$vitec"): VitecOptions {
  const vm: any = getCurrentInstance();
  if (name in vm.proxy) {
    return vm.proxy[name];
  }
  return {};
}
