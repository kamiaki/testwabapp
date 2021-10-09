<template>
    <FormManualTest :manualTestData="manualTestData"></FormManualTest>
    <van-pull-refresh v-model="loading" @refresh="onRefresh"
                      pulling-text="下拉即可拨测..."
                      loosing-text="释放即可拨测..."
                      loading-text="拨测中..."
    >
        <TableManualTest  style="margin:40px 5px" :manualTestData="manualTestData"></TableManualTest>
        <SwipeManualTest  style="margin:40px 5px"  :manualTestData="manualTestData"></SwipeManualTest>
    </van-pull-refresh>
</template>

<script>
    import {ref, reactive, watch, computed} from 'vue'
    import { Toast } from 'vant';
    import FormManualTest from '/@/views/dialTest/manualTest/FormManualTest.vue'
    import SwipeManualTest from '/@/views/dialTest/manualTest/swipe/SwipeManualTest.vue'
    import TableManualTest from '/@/views/dialTest/manualTest/TableManualTest.vue'
    import utils from 'aki_js_utils'

    export default {
        name: "ManualTestPage",
        components: {FormManualTest, SwipeManualTest, TableManualTest},
        setup() {
            const loading = ref(false);
            // form
            const form = {
                threadCount: 1,
                testCount: 2
            }
            // 图表信息
            const echartData = {
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
            const tableData = [
                {name: '移动网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
                {name: '联通网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
                {name: '电信网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
                {name: '域名网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
            ]
            const manualTestData = reactive({
                form: form,
                echartData: echartData,
                tableData: tableData
            })


            // 测试刷新数据
            function setEchartsData() {
                manualTestData.echartData.barV.dataX = [utils.randomFlow(0, 30, 0),
                    utils.randomFlow(0, 30, 0),
                    utils.randomFlow(0, 30, 0),
                    utils.randomFlow(0, 30, 0)]
                manualTestData.echartData.barH.dataX = [utils.randomFlow(0, manualTestData.form.testCount, 0),
                    utils.randomFlow(0, manualTestData.form.testCount, 0),
                    utils.randomFlow(0, manualTestData.form.testCount, 0),
                    utils.randomFlow(0, manualTestData.form.testCount, 0)]
                manualTestData.tableData = [
                    {name: '移动网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
                    {name: '联通网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
                    {name: '电信网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
                    {name: '域名网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
                ]
            }

            const onRefresh = () => {
                setTimeout(() => {
                    Toast(`线程数: ${manualTestData.form.threadCount}\r\n拨测数: ${manualTestData.form.testCount}\r\n拨测开始`);
                    loading.value = false;
                    setEchartsData()
                }, 1000);
            };

            return {
                loading,
                onRefresh,
                manualTestData
            };
        }
    }
</script>

<style scoped>

</style>