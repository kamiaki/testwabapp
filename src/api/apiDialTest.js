import {get} from '/@/utils/ajax/request'
import apiAuth from '/@/api/apiAuth'

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
                    domainNameData.aveTotalTimeConsuming,
                    mobileData.aveTotalTimeConsuming,
                    telecomData.aveTotalTimeConsuming,
                    unicomData.aveTotalTimeConsuming,
                ]
            },
            line: {
                xLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
                    , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                mobile: domainNameData.aveTotalTimeConsumingList
                ,unicom: mobileData.aveTotalTimeConsumingList
                ,telecom: telecomData.aveTotalTimeConsumingList
                ,domain: unicomData.aveTotalTimeConsumingList
            }
        }
        return Promise.resolve(obj)
    } else {
        return Promise.reject(error)
    }
}).catch((e) => {
    return Promise.reject(`getTestResultGraphicData, error: ${e}`)
})

// 对外暴露方法
export default {getTestResultGraphicData}
export {getTestResultGraphicData}
