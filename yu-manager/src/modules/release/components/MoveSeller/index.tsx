import { defineComponent, PropType } from "vue";
import { ElButton, ElSelect, ElOption } from "element-plus";
import { SellerType } from "@/objects/seller";
export default defineComponent({
  name: "MoveSeller",
  props: {
    //保存事件
    done: {
      type: Function as PropType<(evt: MouseEvent) => any>,
      required: true,
    },
    close: {
      type: Function as PropType<(evt: MouseEvent) => any>,
      required: true,
    },
    // 选中的卖家
    sellerList: {
      type: Array as PropType<Array<SellerType>>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div>
        <div>
          迁移的卖家：
          {props.sellerList.map((seller) => seller.sid).join(" 和 ")}
        </div>
        <p>请确认以下迁移工作是否准备完毕：</p>
        <p>1.是否增加了相关字段</p>
        <p>2.是否执行了相关sql</p>

        <footer>
          <ElButton onClick={props.close}>取消</ElButton>
          <ElButton onClick={props.done} type="primary">
            确认
          </ElButton>
        </footer>
      </div>
    );
  },
});
