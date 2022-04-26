// tools
import { defineComponent, ref } from "vue";

//components
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElCard,
  ElTable,
  ElTableColumn,
} from "element-plus";

// models
import { Env } from "../objects/env";

// styles
import classes from "./env.module.scss";
import { EditPen } from "@element-plus/icons-vue";
import { useDialog } from "@/hooks/useDialog";

export default defineComponent({
  name: "EnvComp",
  props: {
    env: {
      type: Env,
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

    const res = ref();
    const [open, close, loading] = useDialog({
      title: "test",
      body: () => (
        <div>
          test dialog
          <ElButton
            onClick={() => {
              loading.value = !loading.value;
            }}
          >
            load
          </ElButton>
          <ElButton onClick={close}>close</ElButton>
        </div>
      ),
    });

    const handleClickAddBtn = () => {
      open();
    };

    return () => (
      <ElCard
        ref={res}
        class={classes.container}
        v-slots={slots}
        shadow="never"
      >
        <div class={classes.actionLine}>
          <ElButton type="primary" plain>
            迁移卖家至新环境
          </ElButton>
          <ElButton onClick={handleClickAddBtn}>新增</ElButton>
          <ElButton type="danger" plain>
            删除
          </ElButton>
        </div>

        <ElTable data={props.env.sidList}>
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
