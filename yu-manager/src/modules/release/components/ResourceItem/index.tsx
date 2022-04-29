import { ResourceType } from "@/objects/resource";

// components
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElCollapse,
  ElCollapseItem,
  ElPopconfirm,
  ElIcon,
} from "element-plus";
import { CirclePlus, Delete, Edit, EditPen } from "@element-plus/icons-vue";

export default ({
  resourceItem,
  editCb,
  deleteCb,
}: {
  resourceItem: ResourceType;
  editCb: (v: ResourceType) => void;
  deleteCb: (v: ResourceType) => void;
}) => (
  <div>
    {`${resourceItem.resourceTitle}: ${resourceItem.resourcePath}`}

    <ElButton
      type="text"
      size="small"
      icon={EditPen}
      onClick={() => editCb(resourceItem)}
    ></ElButton>

    <ElPopconfirm
      title="确认删除该资源？"
      confirm-button-text="确认"
      confirmButtonType="danger"
      cancel-button-text="取消"
      onConfirm={() => deleteCb(resourceItem)}
    >
      {{
        reference: () => (
          <ElIcon style="float: right; cursor: pointer">
            <Delete />
          </ElIcon>
        ),
      }}
    </ElPopconfirm>
  </div>
);
