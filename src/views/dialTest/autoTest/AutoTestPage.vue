<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <NotifyAutoTest style="margin:20px 5px" :autoTestData="autoTestData"></NotifyAutoTest>
        <LampAutoTest style="margin:20px 5px" :autoTestData="autoTestData"></LampAutoTest>
        <SwipeAutoTest style="margin:20px 5px" :autoTestData="autoTestData"></SwipeAutoTest>
    </van-pull-refresh>
</template>

<script>
    import {line} from "/@/dictionary/dataDictionary.js"
    import {ref, reactive, watch, computed} from 'vue'
    import {Toast} from 'vant'
    import SwipeAutoTest from "/@/views/dialTest/autoTest/swipe/SwipeAutoTest.vue";
    import LampAutoTest from "/@/views/dialTest/autoTest/LampAutoTest.vue";
    import NotifyAutoTest from "/@/views/dialTest/autoTest/NotifyAutoTest.vue";
    import utils from 'aki_js_utils'

    export default {
        name: "AutoTestPage",
        components: {SwipeAutoTest, LampAutoTest, NotifyAutoTest},
        setup() {
            // 告警信息
            const notifyData = [
                {
                    id: 'uuid',
                    type: 'domain',
                    state: 1,
                    msg: '异常',
                    time: '2021-10-08 09:39:57'
                }, {
                    id: 'uuid',
                    type: 'domain',
                    state: 0,
                    msg: '恢复',
                    time: '2021-10-08 09:49:57'
                }]
            for (let i in notifyData) {
                const name = line[notifyData[i].type].name
                const msg = notifyData[i].msg
                const time = notifyData[i].time
                const fullText = `${Number(i) + 1} ${name} ${msg} ${time}`
                notifyData[i].fullText = fullText
            }
            // 指示灯信息
            const lampData = [{id: 'mobile', state: 0, msg: ''}
                , {id: 'unicom', state: 1, msg: ''}
                , {id: 'telecom', state: 0, msg: ''}
                , {id: 'domain', state: 0, msg: ''}]
            for (let i in lampData) {
                lampData[i].iconUrl = line[lampData[i].id].iconUrl
                lampData[i].name = line[lampData[i].id].name + lampData[i].msg
            }
            // 图表信息
            const echartData = {
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

            const autoTestData = reactive(
                {
                    notifyData: notifyData,
                    lampData: lampData,
                    echartData: echartData
                }
            )

            // 测试刷新数据
            function setEchartsData() {
                autoTestData.echartData.bar.dataX = [utils.randomFlow(0, 30, 0),
                    utils.randomFlow(0, 30, 0),
                    utils.randomFlow(0, 30, 0),
                    utils.randomFlow(0, 30, 0)]
                autoTestData.echartData.line = {
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
                const lampData = [{id: 'mobile', state: utils.randomFlow(0, 1, 0), msg: ''}
                    , {id: 'unicom', state: utils.randomFlow(0, 1, 0), msg: ''}
                    , {id: 'telecom', state: utils.randomFlow(0, 1, 0), msg: ''}
                    , {id: 'domain', state: utils.randomFlow(0, 1, 0), msg: ''}]
                for (let i in lampData) {
                    lampData[i].iconUrl = line[lampData[i].id].iconUrl
                    lampData[i].name = line[lampData[i].id].name + lampData[i].msg
                }
                autoTestData.lampData = lampData
            }

            // 下拉刷新
            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    setEchartsData()
                    Toast('刷新成功');
                    loading.value = false;
                }, 1000);
            };
            return {
                loading,
                onRefresh,
                autoTestData
            };
        }
    }
</script>

<style scoped>
</style>