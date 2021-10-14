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
const setDefaultTestData = function () {
    const tableDataTmp = []
    for (let i = 0; i < 20; i++) {
        tableDataTmp.push(
            {
                ip: '11.11.11.11',
                time: '2021-11-11',
                totalTime: utils.randomFlow(1, 30, 0),
                state: utils.randomFlow(0, 1, 0),
                type: '移动网络',
                targetIp: '11.11.11.11',
                successCount: utils.randomFlow(0, 5, 0),
                failCount: utils.randomFlow(0, 5, 0)
            }
        )
    }
    const tmp = {tableData: tableDataTmp}
    const testData = reactive(tmp)
    return testData
}
// 设置测试数据
const setTestTestData = function (formParms, testData) {
    const tableDataTmp = []
    for (let i = 0; i < 20; i++) {
        tableDataTmp.push(
            {
                ip: '11.11.11.11',
                time: '2021-11-11',
                totalTime: utils.randomFlow(1, 30, 0),
                state: utils.randomFlow(0, 1, 0),
                type: '移动网络',
                targetIp: '11.11.11.11',
                successCount: utils.randomFlow(0, 5, 0),
                failCount: utils.randomFlow(0, 5, 0)
            }
        )
    }
    testData.tableData = tableDataTmp
}

// 设置真正数据
const setTestData = function (formParms, testData) {
    Toast('查询后台数据了')
}

export default function () {
    const formParms = setFormParms()
    const testData = setDefaultTestData()
    // 测试刷新数据
    const refreshTestData = function () {
        if (store.state.isTest) {
            setTestTestData(formParms, testData)
        } else {
            setTestData(formParms, testData)
        }
    }
    // 点击搜索
    function doSearch() {
        refreshTestData()
        formParms.currentPage = 0
    }
    // 点击分页
    function changePagination() {
        refreshTestData()
    }
    return {formParms, testData, doSearch, changePagination}
}