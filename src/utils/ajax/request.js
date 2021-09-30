import axios from 'axios'
import { Loading, Message } from 'element-ui'
import { getBaseUrl, httpCode } from './baseConfig'
import akiutils from 'aki_js_utils'
import store from '@/vuex/vuexValues'// vuex

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
    let elementMsg = Loading.service({
      customClass: 'create-isLoading',
      spinner: 'el-icon-loading',
      text: '数据加载中...',
      target: '.Loading',
      background: 'rgba(0,38,255,0.1)'
    })
    elementMsgStack.push(elementMsg)
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
        Message({ message: msgText, type: 'warning' })
      }
    } else {
      if (!store.state.isTest) {
        Message({ message: msgText, type: 'error' })
      }
    }
    return Promise.reject(err)
  } else {
    let msgText
    if (!store.state.isTest) {
      msgText = '请求超时'
      Message({ message: msgText, type: 'error' })
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

/**
 * put 统一封装 config 可以写入配置
 */
const put = (url, data, config = {}) => {
  return initAxios({
    method: 'put',
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


/**
 * delete 统一封装 config 可以写入配置
 */
const DELETE = (url, data, config = {}) => {
  return initAxios({
    method: 'delete',
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


/**
 * 上传文件
 */
const upload = (url, data) => {
  axios({
    method: "POST",
    url: getBaseUrl() + url,
    headers: {
      'Content-Type': "multipart/form-data",
    },
    data: data,
    params: data,
    responseType: 'blob'
  }).then(response => {
    download(response, data)
  })
}

// 下载文件
function download (res) {
  let blob = new Blob([res.data], { type: "application/vnd.ms-excel" });//type是文件类，详情可以参阅blob文件类型
  // 创建新的URL并指向File对象或者Blob对象的地址
  const blobURL = window.URL.createObjectURL(blob)
  // 创建a标签，用于跳转至下载链接
  const tempLink = document.createElement('a')
  tempLink.style.display = 'none'
  tempLink.href = blobURL
  tempLink.setAttribute('download', decodeURI(res.headers['content-disposition'].split(';')[1].split('=')[1]))
  // 兼容：某些浏览器不支持HTML5的download属性
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank')
  }
  // 挂载a标签
  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
  // 释放blob URL地址
  window.URL.revokeObjectURL(blobURL)
}


// 从网页获取一个文件, 用于输出excel文件
const getFile = (url, paramsObj) => {
  let params = akiutils.objToUrl(paramsObj)
  let a = document.createElement('a')
  a.href = getBaseUrl() + url + '?' + params
  a.click()
}

export default { get, post, getFile, put, DELETE, upload }
export { get, post, getFile, put, DELETE, upload }
