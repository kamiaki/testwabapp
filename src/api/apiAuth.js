import {get, post} from '/@/utils/ajax/request'
import authorizationUtil from "/@/utils/authorizationUtil";
import {Toast} from 'vant'

// admin => 98,101,110,106,111
// 'Kpd4@B2IHpHK96cs' + 'guotouyingxin' => CDD979CECA4A2741EC1318FE7AF7EC56
// https://www.cmd5.com/
// 读取大标题数据
const getToken = () => post('/user/v1/login', null,
    {
        params: null, showLoading: true, headers: {
            'userName': authorizationUtil.encryption('admin'),
            'passWord': 'CDD979CECA4A2741EC1318FE7AF7EC56',
        }
    }).then(result => {
    if (result.success) {
        return Promise.resolve(result.token)
    } else {
        return Promise.reject(`error: ${result.message}`)
    }
}).catch((e) => {
    console.info(e)
    Toast(`获取token异常${e}`)
})

// 对外暴露方法
export default {getToken}
export {getToken}
