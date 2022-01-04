import { defineComponent } from "vue";
export default defineComponent({
  setup({ node }) {
    return () => {
      switch (node.getType()) {
      }
    };
  },
});
