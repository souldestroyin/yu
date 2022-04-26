import { defineComponent, ref, watch } from "vue";
import {
  ElButton,
  ElTabs,
  ElTabPane,
  type TabsPaneContext,
} from "element-plus";
import { Plus } from "@element-plus/icons-vue";

import ModulerList from "./objects/moduler";
import ResourceList from "./objects/resource";

export default defineComponent({
  name: "Release",
  setup() {
    const modulerList = new ModulerList();

    modulerList.fetchList();

    const ver = ref(0);
    const currentModuler = ref(modulerList.getDefaultModuleId());

    watch(currentModuler, () => {}, {
      immediate: true,
    });

    const pageList = new ResourceList(currentModuler.value, 1);
    const apiList = new ResourceList(currentModuler.value, 2);
    const settimeList = new ResourceList(currentModuler.value, 3);

    const handleClickTab = (pane: TabsPaneContext) => {
      const moduleId = pane.paneName as number;
      currentModuler.value = moduleId!;
    };

    return () => (
      <div>
        <ElButton icon={Plus} type="text"></ElButton>
        <ElTabs v-model={currentModuler.value} tabPosition="left">
          {ver.value}
          {currentModuler.value}
          {modulerList.list.map((moduler) => (
            <ElTabPane
              label={moduler.title}
              name={moduler.moduleId}
              key={moduler.moduleId}
            ></ElTabPane>
          ))}
        </ElTabs>
      </div>
    );
  },
});
