import {
  ElButton,
  ElContainer,
  ElForm,
  ElFormItem,
  ElInput,
  type FormInstance,
} from "element-plus";
import { reactive, ref } from "vue";
import Login from "./objects/login";

const LoginView = () => {
  const loginData = new Login();

  const ver = ref(0);

  const loading = ref(false);

  const loginFormRef = ref<FormInstance>();

  const handleClickLoginBtn = async () => {
    ver.value++;
    // if (!loginFormRef.value) {
    //   return;
    // }

    // const valid = await loginFormRef.value.validate();

    // if (!valid) {
    //   return;
    // }

    loading.value = true;
    console.log(ver, loading);

    // await loginData.login();
    // loading.value = false;
  };

  return (
    <div>
      {ver.value}
      {loading.value + ""}
      <ElForm ref={loginFormRef} model={loginData} rules={loginData.loginRule}>
        <ElFormItem
          prop="sid"
          error={loginData.errKey === "sid" ? loginData.errMsg : undefined}
        >
          <ElInput
            modelValue={loginData.sid}
            onInput={(val) => ver.value++}
            placeholder="请输入卖家账号"
            type="text"
            tabindex="1"
            autocomplete="on"
          ></ElInput>
        </ElFormItem>

        <ElFormItem
          prop="account"
          error={loginData.errKey === "account" ? loginData.errMsg : undefined}
        >
          <ElInput
            modelValue={loginData.account}
            onInput={(val) => {
              //   loginData.update("account", val);
              loading.value = true;

              ver.value = 2;
            }}
            placeholder="请输入用户名"
            type="text"
            tabindex="1"
            autocomplete="on"
          ></ElInput>
        </ElFormItem>

        <ElFormItem
          prop="password"
          error={loginData.errKey === "password" ? loginData.errMsg : undefined}
        >
          <ElInput
            modelValue={loginData.password}
            onInput={(val) => loginData.update("password", val)}
            placeholder="请输入密码"
            type="password"
            tabindex="2"
            autocomplete="on"
          ></ElInput>
        </ElFormItem>

        <ElButton
          loading={loading.value}
          onClick={handleClickLoginBtn}
          type="primary"
        >
          登录
        </ElButton>
      </ElForm>
    </div>
  );
};

LoginView.displayName = "fgsdag";

export default LoginView;
