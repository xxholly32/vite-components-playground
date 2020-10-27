import HelloWorld from "./components/HelloWorld/HelloWorld.vue";
const components = [HelloWorld];

const install = function (Vue, opts = {}) {
  if (Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  }

  return components;
};

export default { install };
