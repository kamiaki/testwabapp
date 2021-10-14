import {reactive, watch} from 'vue'
import utils from 'aki_js_utils'
import {Toast} from 'vant'
import store from '/@/vuex/vuexValues'// vuex
import apiDialTest from '/@/api/apiDialTest'

// 设置初始化数据
const setDefaultManualTestData = function () {
    // form
    const form = {
        threadCount: 1,
        testCount: 2
    }
    // 图表信息
    const echartData = {
        barV: {
            dataX: [0, 0, 0, 0]
        },
        barH: {
            dataX: [0, 0, 0, 0]
        },
    }
    // 表格
    const tableData = [
        {name: '移动网络', max: 0, min: 0, level: '网络通畅'},
        {name: '联通网络', max: 0, min: 0, level: '网络通畅'},
        {name: '电信网络', max: 0, min: 0, level: '网络通畅'},
        {name: '域名网络', max: 0, min: 0, level: '网络通畅'},
    ]
    const tmp = {
        form: form,
        echartData: echartData,
        tableData: tableData
    }
    const manualTestData = reactive(tmp)
    return manualTestData
}
// 设置测试数据
const setTestManualTestData = function (manualTestData) {
    // 图表信息
    manualTestData.echartData = {
        barV: {
            dataX: [utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0)]
        },
        barH: {
            dataX: [utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0),
                utils.randomFlow(0, 30, 0)]
        },
    }
    // 表格
    manualTestData.tableData = [
        {name: '移动网络', max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
        {name: '联通网络', max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
        {name: '电信网络', max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
        {name: '域名网络', max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
    ]
}
// 设置真正数据
const setManualTestData = function (manualTestData) {
    apiDialTest.activeTesting(
        manualTestData.form.threadCount,
        manualTestData.form.testCount
    ).then(res => {
        manualTestData.tableData = res.tableData
        manualTestData.echartData = res.echartData
        Toast('自动刷新成功!');
    }).catch((e) => {
        Toast(`自动刷新失败: ${e}`)
    })
}

export default function () {
    const manualTestData = setDefaultManualTestData()
    // 测试刷新数据
    const refreshManualTestData = function () {
        if (store.state.isTest) {
            setTestManualTestData(manualTestData)
        } else {
            setManualTestData(manualTestData)
        }
    }
    // watch
    watch(manualTestData.form, () => {
        refreshManualTestData()
    })
    return {manualTestData, refreshManualTestData}
}