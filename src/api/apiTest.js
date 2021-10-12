import {get} from '/@/utils/ajax/request'

// 读取大标题数据
const getTestResultGraphicData = (params, config) => get('/network/v1/getTestResultGraphicData', params,
  {params: null, showLoading: true, ...config})

// 对外暴露方法
export default {getTestResultGraphicData}
export {getTestResultGraphicData}
