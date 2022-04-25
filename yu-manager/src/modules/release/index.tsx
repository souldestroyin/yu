import { defineComponent, ref } from "vue";
import Moduler from "./objects/moduler";
import {
  ElButton,
  ElTabs,
  ElTabPane,
  type TabsPaneContext,
} from "element-plus";
import { Plus } from "@element-plus/icons-vue";

export default defineComponent({
  name: "Release",
  setup() {
    const modulerList = new Moduler();

    modulerList.getList();

    const ver = ref(0);
    const currentModuler = ref(modulerList.getDefaultModuleId());

    const handleClickTab = (pane: TabsPaneContext) => {
      const moduleId = pane.paneName;

      currentModuler;
    };

    return () => (
      <div>
        <ElButton icon={Plus} type="text"></ElButton>
        <ElTabs
          model-value={currentModuler.value}
          onTab-click={handleClickTab}
          tabPosition="left"
        >
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
