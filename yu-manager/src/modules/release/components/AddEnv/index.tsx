import { defineComponent, reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage, ElFormItem, ElForm, ElInput, ElButton } from "element-plus";

export default defineComponent({
  name: "AddEnv",
  props: {
    handleDone: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const formData = reactive({
      envName: "",
      env: "",
      updateMsg: "",
      fallbackMsg: "",
      version: "",
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
      props.handleDone(
        formData.envName,
        formData.env,
        formData.fallbackMsg,
        formData.updateMsg,
        formData.version
      );
    };
    return () => (
      <div>
        <ElForm ref={formRef} model={formData} labelWidth="80px">
          <ElFormItem label="环境标题" required prop="envName">
            <ElInput v-model={formData.envName}></ElInput>
          </ElFormItem>

          <ElFormItem label="环境标识" prop="env" required>
            <ElInput v-model={formData.env}></ElInput>
          </ElFormItem>

          <ElFormItem label="版本号" prop="version" required>
            <ElInput v-model={formData.version}></ElInput>
          </ElFormItem>

          <ElFormItem label="更新到该版本需要的条件" prop="updateMsg" required>
            <ElInput
              v-model={formData.updateMsg}
              rows={4}
              type="textarea"
            ></ElInput>
          </ElFormItem>

          <ElFormItem
            label="回退到该版本需要的条件"
            prop="fallbackMsg"
            required
          >
            <ElInput
              v-model={formData.fallbackMsg}
              type="textarea"
              rows={4}
            ></ElInput>
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
