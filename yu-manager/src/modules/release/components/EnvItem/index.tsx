// tools
import { defineComponent, ref, PropType, watch } from "vue";

//components
import {
  ElButton,
  ElCard,
  ElTable,
  ElTableColumn,
  ElDropdown,
} from "element-plus";
import AddSeller from "../AddSeller";

// models
import { Env } from "@/objects/env";
import { SellerType } from "@/objects/seller";

// styles
import classes from "./style.module.scss";
import { EditPen } from "@element-plus/icons-vue";
import { useDialog } from "@/hooks/useDialog";

export default defineComponent({
  name: "EnvItem",
  props: {
    env: {
      type: Env,
      required: true,
    },
    envList: {
      type: Array as PropType<Array<Env>>,
      required: true,
    },
  },
  setup(props) {
    const slots = {
      header: () => (
        <div>
          {props.env.envName}
          --版本号
          {props.env.version}
          <ElButton type="text" icon={EditPen}></ElButton>
        </div>
      ),
    };

    console.log(6666);

    watch(
      () => props,
      (val) => {
        console.log(val);
      }
    );

    const res = ref();
    const [open, close, loading] = useDialog();

    const handleClickAddBtn = () => {
      open({
        title: "test",
        component: () => <AddSeller handleClickSubmitBtn={close}></AddSeller>,
      });
      loading.value = true;
    };

    const selection = ref<Array<SellerType>>([]);
    const handleSelectionChange = (val: Array<SellerType>) => {
      selection.value = val;
    };

    const handleClickMoveBtn = (env: Env) => {
      console.log(env);
    };

    const restEnvList = props.envList.filter((env) => env !== props.env);

    console.log("restEnvList", restEnvList);

    return () => (
      <ElCard
        ref={res}
        class={classes.container}
        v-slots={slots}
        shadow="never"
      >
        <div class={classes.actionLine}>
          <ElDropdown>
            {{
              default: () => (
                <ElButton type="primary" plain>
                  迁移卖家至新环境
                </ElButton>
              ),
              dropdown: () => (
                <el-dropdown-menu>
                  {restEnvList.map((env) => (
                    <el-dropdown-item onClick={() => handleClickMoveBtn(env)}>
                      {env.envName}
                    </el-dropdown-item>
                  ))}
                </el-dropdown-menu>
              ),
            }}
          </ElDropdown>

          <ElButton onClick={handleClickAddBtn}>新增</ElButton>
          <ElButton type="danger" plain>
            删除
          </ElButton>
        </div>

        <ElTable
          data={props.env.sidList}
          onSelection-change={handleSelectionChange}
        >
          <ElTableColumn type="selection" width="40"></ElTableColumn>
          <ElTableColumn label="卖家名称" prop="sid" sortable></ElTableColumn>
          <ElTableColumn
            label="迁移时间"
            prop="operateTime"
            sortable
          ></ElTableColumn>
          <ElTableColumn
            label="迁移人"
            prop="operator"
            sortable
          ></ElTableColumn>
        </ElTable>
      </ElCard>
    );
  },
});
