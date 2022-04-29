// tools
import { defineComponent, ref, PropType, watch, toRef, computed } from "vue";

// hooks
import { useDialog } from "@/hooks/useDialog";

//components
import {
  ElButton,
  ElCard,
  ElTable,
  ElTableColumn,
  ElDropdown,
  ElIcon,
  ElPopconfirm,
} from "element-plus";
import { EditPen, Delete } from "@element-plus/icons-vue";

import AddEnv from "../AddEnv";
import MoveSeller from "../MoveSeller";

// models
import { EnvType, EnvBaseType, EnvList } from "@/objects/env";
import { SellerType } from "@/objects/seller";

// styles
import classes from "./style.module.scss";

export default defineComponent({
  name: "EnvItem",
  props: {
    env: {
      type: Object as PropType<EnvType>,
      required: true,
    },
    envList: {
      type: Object as PropType<EnvList>,
      required: true,
    },
  },
  setup(props) {
    const [open, close, loading] = useDialog();

    const selectedSellerList = ref<Array<SellerType>>([]);
    const handleSelectionChange = (val: Array<SellerType>) => {
      selectedSellerList.value = val;
    };

    const handleClickAddBtn = () => {};

    const handleClickMoveBtn = (env: EnvType) => {
      open({
        title: `确认从环境${props.env.envName}迁移到环境${env.envName}`,
        component: () => (
          <MoveSeller
            done={() => {
              props.envList.fetchList();
              close();
            }}
            close={close}
            sellerList={selectedSellerList.value}
          ></MoveSeller>
        ),
      });
    };

    const restEnvList = computed(() =>
      props.envList.list.filter((env) => env !== props.env)
    );

    const handleClickEditBtn = () => {
      open({
        title: "编辑环境",
        component: () => (
          <AddEnv
            close={close}
            done={(envId: number, formData: EnvBaseType) => {
              props.envList.update(envId, formData);
              close();
            }}
            env={props.env}
          ></AddEnv>
        ),
      });
    };

    const handleClickSetDefaultBtn = () => {
      props.envList.setDefault(props.env);
    };

    const handleConfirmDeleteEnv = () => {
      props.envList.delete(props.env);
    };

    return () => {
      return (
        <ElCard class={classes.container} shadow="never">
          {{
            header: () => (
              <>
                {`${props.env.envName} -- ${props.env.version}`}

                <span onClick={handleClickEditBtn}>
                  <ElIcon style="margin-left: 10px; cursor: pointer">
                    <EditPen />
                  </ElIcon>
                </span>

                <ElPopconfirm
                  title="确认删除该环境？"
                  confirm-button-text="确认"
                  confirmButtonType="danger"
                  cancel-button-text="取消"
                  onConfirm={handleConfirmDeleteEnv}
                >
                  {{
                    reference: () => (
                      <ElIcon style="float: right; cursor: pointer">
                        <Delete />
                      </ElIcon>
                    ),
                  }}
                </ElPopconfirm>
              </>
            ),
            default: () => (
              <>
                <div class={classes.actionLine}>
                  <ElDropdown
                    v-show={restEnvList.value.length}
                    disabled={selectedSellerList.value.length === 0}
                  >
                    {{
                      default: () => (
                        <ElButton
                          type="primary"
                          plain
                          style="margin-right: 12px"
                          disabled={selectedSellerList.value.length === 0}
                        >
                          迁移卖家至新环境
                        </ElButton>
                      ),
                      dropdown: () => (
                        <el-dropdown-menu>
                          {restEnvList.value.map((env) => (
                            <el-dropdown-item
                              onClick={() => handleClickMoveBtn(env)}
                            >
                              {env.envName}
                            </el-dropdown-item>
                          ))}
                        </el-dropdown-menu>
                      ),
                    }}
                  </ElDropdown>

                  <ElButton onClick={handleClickAddBtn}>新增</ElButton>
                  {/* <ElButton type="danger" plain>
                    删除
                  </ElButton> */}

                  {props.env.isDefault ? (
                    <span class={classes.defaultBtn}>默认环境</span>
                  ) : (
                    <ElButton
                      class={classes.defaultBtn}
                      onClick={handleClickSetDefaultBtn}
                    >
                      设置为默认环境
                    </ElButton>
                  )}
                </div>

                <ElTable
                  data={props.env.sidList}
                  stripe
                  onSelection-change={handleSelectionChange}
                >
                  <ElTableColumn type="selection" width="40"></ElTableColumn>
                  <ElTableColumn
                    label="卖家名称"
                    prop="sid"
                    sortable
                  ></ElTableColumn>
                  <ElTableColumn
                    label="迁移时间"
                    prop="operateTime"
                    sortable
                  ></ElTableColumn>
                  <ElTableColumn
                    label="迁移人"
                    prop="operator"
                    sortable
                  ></ElTableColumn>
                </ElTable>
              </>
            ),
          }}
        </ElCard>
      );
    };
  },
});
