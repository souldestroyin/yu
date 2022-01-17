import { defineComponent } from "vue";
export default defineComponent({
  name: "Draggable",
  setup(props, ctx) {
    const vNode = ctx.slots.default!()[0];

    console.log(vNode);

    return vNode;
  },
});
