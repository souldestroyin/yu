import { defineComponent } from "vue";
import Editor from "./pages/Editor/index";

export default defineComponent({
  setup() {
    return () => <Editor />;
  },
});
