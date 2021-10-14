import {reactive, watch} from 'vue'
import utils from 'aki_js_utils'
import {Toast} from 'vant'
import store from '/@/vuex/vuexValues'// vuex

// 设置初始化数据
const setDefaultAlertData = function () {
    const tableDataTmp = []
    for (let i = 0; i < 20; i++) {
        tableDataTmp.push({
            time: '2021-11-11',
            state: utils.randomFlow(0, 1, 0),
            type: '移动网络',
            targetIp: '11.11.11.11'
        })
    }
    const tmp = {tableData: tableDataTmp}
    const alertData = reactive(tmp)
    return alertData
}
// 设置测试数据
const setTestAlertData = function (alertData) {
    const tableDataTmp = []
    for (let i = 0; i < 20; i++) {
        tableDataTmp.push({
            time: '2021-11-11',
            state: utils.randomFlow(0, 1, 0),
            type: '移动网络',
            targetIp: '11.11.11.11'
        })
    }
    alertData.tableData = tableDataTmp
}

// 设置真正数据
const setAlertData = function (alertData) {
    Toast('查询后台数据了')
}

export default function () {
    const formParms = reactive({
        start: 0, end: 0, myType: '', myState: '',
        currentPage: 0, totalItems: 24, itemsPerPage: 5
    })

    const alertData = setDefaultAlertData()
    // 测试刷新数据
    const refreshAlertData = function () {
        if (store.state.isTest) {
            setTestAlertData(alertData)
        } else {
            setAlertData(alertData)
        }
    }

    watch(() => formParms.currentPage, () => {
        console.info('点击分页')
    })

    return {formParms, alertData, refreshAlertData}
}