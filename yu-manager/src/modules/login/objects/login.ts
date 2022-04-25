import filterXSS from 'xss'
import md5 from 'js-md5'
import { apiLogin } from '../apis/login';
type FormRule = (rule: any, value: string, callback: Function) => void;

const validateSid: FormRule = (rule, value, callback) => {
  console.log('rule', rule);

  if (value === "") {
    callback(new Error("请输入卖家账号"));
  } else {
    callback();
  }
};
const validateAccount: FormRule = (rule, value, callback) => {
  console.log(value, callback);

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
  sid = ''
  account = ''
  password = ''

  errKey = ''
  errMsg = ''

  loginRule = {
    sid: [{ required: true, trigger: "blur", validator: validateSid }],
    account: [{ required: true, trigger: "blur", validator: validateAccount }],
    password: [
      { required: true, trigger: "blur", validator: validatePassword },
    ],
  }


  async login() {
    this.errKey = ''
    this.errMsg = ''

    const sid = filterXSS(this.sid.trim())
    const account = this.account.trim()

    const password = md5(this.password)

    try {
      const { data } = await apiLogin(sid, account, password)
      console.log(data);

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
        }
      }



    }






    // await 
  }

  update(prop: 'sid' | 'account' | 'password', value: string) {

    this[prop] = value
  }




  canLogin() {
    return !!(this.sid && this.account && this.password)
  }


}