import {get, post} from '/@/utils/ajax/request'
import authorizationUtil from "/@/utils/authorizationUtil";
import {Toast} from 'vant'

// 读取大标题数据
const getToken = async () => await post('/user/v1/login', null,
    {
        params: null, showLoading: true, headers: {
            'userName': authorizationUtil.encryption('admin'),
            'passWord': '915d141859745d44a6011c5f30ddbe4a',
        }
    }).then(result => {
    if (result.success) {
        return Promise.resolve(result.token)
    } else {
        return Promise.reject(`error: ${result.message}`)
    }
}).catch((e) => {
    Toast(`获取token异常${e}`)
})

// 对外暴露方法
export default {getToken}
export {getToken}
