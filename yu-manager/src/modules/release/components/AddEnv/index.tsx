import { defineComponent, PropType, reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElAlert, ElFormItem, ElForm, ElInput, ElButton } from "element-plus";
import { Env, EnvBaseType } from "@/objects/env";

export default defineComponent({
  name: "AddEnv",
  props: {
    handleDone: {
      type: Function,
      required: true,
    },
    env: {
      type: Object as PropType<EnvBaseType>,
    },
  },
  setup(props) {
    const { env } = props;

    const formData = reactive<EnvBaseType>({
      envName: env ? env.envName : "",
      env: env ? env.env : "",
      updateMsg: env ? env.updateMsg : "",
      fallbackMsg: env ? env.fallbackMsg : "",
      version: env ? env.version : "",
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
        env && env.envId ? { ...formData, envId: env.envId } : formData
      );
    };
    return () => (
      <div>
        <ElForm ref={formRef} model={formData} labelWidth="80px">
          <ElFormItem label="环境标题" required prop="envName">
            <ElInput v-model={formData.envName}></ElInput>
          </ElFormItem>

          <ElAlert
            type="info"
            show-icon
            title="环境标识在创建后不可修改"
            closable={false}
          ></ElAlert>
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
