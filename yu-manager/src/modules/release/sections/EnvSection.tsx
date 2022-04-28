// tools
import { defineComponent, PropType, ref, Ref, watch } from "vue";

// hooks
import { useDialog } from "@/hooks/useDialog";

// components
import { ElButton, ElTabs, ElTabPane } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import EnvItem from "../components/EnvItem";
import AddEnv from "../components/AddEnv";

// modules
import { EnvList } from "@/objects/env";

export default defineComponent({
  name: "EnvSection",
  props: {
    moduleId: {
      type: Object as PropType<Ref<number>>,
      required: true,
    },
  },
  setup(props) {
    const ver = ref(0);

    let envList = new EnvList(props.moduleId.value);
    envList.fetchList().then(() => {
      ver.value++;
    });
    watch(props.moduleId, () => {
      envList = new EnvList(props.moduleId.value);
      envList.fetchList().then(() => {
        ver.value++;
      });
    });

    const [open, close, loading] = useDialog({
      title: "新建模块",
      body: () => <AddEnv handleDone={handleDone}></AddEnv>,
    });
    const handleDone = (
      envName: string,
      env: string,
      fallbackMsg: string,
      updateMsg: string,
      version: string
    ) => {
      envList.create(envName, env, fallbackMsg, updateMsg, version);
      ver.value++;
      close();
    };

    return () => (
      <div>
        <span style="display:none">{ver.value}</span>
        <div>
          <ElButton icon={Plus} type="text" onClick={open}></ElButton>
        </div>
        {envList.list.map((env) => (
          <EnvItem env={env} envList={envList.list} />
        ))}
      </div>
    );
  },
});
