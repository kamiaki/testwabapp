import axios from 'axios'
import { getBaseUrl, httpCode } from './baseConfig'
import store from '/@/vuex/vuexValues'// vuex
import {Toast} from 'vant'

// 进度条窗口 axios 配置参数 showLoading:true 然后dom加入Loading类，就可以使用了
let elementMsgStack = []

const timeout = () => {
  if (store.state.isTest) {
    return 1000 * 1
  } else {
    return 1000 * 60 * 2
  }
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
    Toast('loading....')
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
      if (!store.state.isTest) {
        msgText = '操作权限不足'
        Toast(msgText)
      }
    } else {
      if (!store.state.isTest) {
        Toast(msgText)
      }
    }
    return Promise.reject(err)
  } else {
    let msgText
    if (!store.state.isTest) {
      msgText = '请求超时'
      Toast(msgText)
    }
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
