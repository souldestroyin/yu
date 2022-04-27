import { defineComponent, PropType } from "vue";
import { ElButton } from "element-plus";
export default defineComponent({
  name: "AddSeller",
  props: {
    handleClickSubmitBtn: {
      type: Function as PropType<(evt: MouseEvent) => any>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div>
        <p>请确认以下迁移工作是否准备完毕</p>
        <p>1.是否增加了相关字段</p>
        <p>2.是否执行了相关sql</p>

        <footer>
          <ElButton>取消</ElButton>
          <ElButton onClick={props.handleClickSubmitBtn}>确认</ElButton>
        </footer>
      </div>
    );
  },
});
