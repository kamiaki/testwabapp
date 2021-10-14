import {reactive, onMounted, onBeforeUnmount} from 'vue'
import {line} from "/@/dictionary/dataDictionary.js"
import utils from 'aki_js_utils'
import apiDialTest from '/@/api/apiDialTest'
import {Toast} from 'vant'
import store from '/@/vuex/vuexValues'

// vuex

// 设置初始化数据
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
// 设置测试数据
const setTestAutoTestData = function (autoTestData) {
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
    autoTestData.notifyData = notifyData
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
    autoTestData.lampData = lampData
    // 图表信息
    autoTestData.echartData = {
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
// 设置真正数据
const setAutoTestData = function (autoTestData) {
    apiDialTest.selectTodayAlarmHistory().then(res => {
        autoTestData.notifyData = res
        Toast('告警通知刷新成功!');
    }).catch((e) => {
        Toast(`告警通知刷新失败: ${e}`)
    })
    apiDialTest.findNetworkStatus().then(res => {
        autoTestData.lampData = res
        Toast('网络状态指示灯刷新成功!');
    }).catch((e) => {
        Toast(`网络状态指示灯刷新失败: ${e}`)
    })
    apiDialTest.getTestResultGraphicData().then(res => {
        autoTestData.echartData = res
        Toast('图表刷新成功!');
    }).catch((e) => {
        Toast(`图表刷新失败: ${e}`)
    })
}

export default function () {
    // 输出参数
    const autoTestData = setDefaultAutoTestData()
    // 测试刷新数据
    const refreshAutoTestData = function () {
        if (store.state.isTest) {
            setTestAutoTestData(autoTestData)
        } else {
            setAutoTestData(autoTestData)
        }
    }
    // 循环
    const loopTime = 60 * 1000
    let loopNum = 0
    const loop = function () {
        loopNum = setTimeout(() => {
            refreshAutoTestData()
            loop()
        }, loopTime)
    }
    // 启动循环
    onMounted(() => {
        refreshAutoTestData()
        loop()
    })
    // 结束循环
    onBeforeUnmount(() => {
        clearTimeout(loopNum)
    })

    return {autoTestData, refreshAutoTestData}
}