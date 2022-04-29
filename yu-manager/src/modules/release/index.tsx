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

    const handleClickTab = (e: Event) => {
      e.stopPropagation();
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
          >
            {modulerList.list.map((moduler) => (
              <ElTabPane name={moduler.moduleId} key={moduler.moduleId}>
                {{
                  label: () => (
                    <div class={classes.labelItem}>
                      <span class={classes.labelTitle}>{moduler.title}</span>

                      <span
                        onClick={handleClickTab}
                        class={
                          moduler.moduleId !== currentModulId.value &&
                          classes.editBtn
                        }
                      >
                        <ElIcon style="font-size: 12px">
                          <EditPen />
                        </ElIcon>
                      </span>

                      {/* <ElPopconfirm
                        title="确认删除该环境？"
                        confirm-button-text="确认"
                        confirmButtonType="danger"
                        cancel-button-text="取消"
                        // onConfirm={handleConfirmDeleteEnv}
                      >
                        {{
                          reference: () => (
                            <ElIcon>
                              <Delete />
                            </ElIcon>
                          ),
                        }}
                      </ElPopconfirm> */}
                    </div>
                  ),
                }}
              </ElTabPane>
            ))}
          </ElTabs>
        </ElHeader>

        <ElContainer>
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
