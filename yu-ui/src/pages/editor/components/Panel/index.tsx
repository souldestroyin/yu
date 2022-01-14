import Editor from "@/models/Editor";
import { Actions } from "@/types/editor.types";
import { defineComponent, ref, toRefs } from "vue";
import { ItemRender } from "../ItemRender/index";

export default defineComponent({
  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div
        onDragover={(e) => {
          e.preventDefault();
          props.editor.dispatch(Actions.EvtDrag, [e.clientX, e.clientY]);
        }}
        onDrop={(e) => {
          e.preventDefault();
          props.editor.dispatch(Actions.EvtDrop);
        }}
      >
        <ItemRender node={props.editor.getRoot()} editor={props.editor} />
      </div>
    );
  },
});
