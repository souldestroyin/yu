import { defineComponent } from "vue";
export default defineComponent({
  name: "Env",
  setup(props) {
    return () => (
      <ElCard>
        <template id="header"></template>
      </ElCard>
    );
  },
});
