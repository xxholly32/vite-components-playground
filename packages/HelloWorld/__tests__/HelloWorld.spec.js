import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import HelloWorld from "../HelloWorld.vue";

const compC = defineComponent({
  template: '<hello-world msg="message"></hello-world>',
  components: { HelloWorld },
});

describe("element", () => {
  it("find h1", () => {
    const wrapper = mount(compC);

    expect(wrapper.element.querySelector('h1').innerHTML).toContain('message')
  });
  it("snppshot match", () => {
    const wrapper = mount(compC);

    expect(wrapper.element.innerHTML).toMatchSnapshot()
  });
});
