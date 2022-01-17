import { defineComponent } from "vue";
export default defineComponent({
  name: "Draggable",
  setup(props, ctx) {},

  render() {
    const vNode = this.$slots.default!()[0];

    console.log(vNode);

    return vNode;
  },
});
