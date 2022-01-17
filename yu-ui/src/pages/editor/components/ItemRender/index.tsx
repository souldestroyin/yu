import { defineComponent, ref } from "vue";
import Node from "@/models/Node";
import Editor from "@/models/Editor";
import Draggable from "@/pages/Editor/components/Draggable";
import { EditorEvents } from "../../../../types/editor.types";

const ItemRenderForDraggable = defineComponent({
  props: {
    node: {
      type: Node,
      required: true,
    },
    editor: {
      type: Editor,
      required: true,
    },
    style: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { node, editor, style, ...others } = props;

    // function render() {
    //   return (
    //     <h2 {...others} style={{ ...style }}>
    //       这里是文本
    //     </h2>
    //   );
    // }

    return () => (
      <Draggable>
        <h2 {...others} style={{ ...style }}>
          这里是文本
        </h2>
      </Draggable>
    );
  },
});

export const ItemRender = defineComponent({
  name: "ItemRender",
  props: {
    node: {
      type: Node,
      required: true,
    },
    editor: {
      type: Editor,
      required: true,
    },
  },
  setup(props) {
    const ver = ref(0);

    props.node.on(EditorEvents.NodeChildrenUpdated).subscribe(() => {
      console.log("NodeChildrenUpdated");

      ver.value++;
    });
    return () => {
      switch (props.node.getType()) {
        case "root":
          const children = props.node.getChildren();
          console.log("children", children);

          return (
            <div key={ver.value}>
              {children.map((node) => {
                return (
                  <ItemRender
                    style={{
                      width: node.getW() + "px",
                      height: node.getH() + "px",
                    }}
                    node={node}
                    editor={props.editor}
                  />
                );
              })}
            </div>
          );

        case "text":
          return (
            <ItemRenderForDraggable
              editor={props.editor}
              node={props.node}
              key={ver.value}
            />
          );
      }
    };
  },
});
