import {get, post} from '/@/utils/ajax/request'
import apiAuth from '/@/api/apiAuth'
import {line} from "/@/dictionary/dataDictionary.js"
import utils from 'aki_js_utils'

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
                , unicom: unicomData.aveTotalTimeConsumingList
                , telecom: telecomData.aveTotalTimeConsumingList
                , domain: domainNameData.aveTotalTimeConsumingList
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
    return Promise.reject(`findNetworkStatus, error: ${e}`)
})

// 通知告警信息
// alarmTime: "2021-10-14 08:20:35"
// alarmType: "异常"
// id: 605
// serverIp: "110.16.XXX.XXX"
// targetName: "域名网络"
// [[Prototype]]: Object
const selectTodayAlarmHistory = () => apiAuth.getToken().then(async token => {
    let result = null
    let error = null
    await get('/alarmHistory/selectTodayAlarmHistory', {}, {
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
        // 告警信息
        const notifyData = []
        for (let i = 0; i < result.length; i++) {
            const name = result[i].targetName
            const serverIp = result[i].serverIp
            const msg = result[i].alarmType
            const time = result[i].alarmTime
            const fullText = `${Number(i) + 1} ${name} ${serverIp} ${msg} ${time}`
            notifyData.push({fullText})
        }
        return Promise.resolve(notifyData)
    } else {
        return Promise.reject(error)
    }
}).catch((e) => {
    return Promise.reject(`selectTodayAlarmHistory, error: ${e}`)
})

//domain:
// authTimeConsuming: "0"
// code: "1"
// errorNum: "0"
// maxTimeConsuming: "60"
// minTimeConsuming: "34"
// netTimeConsuming: "0"
// nodeIp: "192.168.XXX.XXX"
// serverIp: "ma1.chnctid.XXX.XXX"
// successNum: "2"
// targetName: "域名网络"
// time: "2021-10-14 15:31:22"
// totalTimeConsuming: "47"
// variance: "13.0"
// [[Prototype]]: Object
const activeTesting = (threads, count) => apiAuth.getToken().then(async token => {
    let tableData = []
    let tmp = {}
    let arrayIndex = 0 // 数组计数
    let barV = {dataX: [0, 0, 0, 0]}
    let barH = {dataX: [0, 0, 0, 0]}
    let isSuccess = true
    for (let i in line) {
        let params = {targetName: line[i].targetName, threads: threads, count: count}
        await post('/network/v1/activeTesting', params, {
            showLoading: true, headers: {
                'Content-Type': 'application/json;charset:utf-8',
                'token': token
            }
        }).then(r => {
            let targetName = r.targetName
            let maxTimeConsuming = r.maxTimeConsuming
            let minTimeConsuming = r.minTimeConsuming
            let variance = r.variance
            let varianceStr = ''
            if (variance < 0) {
                varianceStr = '网络异常'
            } else if (variance >= 0 && variance < 100) {
                varianceStr = '网络通畅'
            } else if (variance >= 100 && variance < 200) {
                varianceStr = '网络质量较好'
            } else if (variance >= 200 && variance < 400) {
                varianceStr = '网络质量一般'
            } else if (variance >= 400 && variance < 500) {
                varianceStr = '网络质量较差'
            } else if (variance > 500) {
                varianceStr = '网络质量差'
            }
            let tableObj = {name: targetName, max: maxTimeConsuming, min: minTimeConsuming, level: varianceStr}
            tableData.push(tableObj)
            barH.dataX[arrayIndex] = r.successNum
            barV.dataX[arrayIndex] = r.totalTimeConsuming
        }).catch((e) => {
            isSuccess = false
        })
        arrayIndex++
    }
    tmp.echartData = {barH, barV}
    tmp.tableData = tableData
    if (isSuccess) {
        return Promise.resolve(tmp)
    } else {
        return Promise.reject('查询异常')
    }
}).catch((e) => {
    return Promise.reject(`activeTesting, error: ${e}`)
})

//code: 0
// count: 2017
// data: Array(8)
// 0:
// authTimeConsuming: "0"
// code: "1"
// errorNum: "0"
// id: 147946
// maxTimeConsuming: ""
// minTimeConsuming: ""
// netTimeConsuming: "0"
// nodeIp: "192.168.XXX.XXX"
// serverIp: "117.161.XXX.XXX"
// successNum: "10"
// targetName: "移动网络"
// time: "2021-10-14 17:38:50"
// totalTimeConsuming: "73"
// variance: ""
// selectResultByParamHavePaging
const selectResultByParamHavePaging = (formParms, testData) => apiAuth.getToken().then(async token => {
    let tableData = []
    let isSuccess = true
    const params = {
        startTime: formParms.start,
        endTime: formParms.end,
        networkType: formParms.myType,
        code: formParms.myState, // 0 失败 1 成功
        page: formParms.currentPage,
        limit: formParms.itemsPerPage
    }
    await post('/network/v1/selectResultByParamHavePaging', params, {
        showLoading: true, headers: {
            'Content-Type': 'application/json;charset:utf-8',
            'token': token
        }
    }).then(r => {
        formParms.totalItems = r.count
        const tmpData = r.data
        for (let i = 0; i < tmpData.length; i++) {
            const obj = tmpData[i]
            const objTable = {
                ip: obj.nodeIp,
                time: obj.time,
                totalTime: obj.totalTimeConsuming,
                state: obj.code,
                type: obj.targetName,
                targetIp: obj.serverIp,
                successCount: obj.successNum,
                failCount: obj.errorNum
            }
            tableData.push(objTable)
        }
        testData.tableData = tableData
    }).catch((e) => {
        isSuccess = false
    })
    if (isSuccess) {
        return Promise.resolve({})
    } else {
        return Promise.reject('查询异常')
    }
}).catch((e) => {
    return Promise.reject(`activeTesting, error: ${e}`)
})

// 对外暴露方法
export default {
    getTestResultGraphicData, findNetworkStatus,
    selectTodayAlarmHistory, activeTesting, selectResultByParamHavePaging
}
export {
    getTestResultGraphicData, findNetworkStatus,
    selectTodayAlarmHistory, activeTesting, selectResultByParamHavePaging
}
