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

import classes from "./style.module.scss";

export default ({
  resourceItem,
  editCb,
  deleteCb,
}: {
  resourceItem: ResourceType;
  editCb: (v: ResourceType) => void;
  deleteCb: (v: ResourceType) => void;
}) => (
  <div class={classes.container}>
    {`${resourceItem.resourceTitle}: ${resourceItem.resourcePath}`}

    <span class={classes.actionContainer}>
      <ElButton
        class={classes.editBtn}
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
            <ElIcon class={classes.deleteBtn} size={12}>
              <Delete />
            </ElIcon>
          ),
        }}
      </ElPopconfirm>
    </span>
  </div>
);
