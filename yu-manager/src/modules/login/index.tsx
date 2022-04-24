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

type FormRule = (rule: any, value: string, callback: Function) => void;

const validateSid: FormRule = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入卖家账号"));
  } else {
    callback();
  }
  //   validUsername(rule, value, callback);
};
const validateAccount: FormRule = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
  //   validUsername(rule, value, callback);
};
const validatePassword: FormRule = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error("密码不能短于6字符"));
  } else {
    callback();
  }
};

export default () => {
  const loginData = reactive(new Login());

  const loginRule = {
    sid: [{ required: true, trigger: "blur", validator: validateSid }],
    account: [{ required: true, trigger: "blur", validator: validateAccount }],
    password: [
      { required: true, trigger: "blur", validator: validatePassword },
    ],
  };

  const loading = ref(false);

  const loginFormRef = ref<FormInstance>();

  const handleClickLoginBtn = async () => {
    console.log(54907357982357492370, loginFormRef.value);

    if (!loginFormRef.value) {
      return;
    }

    const valid = await loginFormRef.value.validate();

    if (!valid) {
      return;
    }

    loading.value = true;
    await loginData.login();
    loading.value = false;
  };

  return () => (
    <div>
      <ElForm ref={loginFormRef} model={loginData} rules={loginRule}>
        <ElFormItem
          prop="sid"
          error={loginData.errKey === "sid" ? loginData.errMsg : undefined}
        >
          <ElInput
            modelValue={loginData.sid}
            onInput={(val) => (loginData.sid = val)}
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
            onInput={(val) => (loginData.account = val)}
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
            onInput={(val) => (loginData.password = val)}
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
};
