import { defineComponent } from "vue";
import Node from "@/models/Node";

export default defineComponent({
  setup({ node }) {
    return () => {
      switch (node.getType()) {
      }
    };
  },
});
