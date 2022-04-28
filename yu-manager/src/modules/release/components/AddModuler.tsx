import { defineComponent, reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage, ElFormItem, ElForm, ElInput, ElButton } from "element-plus";

export default defineComponent({
  name: "AddModuler",
  props: {
    nameList: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const formData = reactive({
      name: "",
      title: "",
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

      //   if (props.nameList.includes(formData.name)) {
      //     ElMessage.warning('模块标识不可重复')
      //     return;
      //   }
    };

    const titleRules = [
      {
        trigger: "blur",
        validator: (rule: any, value: any, callback: any) => {
          if (value === "") {
            callback(new Error("模块标题必填"));
          }
        },
      },
    ];

    const nameRules = [
      {
        trigger: "blur",
        validator: (rule: any, value: any, callback: any) => {
          if (value === "") {
            callback(new Error("模块标识必填"));
          }
          if (props.nameList.includes(value)) {
            callback(new Error("模块标识不可重复"));
          }
        },
      },
    ];

    return () => (
      <div>
        <ElForm ref={formRef} model={formData} labelWidth="80px">
          <ElFormItem label="模块标题" rules={titleRules} required prop="title">
            <ElInput v-model={formData.title}></ElInput>
          </ElFormItem>

          <ElFormItem label="模块标识" rules={nameRules} prop="name" required>
            <ElInput v-model={formData.name}></ElInput>
          </ElFormItem>
        </ElForm>

        <footer>
          <ElButton type="warning" plain>
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
