// tools
import { defineComponent, PropType, Ref, ref, watch } from "vue";

// hooks
import { useDialog } from "@/hooks/useDialog";

// components
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElCollapse,
  ElCollapseItem,
} from "element-plus";
import { CirclePlus, Delete, Edit, EditPen } from "@element-plus/icons-vue";

// modules
import ResourceList, {
  RESOURCE_TYPE_LIST,
  RourceFormType,
  ResourceType,
} from "@/objects/resource";

// styles
import classes from "./style.module.scss";
import AddResource from "../AddResource";
import ResourceItem from "../ResourceItem";

export default defineComponent({
  name: "ResourceSection",
  props: {
    moduleId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const activeNames = ref(RESOURCE_TYPE_LIST.map((o) => o.id));
    const ver = ref(0);

    const pageList = new ResourceList(props.moduleId, 1);
    const apiList = new ResourceList(props.moduleId, 2);
    const settimeList = new ResourceList(props.moduleId, 3);

    Promise.all([
      pageList.fetchList(),
      apiList.fetchList(),
      settimeList.fetchList(),
    ]).then(() => {
      ver.value++;
    });

    const [open, close, loading] = useDialog();

    const handleClickAddBtn = () => {
      open({
        title: "新建资源",
        component: () => (
          <AddResource
            moduleId={props.moduleId}
            close={close}
            done={(formData: RourceFormType) => {
              console.log(formData.resourceType);
            }}
          ></AddResource>
        ),
      });
    };

    const handleEditResource = (resourceItem: ResourceType) => {
      open({
        title: "编辑资源",
        component: () => (
          <AddResource
            moduler={resourceItem}
            moduleId={props.moduleId}
            close={close}
            done={(formData: RourceFormType) => {
              console.log(formData.resourceType);
            }}
          ></AddResource>
        ),
      });
    };
    return () => (
      <div>
        <div>
          <ElButton icon={CirclePlus} type="text" onClick={handleClickAddBtn}>
            新建资源
          </ElButton>

          <ElCollapse
            v-model={activeNames.value}
            class={classes.collapseContainer}
          >
            <ElCollapseItem title="页面" name={1}>
              {pageList.list.map((item) => (
                <ResourceItem
                  resourceItem={item}
                  editCb={handleEditResource}
                  deleteCb={() => {}}
                ></ResourceItem>
              ))}
            </ElCollapseItem>
            <ElCollapseItem title="接口" name={2}>
              {apiList.list.map((item) => (
                <ResourceItem
                  resourceItem={item}
                  editCb={handleEditResource}
                  deleteCb={() => {}}
                ></ResourceItem>
              ))}
            </ElCollapseItem>
            <ElCollapseItem title="定时任务" name={3}>
              {settimeList.list.map((item) => (
                <ResourceItem
                  resourceItem={item}
                  editCb={handleEditResource}
                  deleteCb={() => {}}
                ></ResourceItem>
              ))}
            </ElCollapseItem>
          </ElCollapse>
        </div>
      </div>
    );
  },
});
