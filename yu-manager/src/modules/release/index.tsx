// tools
import { defineComponent, ref, watch } from "vue";

// components
import { ElButton, ElTabs, ElTabPane } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import EnvComp from "./components/env";

// modules
import ModulerList from "./objects/moduler";
import ResourceList from "./objects/resource";
import { EnvList } from "./objects/env";

// styles
import classes from "./style.module.scss";

export default defineComponent({
  name: "ReleasePage",
  setup() {
    const modulerList = new ModulerList();

    modulerList.fetchList();

    const ver = ref(0);
    const currentModuler = ref(modulerList.getDefaultModuleId());
    let envList = new EnvList(currentModuler.value);
    envList.fetchList();

    watch(currentModuler, () => {
      envList = new EnvList(currentModuler.value);
      envList.fetchList();
      ver.value++;
    });

    const pageList = new ResourceList(currentModuler.value, 1);
    const apiList = new ResourceList(currentModuler.value, 2);
    const settimeList = new ResourceList(currentModuler.value, 3);

    return () => (
      <div class={classes.container}>
        <div class={classes.left}>
          <ElButton icon={Plus} type="text"></ElButton>
          <ElTabs v-model={currentModuler.value} tabPosition="left">
            <span style="display:none">{ver.value}</span>
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
            <EnvComp env={env} />
          ))}
        </div>
      </div>
    );
  },
});
