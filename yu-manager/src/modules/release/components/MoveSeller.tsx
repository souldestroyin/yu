import { defineComponent, PropType } from "vue";
import { ElButton, ElSelect, ElOption } from "element-plus";
import { Env } from "../../../objects/env";
export default defineComponent({
  name: "MoveSeller",
  props: {
    //保存事件
    handleClickSubmitBtn: {
      type: Function as PropType<(evt: MouseEvent) => any>,
      required: true,
    },
    // 选中的卖家
    sellerList: {
      type: Array as PropType<Array<Env>>,
      required: true,
    },
    // 所有环境
    envList: {
      type: Array as PropType<Array<Env>>,
      required: true,
    },
    fromEnv: {
      type: Env,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div>
        <p>请确认以下迁移工作是否准备完毕</p>
        <p>1.是否增加了相关字段</p>
        <p>2.是否执行了相关sql</p>

        <ElSelect>
          {props.envList.map((env) => (
            <ElOption value={env.envId} label={env.envName}></ElOption>
          ))}
        </ElSelect>

        <footer>
          <ElButton>取消</ElButton>
          <ElButton onClick={props.handleClickSubmitBtn}>确认</ElButton>
        </footer>
      </div>
    );
  },
});
