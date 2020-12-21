import { getCurrentInstance } from "vue";

export function useGlobalConfig(name: string) {
  const vm: any = getCurrentInstance();
  if (name in vm.proxy) {
    return vm.proxy[name];
  }
  return {};
}
