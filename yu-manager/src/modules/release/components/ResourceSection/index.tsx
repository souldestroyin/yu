// tools
import { defineComponent, PropType, Ref, ref, watch } from "vue";

// components
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElCollapse,
  ElCollapseItem,
} from "element-plus";
import { CirclePlus } from "@element-plus/icons-vue";

// modules
import ResourceList from "@/objects/resource";

export default defineComponent({
  name: "ResourceSection",
  props: {
    moduleId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const activeNames = ref([1, 2, 3]);
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

    const handleClickAddBtn = () => {};
    return () => (
      <div>
        <div>
          <ElButton icon={CirclePlus} type="text" onClick={handleClickAddBtn}>
            新建资源
          </ElButton>

          <ElCollapse v-model={activeNames.value}>
            <ElCollapseItem title="页面" name={1}>
              {pageList.list.map((item) => (
                <div>{`${item.resourceTitle}: ${item.resourcePath}`}</div>
              ))}
            </ElCollapseItem>
            <ElCollapseItem title="接口" name={2}>
              {apiList.list.map((item) => (
                <div>{`${item.resourceTitle}: ${item.resourcePath}`}</div>
              ))}
            </ElCollapseItem>
            <ElCollapseItem title="定时任务" name={3}>
              {settimeList.list.map((item) => (
                <div>{`${item.resourceTitle}: ${item.resourcePath}`}</div>
              ))}
            </ElCollapseItem>
          </ElCollapse>
        </div>
      </div>
    );
  },
});
