import filterXSS from 'xss'
import md5 from 'js-md5'
import { apiLogin } from '../apis/login';

export default class Login {
  sid = ''
  account = ''
  password = ''

  state = ''

  errKey = ''
  errMsg = ''


  async login() {
    this.errKey = ''
    this.errMsg = ''
    console.log(this.sid);

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




  canLogin() {
    return !!(this.sid && this.account && this.password)
  }


}