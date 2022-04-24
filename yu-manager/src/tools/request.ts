import axios from 'axios'
import store from '@/store'
import { getToken, getSid } from './auth'
import router from '@/router'
import { ElMessage } from 'element-plus'

// create an axios instance
const service = axios.create({
  baseURL: '/api',
  // 因文件导入数据处理阶段耗时较久，故增加超时时长
  timeout: 900000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers!['token'] = getToken()!
    }
    // if (getSid()) {
    //   config.headers['sid'] = getSid()
    // }
    return config
  },
  error => {
    // do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  /**
   * Determine the request status by custom code
   */
  response => {
    const url = response.config.url
    const downUrlReg = /\/download/
    const exportUrlReg = /export/i
    const res = response.data
    if (!res.code) {
      /**
       * type:
       *    下载正常: application/octet-stream
       *    下载出错: application/json
       */
      if (res.type === 'application/json') {
        // console.log(response.data)
        // let blob = new Blob([response.data]);
        return Promise.reject(new Response(response.data).text())
      }
      if (url && (downUrlReg.test(url) || exportUrlReg.test(url))) {
        // 下载blob文件
        return response
      }
    }
    if (res.code === 666) {
      return res
    }
    if (res.code !== 200) {
      // 40005: Token expired;
      // 666 状态码对响应放行
      if (res.code === 40005) {
        // to re-login
        store.dispatch('user/resetToken').then(() => {
          router.replace({
            name: 'login',
            query: { redirect: router.currentRoute.fullPath }
          })
        })
      } else {
        ElMessage.error(res.msg)
        return Promise.reject(res)
      }
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

/* eslint-disable no-proto */
service.__proto__ = axios
/* eslint-enable */

export default service
