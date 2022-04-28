// tools
import { defineComponent, PropType, reactive, ref, Ref, watch } from "vue";

// hooks
import { useDialog } from "@/hooks/useDialog";

// components
import { ElButton, ElTabs, ElTabPane } from "element-plus";
import { CirclePlus } from "@element-plus/icons-vue";
import EnvItem from "../EnvItem";
import AddEnv from "../AddEnv";

// modules
import { EnvList, EnvBaseType } from "@/objects/env";

// styles
import classes from "./style.module.scss";

export default defineComponent({
  name: "EnvSection",
  props: {
    moduleId: {
      type: Object as PropType<Ref<number>>,
      required: true,
    },
  },
  setup(props) {
    let envList = reactive(new EnvList(props.moduleId.value));
    envList.fetchList();

    watch(props.moduleId, () => {
      envList = reactive(new EnvList(props.moduleId.value));
      envList.fetchList();
    });

    const [open, close, loading] = useDialog();
    const handleDone = (formData: EnvBaseType) => {
      envList.create(formData);
      close();
    };

    const handleClickAddBtn = () => {
      open({
        title: "新建环境",
        component: () => <AddEnv handleDone={handleDone}></AddEnv>,
      });
    };

    return () => (
      <div class={classes.container}>
        <div>
          <ElButton icon={CirclePlus} type="text" onClick={handleClickAddBtn}>
            新建环境
          </ElButton>
        </div>
        <div class={classes.envContainer}>
          {envList.list.map((env) => (
            <EnvItem env={env} envList={envList} />
          ))}
        </div>
      </div>
    );
  },
});
