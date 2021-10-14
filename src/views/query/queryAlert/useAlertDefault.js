import {reactive, watch} from 'vue'
import utils from 'aki_js_utils'
import {Toast} from 'vant'
import store from '/@/vuex/vuexValues'// vuex

// 设置初始化数据 form
const setFormParms = function () {
    // form
    const formParms = reactive({
        start: 0, end: 0, myType: '', myState: '',
        currentPage: 0, totalItems: 100, itemsPerPage: 8
    })
    return formParms
}
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
const setTestAlertData = function (formParms, alertData) {
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
const setAlertData = function (formParms, alertData) {
    Toast('查询后台数据了')
}

export default function () {
    const formParms = setFormParms()
    const alertData = setDefaultAlertData()
    // 测试刷新数据
    const refreshAlertData = function () {
        if (store.state.isTest) {
            setTestAlertData(formParms, alertData)
        } else {
            setAlertData(formParms, alertData)
        }
    }
    // 点击搜索
    function doSearch() {
        refreshAlertData()
        formParms.currentPage = 0
    }
    // 点击分页
    function changePagination() {
        refreshAlertData()
    }
    return {formParms, alertData, doSearch, changePagination}
}