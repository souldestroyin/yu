import { defineComponent } from "vue";
export default defineComponent({
  setup(props, ctx) {
    const vNode = ctx.slots.default!()[0];

    console.log(vNode);

    return vNode;
  },
});
