import { defineComponent } from "vue";
import Editor from "./pages/editor/index";

export default defineComponent({
  setup() {
    return () => <Editor />;
  },
});
