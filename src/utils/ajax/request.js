import axios from 'axios'
import { getBaseUrl, httpCode } from './baseConfig'
import store from '/@/vuex/vuexValues'// vuex

console.info(store.state.bigTitle)
// 进度条窗口 axios 配置参数 showLoading:true 然后dom加入Loading类，就可以使用了
let elementMsgStack = []

const timeout = () => {
    return 1000 * 5
}

/**
 * 创建axios
 */
const initAxios = axios.create({
  timeout: timeout(),
  baseURL: getBaseUrl()
})

/**
 * 前置拦截
 */
initAxios.interceptors.request.use(config => {
  if (config.showLoading) {
    alert('loading....')
  }
  return config
}, err => {
  return Promise.reject(err)
})

/**
 * 后置拦截
 */
initAxios.interceptors.response.use(response => {
  let elementMsg = elementMsgStack.shift()
  if (elementMsg) elementMsg.close()
  return Promise.resolve(response.data)
}, err => {
  let elementMsg = elementMsgStack.shift()
  if (elementMsg) elementMsg.close()
  if (err.response) {
    let msgText = err.response.status in httpCode ? httpCode[err.response.status] : err.response.data.message
    if (err.response.status === 403) {
        msgText = '操作权限不足'
        console.info({ message: msgText, type: 'warning' })
    } else {
        console.info({ message: msgText, type: 'error' })
    }
    return Promise.reject(err)
  } else {
    let msgText
      msgText = '请求超时'
      console.info({ message: msgText, type: 'error' })
    return Promise.reject(new Error(msgText))
  }
})

/**
 * get 统一封装 config 可以写入配置
 */
const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    initAxios({
      method: 'get',
      headers: { 'Content-Type': 'text/html;charset:utf-8' },
      url,
      params,
      showLoading: false,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * post 统一封装 config 可以写入配置
 */
const post = (url, data, config = {}) => {
  return initAxios({
    method: 'post',
    headers: { 'Content-Type': 'application/json;charset:utf-8' },
    url,
    data,
    params: data,
    showLoading: false,
    ...config
  }).then(response => {
    return Promise.resolve(response)
  }).catch(error => {
    return Promise.reject(error)
  })
}


export default { get, post}
export { get, post}
