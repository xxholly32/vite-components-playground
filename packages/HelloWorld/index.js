import HelloWorld from "./HelloWorld.vue";

const install = function (Vue, opts = {}) {
  Vue.component(HelloWorld.name, HelloWorld);
};

export default { install, HelloWorld };
