import filterXSS from 'xss'
import md5 from 'js-md5'
import { apiLogin } from '../apis/login';
import { setToken } from '@/tools/auth';
import { setSid } from '../../../tools/auth';
type FormRule = (rule: any, value: string, callback: Function) => void;

const validateSid: FormRule = (rule, value, callback) => {


  if (value === "") {
    callback(new Error("请输入卖家账号"));
  } else {
    callback();
  }

};
const validateAccount: FormRule = (rule, value, callback) => {

  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
};
const validatePassword: FormRule = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error("密码不能短于6字符"));
  } else {
    callback();
  }
};
export default class Login {
  sid = 'java_dev'
  account = 'zhengkaixuan'
  password = 'Woaihuice1992'

  errKey = ''
  errMsg = ''

  loginRule = {
    sid: [{ required: true, trigger: "blur", validator: validateSid }],
    account: [{ required: true, trigger: "blur", validator: validateAccount }],
    password: [
      { required: true, trigger: "blur", validator: validatePassword },
    ],
  }

  getFormData() {
    const { sid, account, password } = this
    return {
      sid,
      account,
      password
    }
  }


  async login() {
    this.errKey = ''
    this.errMsg = ''

    const sid = filterXSS(this.sid.trim())
    const account = this.account.trim()

    const password = md5(this.password)

    try {
      const { data } = await apiLogin(sid, account, password)

      if (data) {
        setToken(data.token)
        setSid(data.sid)
      }

      return Promise.resolve()

    } catch ({ code, msg }) {
      switch (code) {
        case 40003: {
          this.errKey = 'account'
          this.errMsg = msg as string
          break
        }
        case 40004: {
          this.errKey = 'sid'
          this.errMsg = msg as string
          break
        }
        case 40002: {
          this.errKey = 'password'
          this.errMsg = msg as string
          break
        }
      }

      return Promise.reject()

    }
  }

  update(prop: 'sid' | 'account' | 'password', value: string) {
    this[prop] = value
  }

  canLogin() {
    return !!(this.sid && this.account && this.password)
  }


}