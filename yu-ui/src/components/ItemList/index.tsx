import { defineComponent } from "vue";
import metas from "../../metas/index";

export default defineComponent({
  setup(props) {
    return () => (
      <div>
        {metas.map((item) => {
          <div>item.title</div>;
        })}
      </div>
    );
  },
});
