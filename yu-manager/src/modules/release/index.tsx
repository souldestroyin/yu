// tools
import { defineComponent, ref, watch } from "vue";

// hooks
import { useDialog } from "@/hooks/useDialog";

// components
import { ElButton, ElTabs, ElTabPane } from "element-plus";
import { CirclePlus, VideoCamera } from "@element-plus/icons-vue";

import ResourceSection from "./components/ResourceSection";
import EnvSection from "./components/EnvSection";
import AddModuler from "./components/AddModuler";

// modules
import ModulerList from "@/objects/moduler";
import ResourceList from "@/objects/resource";

// styles
import classes from "./style.module.scss";

export default defineComponent({
  name: "ReleasePage",
  setup() {
    const ver = ref(0);

    const modulerList = new ModulerList();
    modulerList.fetchList();

    const currentModulId = ref(modulerList.getDefaultModuleId());
    watch(currentModulId, () => {
      ver.value++;
    });

    const [open, close, loading] = useDialog();

    const handleClickAddBtn = () => {
      open({
        title: "新建模块",
        component: () => (
          <AddModuler
            nameList={modulerList.list.map((moduler) => moduler.name)}
            done={(title: string, name: string) => {
              modulerList.create(title, name);
              ver.value++;
              loading.value = true;
              close();
            }}
          ></AddModuler>
        ),
      });
    };

    return () => (
      <div class={classes.container}>
        <span style="display:none">{ver.value}</span>
        <div class={classes.left}>
          <div class={classes.actionLine}>
            <ElButton
              icon={CirclePlus}
              type="text"
              onClick={handleClickAddBtn}
            ></ElButton>
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

        <div class={classes.middle}>
          <ResourceSection
            key={currentModulId.value}
            moduleId={currentModulId.value}
          ></ResourceSection>
        </div>

        <div class={classes.right}>
          <EnvSection
            key={currentModulId.value}
            moduleId={currentModulId.value}
          ></EnvSection>
        </div>
      </div>
    );
  },
});
