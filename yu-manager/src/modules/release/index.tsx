// tools
import { defineComponent, ref, watch } from "vue";

// components
import { ElButton, ElTabs, ElTabPane } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import EnvComp from "./components/env";

// modules
import ModulerList from "../../objects/moduler";
import ResourceList from "../../objects/resource";
import { EnvList } from "../../objects/env";

// styles
import classes from "./style.module.scss";
import { useDialog } from "../../hooks/useDialog";
import AddModuler from "./components/AddModuler";

export default defineComponent({
  name: "ReleasePage",
  setup() {
    const ver = ref(0);

    const modulerList = new ModulerList();
    modulerList.fetchList();

    const currentModuler = ref(modulerList.getDefaultModuleId());
    let envList = new EnvList(currentModuler.value);
    envList.fetchList().then(() => {
      console.log(990909);

      ver.value++;
    });

    watch(currentModuler, () => {
      envList = new EnvList(currentModuler.value);
      envList.fetchList().then(() => {
        ver.value++;
      });
    });

    const pageList = new ResourceList(currentModuler.value, 1);
    const apiList = new ResourceList(currentModuler.value, 2);
    const settimeList = new ResourceList(currentModuler.value, 3);

    const [open, close, loading] = useDialog({
      title: "新建模块",
      body: () => (
        <AddModuler
          nameList={modulerList.list.map((moduler) => moduler.name)}
        ></AddModuler>
      ),
    });

    return () => (
      <div class={classes.container}>
        <span style="display:none">{ver.value}</span>
        <div class={classes.left}>
          <div class={classes.actionLine}>
            <ElButton icon={Plus} type="text" onClick={open}></ElButton>
          </div>

          <ElTabs
            v-model={currentModuler.value}
            tabPosition="left"
            class={classes.modulerList}
          >
            {modulerList.list.map((moduler) => (
              <ElTabPane
                label={moduler.title}
                name={moduler.moduleId}
                key={moduler.moduleId}
              ></ElTabPane>
            ))}
          </ElTabs>
        </div>

        <div class={classes.middle}></div>

        <div class={classes.right}>
          {envList.list.map((env) => (
            <EnvComp env={env} envList={envList.list} />
          ))}
        </div>
      </div>
    );
  },
});
