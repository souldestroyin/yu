// tools
import { defineComponent, ref, watch } from "vue";

// hooks
import { useDialog } from "@/hooks/useDialog";

// components
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElCard,
  ElTable,
  ElTableColumn,
  ElDropdown,
  ElIcon,
  ElPopconfirm,
} from "element-plus";
import {
  CirclePlus,
  VideoCamera,
  EditPen,
  Delete,
} from "@element-plus/icons-vue";

import ResourceSection from "./components/ResourceSection";
import EnvSection from "./components/EnvSection";
import AddModuler from "./components/AddModuler";

// modules
import ModulerList, { ModulerType } from "@/objects/moduler";
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
            close={close}
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

    const handleClickTab = (moduler: ModulerType) => {
      open({
        title: "修改模块",
        component: () => (
          <AddModuler
            nameList={modulerList.list.map((moduler) => moduler.name)}
            moduler={moduler}
            close={close}
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
      <ElContainer class={classes.container}>
        <ElHeader class={classes.top}>
          {/* <div class={classes.actionLine}>
            <ElButton
              icon={CirclePlus}
              type="text"
              onClick={handleClickAddBtn}
            ></ElButton>
          </div> */}

          <ElTabs
            v-model={currentModulId.value}
            class={classes.modulerList}
            addable
            onTab-add={handleClickAddBtn}
          >
            {modulerList.list.map((moduler) => (
              <ElTabPane name={moduler.moduleId} key={moduler.moduleId}>
                {{
                  label: () => (
                    <div class={classes.labelItem}>
                      <span class={classes.labelTitle}>{moduler.title}</span>

                      <span
                        onClick={() => handleClickTab(moduler)}
                        class={
                          moduler.moduleId !== currentModulId.value &&
                          classes.editBtn
                        }
                      >
                        <ElIcon style="font-size: 12px">
                          <EditPen />
                        </ElIcon>
                      </span>
                    </div>
                  ),
                }}
              </ElTabPane>
            ))}
          </ElTabs>
        </ElHeader>

        <ElContainer class={classes.contentContainer}>
          <ElAside class={classes.left}>
            <ResourceSection
              key={currentModulId.value}
              moduleId={currentModulId.value}
            ></ResourceSection>
          </ElAside>

          <ElMain class={classes.right}>
            <EnvSection
              key={currentModulId.value}
              moduleId={currentModulId.value}
            ></EnvSection>
          </ElMain>
        </ElContainer>
      </ElContainer>
    );
  },
});
