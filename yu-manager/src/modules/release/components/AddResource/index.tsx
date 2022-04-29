import { defineComponent, PropType, reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import {
  ElPopconfirm,
  ElFormItem,
  ElForm,
  ElInput,
  ElButton,
  ElRadioGroup,
  ElRadio,
} from "element-plus";
import { ModulerType } from "@/objects/moduler";
import {
  RourceFormType,
  ResourceType,
  RESOURCE_TYPE_LIST,
} from "@/objects/resource";

export default defineComponent({
  name: "AddResource",
  props: {
    moduleId: {
      type: Number,
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
      type: Object as PropType<ResourceType>,
    },
  },
  setup(props) {
    const formData = reactive<RourceFormType>({
      moduleId: props.moduleId,
      resourceType: props.moduler ? props.moduler.resourceType : 1,
      resourceTitle: props.moduler ? props.moduler.resourceTitle : "",
      resourcePath: props.moduler ? props.moduler.resourcePath : "",
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
      props.done(formData);
    };

    return () => (
      <div>
        <ElForm ref={formRef} model={formData} labelWidth="90px">
          <ElFormItem label="资源类型" prop="title">
            <ElRadioGroup v-model={formData.resourceType}>
              {RESOURCE_TYPE_LIST.map((item) => (
                <ElRadio label={item.id}>{item.name}</ElRadio>
              ))}
            </ElRadioGroup>
          </ElFormItem>

          <ElFormItem label="资源标题" required prop="title">
            <ElInput v-model={formData.resourceTitle}></ElInput>
          </ElFormItem>

          <ElFormItem label="名称/path" required prop="name">
            <ElInput v-model={formData.resourcePath}></ElInput>
          </ElFormItem>
        </ElForm>

        <footer>
          <ElButton plain onClick={props.close}>
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
