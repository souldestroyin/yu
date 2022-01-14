import { defineComponent } from "vue";
import metas from "@/metas/index";
import Editor from "@/models/Editor";
import { UnWrapped } from "@/types/util.types";
import { Actions } from "@/types/editor.types";

export default defineComponent({
  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },
  setup(props) {
    // 拖拽开始：创建组件开始
    function handleDragStart(meta: UnWrapped<typeof metas>) {
      props.editor.dispatch(Actions.StartAddComponent, meta);
    }
    return () => (
      <div>
        {metas.map((item) => (
          <div draggable={true} onDragstart={(e) => handleDragStart(item)}>
            {item.title}
          </div>
        ))}
      </div>
    );
  },
});
