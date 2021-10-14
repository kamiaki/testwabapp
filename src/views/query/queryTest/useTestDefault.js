import {reactive, watch, onMounted} from 'vue'
import utils from 'aki_js_utils'
import {Toast} from 'vant'
import store from '/@/vuex/vuexValues'// vuex
import apiDialTest from '/@/api/apiDialTest'

// 设置初始化数据 form
const setFormParms = function () {
    // form
    const formParms = reactive({
        start: '', end: '', myType: '', myState: '',
        currentPage: 0, totalItems: 0, itemsPerPage: 20
    })
    return formParms
}
// 设置初始化数据
const setDefaultTestData = function () {
    const tableDataTmp = []
    const tmp = {tableData: tableDataTmp}
    const testData = reactive(tmp)
    return testData
}
// 设置测试数据
const setTestTestData = function (formParms, testData) {
    formParms.totalItems = 100
    formParms.itemsPerPage = 20
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
    apiDialTest.selectResultByParamHavePaging(formParms, testData).then(res => {
        Toast('查询成功!');
    }).catch((e) => {
        Toast(`查询失败: ${e}`)
    })
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
    // 启动
    onMounted(() => {
        refreshTestData()
    })
    return {formParms, testData, doSearch, changePagination}
}