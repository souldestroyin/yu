import {
  ElButton,
  ElContainer,
  ElForm,
  ElFormItem,
  ElInput,
  type FormInstance,
} from "element-plus";
import { reactive, ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
import Login from "./objects/login";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const loginData = new Login();

    // 更新页面用
    const ver = ref(0);

    const loading = ref(false);

    // 表单组件引用
    const loginFormRef = ref<FormInstance>();

    // 登录操作
    const handleClickLoginBtn = async () => {
      ver.value++;

      if (!loginFormRef.value) {
        return;
      }

      const valid = await loginFormRef.value.validate();

      if (!valid) {
        return;
      }

      loading.value = true;

      try {
        await loginData.login();

        const router = useRouter();

        router.push({
          name: "Release",
        });
      } catch {
        console.log("errrrrrrr");
      }
      loading.value = false;
    };

    return () => (
      <div>
        <span style="display:none">{ver.value}</span>

        <ElForm
          ref={loginFormRef}
          model={loginData.getFormData()}
          rules={loginData.loginRule}
        >
          <ElFormItem
            prop="sid"
            error={loginData.errKey === "sid" ? loginData.errMsg : undefined}
          >
            <ElInput
              modelValue={loginData.sid}
              onInput={(val) => {
                loginData.update("sid", val);
                ver.value++;
              }}
              placeholder="请输入卖家账号"
              type="text"
              tabindex="1"
              autocomplete="on"
            ></ElInput>
          </ElFormItem>

          <ElFormItem
            prop="account"
            error={
              loginData.errKey === "account" ? loginData.errMsg : undefined
            }
          >
            <ElInput
              modelValue={loginData.account}
              onInput={(val) => {
                loginData.update("account", val);
                ver.value++;
              }}
              placeholder="请输入用户名"
              type="text"
              tabindex="1"
              autocomplete="on"
            ></ElInput>
          </ElFormItem>

          <ElFormItem
            prop="password"
            error={
              loginData.errKey === "password" ? loginData.errMsg : undefined
            }
          >
            <ElInput
              modelValue={loginData.password}
              onInput={(val) => {
                loginData.update("password", val);
                ver.value++;
              }}
              placeholder="请输入密码"
              type="password"
              tabindex="2"
              autocomplete="on"
            ></ElInput>
          </ElFormItem>

          <ElButton
            loading={loading.value}
            disabled={!loginData.canLogin()}
            onClick={handleClickLoginBtn}
            type="primary"
          >
            登录
          </ElButton>
        </ElForm>
      </div>
    );
  },
});
