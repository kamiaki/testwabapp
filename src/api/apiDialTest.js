import {get} from '/@/utils/ajax/request'
import apiAuth from '/@/api/apiAuth'
import {line} from "/@/dictionary/dataDictionary.js"

const getTestResultGraphicData = () => apiAuth.getToken().then(async token => {
    let result = null
    let error = null
    await get('/network/v1/getTestResultGraphicData', {}, {
        params: null, showLoading: true, headers: {
            'Content-Type': 'application/json;charset:utf-8',
            'token': token
        }
    }).then(r => {
        result = r
    }).catch((e) => {
        error = e
    })
    if (!error) {
        const domainNameData = result.domainNameData
        const mobileData = result.mobileData
        const telecomData = result.telecomData
        const unicomData = result.unicomData
        let obj = {
            bar: {
                dataX: [
                    mobileData.aveTotalTimeConsuming,
                    unicomData.aveTotalTimeConsuming,
                    telecomData.aveTotalTimeConsuming,
                    domainNameData.aveTotalTimeConsuming,
                ]
            },
            line: {
                xLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
                    , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                mobile: mobileData.aveTotalTimeConsumingList
                ,unicom: unicomData.aveTotalTimeConsumingList
                ,telecom: telecomData.aveTotalTimeConsumingList
                ,domain: domainNameData.aveTotalTimeConsumingList
            }
        }
        return Promise.resolve(obj)
    } else {
        return Promise.reject(error)
    }
}).catch((e) => {
    return Promise.reject(`getTestResultGraphicData, error: ${e}`)
})

//     public String CONNECT = "connect";
//     public String DISCONNECT = "disconnect";
// domainNameStatus: "connect"
// mobileStatus: "connect"
// telecomStatus: "connect"
// unicomStatus: "connect"
const findNetworkStatus = () => apiAuth.getToken().then(async token => {
    let result = null
    let error = null
    await get('/network/v1/findNetworkStatus', {}, {
        params: null, showLoading: true, headers: {
            'Content-Type': 'application/json;charset:utf-8',
            'token': token
        }
    }).then(r => {
        result = r
    }).catch((e) => {
        error = e
    })
    if (!error) {
        const lampData = [
            {id: 'mobile', state: result.mobileStatus, msg: ''}
            , {id: 'unicom', state: result.unicomStatus, msg: ''}
            , {id: 'telecom', state: result.telecomStatus, msg: ''}
            , {id: 'domain', state: result.domainNameStatus, msg: ''}
        ]
        for (let i in lampData) {
            lampData[i].iconUrl = line[lampData[i].id].iconUrl
            lampData[i].name = line[lampData[i].id].name
        }
        return Promise.resolve(lampData)
    } else {
        return Promise.reject(error)
    }
}).catch((e) => {
    return Promise.reject(`getTestResultGraphicData, error: ${e}`)
})
// 对外暴露方法
export default {getTestResultGraphicData, findNetworkStatus}
export {getTestResultGraphicData, findNetworkStatus}
