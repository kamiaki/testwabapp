/**
 * 获取基本url
 */
const getBaseUrl = () => {
  const URL_BASE_DEV = '/test' // 本地调试
  const URL_BAES_PRO = '/test/test' // nginx发布
  let baseUrl
  let ENV = process.env.NODE_ENV
  if (ENV === 'development') {
    baseUrl = URL_BASE_DEV
  } else if (ENV === 'debug') {
    baseUrl = URL_BASE_DEV
  } else if (ENV === 'production') {
    baseUrl = URL_BAES_PRO
  } else {
    baseUrl = URL_BASE_DEV
  }
  return baseUrl
}

/**
 * http状态码信息
 */
const httpCode = {
  400: '400,请求参数错误',
  403: '403,权限不足',
  404: '404,请求资源未找到',
  500: '500,内部服务器错误',
  501: '501,服务器不支持该请求中使用的方法',
  502: '502,网关错误',
  504: '504,网关超时'
}

export default {getBaseUrl, httpCode}
export {getBaseUrl, httpCode}
