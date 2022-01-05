import { defineComponent } from "vue";
import Panel from "./components/Panel";
import ItemList from "./components/ItemList";
import cssObj from "./style.module.scss";

export default defineComponent({
  setup() {
    return () => (
      <>
        <ItemList class={cssObj.left} />
        <Panel class={cssObj.right} />
      </>
    );
  },
});
