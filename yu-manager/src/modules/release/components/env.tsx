import { defineComponent } from "vue";
import { Env } from "../objects/env";

import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElCard,
  ElTable,
  ElTableColumn,
  type TabsPaneContext,
} from "element-plus";

// styles
import classes from "./env.module.scss";
import { EditPen } from "@element-plus/icons-vue";

console.log(classes);

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

    return () => (
      <ElCard class={classes.container} v-slots={slots} shadow="never">
        <div class={classes.actionLine}>
          <ElButton type="primary" plain>
            迁移卖家至新环境
          </ElButton>
          <ElButton>新增</ElButton>
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
