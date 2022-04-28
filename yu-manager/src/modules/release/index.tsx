// tools
import { defineComponent, ref, watch } from "vue";

// components
import { ElButton, ElTabs, ElTabPane } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import EnvSection from "./sections/EnvSection";

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

    const currentModulId = ref(modulerList.getDefaultModuleId());

    const pageList = new ResourceList(currentModulId.value, 1);
    const apiList = new ResourceList(currentModulId.value, 2);
    const settimeList = new ResourceList(currentModulId.value, 3);

    const [open, close, loading] = useDialog({
      title: "新建模块",
      body: () => (
        <AddModuler
          nameList={modulerList.list.map((moduler) => moduler.name)}
          handleDone={handleDone}
        ></AddModuler>
      ),
    });
    const handleDone = (title: string, name: string) => {
      modulerList.create(title, name);
      ver.value++;
      close();
    };

    return () => (
      <div class={classes.container}>
        <span style="display:none">{ver.value}</span>
        <div class={classes.left}>
          <div class={classes.actionLine}>
            <ElButton icon={Plus} type="text" onClick={open}></ElButton>
          </div>

          <ElTabs
            v-model={currentModulId.value}
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
          <EnvSection moduleId={currentModulId}></EnvSection>
        </div>
      </div>
    );
  },
});
