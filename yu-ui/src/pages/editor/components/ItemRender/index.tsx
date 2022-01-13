import { defineComponent } from "vue";
import Node from "@/models/Node";

const ItemRenderForDraggable = defineComponent({
  setup() {
    return ({ node }: {node: Node}) => {
      switch 
    }
  }
})

export default defineComponent({
  setup({ node }: {node: Node}) {
    return () => {
      switch (node.getType()) {
        case 'text':
          return 
      }
    };
  },
});
