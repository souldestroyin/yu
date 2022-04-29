import { defineComponent, PropType, reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import {
  ElPopconfirm,
  ElFormItem,
  ElForm,
  ElInput,
  ElButton,
} from "element-plus";
import { ModulerType } from "@/objects/moduler";

export default defineComponent({
  name: "AddModuler",
  props: {
    nameList: {
      type: Array,
      required: true,
    },
    done: {
      type: Function,
      required: true,
    },
    close: {
      type: Function as PropType<(evt: MouseEvent) => any>,
      required: true,
    },
    moduler: {
      type: Object as PropType<ModulerType>,
    },
  },
  setup(props) {
    const formData = reactive({
      title: props.moduler ? props.moduler.title : "",
      name: props.moduler ? props.moduler.name : "",
    });
    const formRef = ref<FormInstance>();

    const handleClickSubmitBtn = async () => {
      if (!formRef.value) {
        return;
      }

      const isValid = await formRef.value.validate();

      if (!isValid) {
        return;
      }
      props.done(formData.title, formData.name);
    };

    const nameRules = props.moduler
      ? []
      : [
          {
            trigger: "blur",
            validator: (rule: any, value: any, callback: any) => {
              if (props.nameList.includes(value)) {
                callback(new Error("模块标识不可重复"));
              } else {
                callback();
              }
            },
          },
        ];

    return () => (
      <div>
        <ElForm ref={formRef} model={formData} labelWidth="80px">
          <ElFormItem label="模块标题" required prop="title">
            <ElInput v-model={formData.title}></ElInput>
          </ElFormItem>

          <ElFormItem label="模块标识" rules={nameRules} prop="name" required>
            <ElInput v-model={formData.name}></ElInput>
          </ElFormItem>
        </ElForm>

        <footer>
          {props.moduler && (
            <ElPopconfirm
              title="确认删除该环境？"
              confirm-button-text="确认"
              confirmButtonType="danger"
              cancel-button-text="取消"
              // onConfirm={handleConfirmDeleteEnv}
            >
              {{
                reference: () => (
                  <ElButton type="danger" plain style="float: left">
                    删除
                  </ElButton>
                ),
              }}
            </ElPopconfirm>
          )}

          <ElButton onClick={props.close} plain>
            取消
          </ElButton>
          <ElButton type="primary" onClick={handleClickSubmitBtn}>
            确认
          </ElButton>
        </footer>
      </div>
    );
  },
});
