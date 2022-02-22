import YuButton from "../Button.vue";
import { mount } from "@vue/test-utils";

it("content", () => {
  const Comp = {
    template: `
            <div>
            <YuButton>yyyyy</YuButton>
            </div>
        `,
  };

  const wrapper = mount(Comp, {
    global: {
      components: {
        YuButton,
      },
    },
  });

  expect(wrapper.findComponent({ name: "YuButton" }).text()).toContain("yyyyy");
});
