import {reactive} from 'vue'
import {line} from "/@/dictionary/dataDictionary.js"
import utils from 'aki_js_utils'

const setDefaultAutoTestData = function () {
    const tmp = {
        notifyData: [{
            id: 'xxxx',
            type: 'unicom',
            state: 0,
            time: 'xxxx-xx-xx xx:xx:xx',
            fullText: 'xxxx'
        }],
        lampData: [
            {id: 'mobile', state: 1, msg: '', iconUrl: '', name: 'xx'}
            , {id: 'unicom', state: 1, msg: '', iconUrl: '', name: 'xx'}
            , {id: 'telecom', state: 1, msg: '', iconUrl: '', name: 'xx'}
            , {id: 'domain', state: 1, msg: '', iconUrl: '', name: 'xx'}
        ],
        echartData: {
            bar: {
                dataX: [0, 0, 0, 0]
            },
            line: {
                xLabel: [1, 2, 3, 4, 5, 6],
                mobile: [0, 0, 0, 0, 0, 0],
                unicom: [0, 0, 0, 0, 0, 0],
                telecom: [0, 0, 0, 0, 0, 0],
                domain: [0, 0, 0, 0, 0, 0]
            }
        }
    }
    const autoTestData = reactive(tmp)
    return autoTestData
}

const setTestAutoTestData = function (data) {
    // 告警信息
    const notifyData = []
    for (let i = 0; i < 10; i++) {
        const obj = {
            id: new Date().getTime(),
            type: utils.randomFlow(0, 1, 0) === 0 ? 'mobile' : 'unicom',
            state: utils.randomFlow(0, 1, 0),
            time: utils.dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss')
        }
        const name = line[obj.type].name
        const msg = obj.state === 0 ? '恢复' : '正常'
        const time = obj.time
        const fullText = `${Number(i) + 1} ${name} ${msg} ${time}`
        obj.fullText = fullText
        notifyData.push(obj)
    }
    data.notifyData = notifyData
    // 指示灯信息
    const lampData = [
        {id: 'mobile', state: utils.randomFlow(0, 1, 0), msg: ''}
        , {id: 'unicom', state: utils.randomFlow(0, 1, 0), msg: ''}
        , {id: 'telecom', state: utils.randomFlow(0, 1, 0), msg: ''}
        , {id: 'domain', state: utils.randomFlow(0, 1, 0), msg: ''}
    ]
    for (let i in lampData) {
        lampData[i].iconUrl = line[lampData[i].id].iconUrl
        lampData[i].name = line[lampData[i].id].name
    }
    data.lampData = lampData
    // 图表信息
    data.echartData = {
        bar: {
            dataX: [utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0)]
        },
        line: {
            xLabel: [1, 2, 3, 4, 5, 6],
            mobile: [utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0)],
            unicom: [utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0)],
            telecom: [utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0)],
            domain: [utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0)],
        }
    }
}

export default {setDefaultAutoTestData, setTestAutoTestData}
export {setDefaultAutoTestData, setTestAutoTestData}