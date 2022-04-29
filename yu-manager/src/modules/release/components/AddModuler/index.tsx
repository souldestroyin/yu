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
    done: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const formData = reactive({
      title: "",
      name: "",
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

    const titleRules = [
      {
        trigger: "blur",
        validator: (rule: any, value: any, callback: any) => {
          if (value === "") {
            callback(new Error("模块标题必填"));
          } else {
            callback();
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
          } else if (props.nameList.includes(value)) {
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
