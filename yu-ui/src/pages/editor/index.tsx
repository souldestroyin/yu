import { defineComponent } from "vue";
import Panel from "./components/Panel";
import ItemList from "./components/ItemList";
import cssObj from "./style.module.scss";
import Editor from "@/models/Editor";

export default defineComponent({
  setup() {
    const editor = new Editor();
    return () => (
      <>
        <ItemList class={cssObj.left} editor={editor} />
        <Panel class={cssObj.right} editor={editor} />
      </>
    );
  },
});
