<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <NotifyAutoTest style="margin: 5px" :notifyProps="notifyProps"></NotifyAutoTest>
        <LampAutoTest style="margin: 5px" :lampProps="lampProps"></LampAutoTest>
        <SwipeAutoTest style="margin: 5px" :echartMsgs="echartProps"></SwipeAutoTest>
    </van-pull-refresh>
</template>

<script>
    import {line} from "/@/dictionary/dataDictionary.js"
    import {ref, reactive, watch, computed} from 'vue'
    import {Toast} from 'vant'
    import SwipeAutoTest from "/@/views/dialTest/autoTest/swipe/SwipeAutoTest.vue";
    import LampAutoTest from "/@/views/dialTest/autoTest/LampAutoTest.vue";
    import NotifyAutoTest from "/@/views/dialTest/autoTest/NotifyAutoTest.vue";

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
            let notifyProps = reactive({notifyData});

            // 指示灯信息
            const lampDatas = [{id: 'mobile', state: 0, msg: ''}
                , {id: 'unicom', state: 0, msg: ''}
                , {id: 'telecom', state: 0, msg: ''}
                , {id: 'domain', state: 0, msg: ''}]
            for (let i in lampDatas) {
                lampDatas[i].iconUrl = line[lampDatas[i].id].iconUrl
                lampDatas[i].name = line[lampDatas[i].id].name + lampDatas[i].msg
            }
            let lampProps = reactive({lampDatas})

            // 图表信息
            const echartDatas = {
                bar: {name: 'bar'},
                line: {name: 'line'}
            }
            const echartProps = reactive(echartDatas)

            // 下拉刷新
            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    Toast('刷新成功');
                    loading.value = false;
                }, 1000);
            };
            return {
                loading,
                onRefresh,
                notifyProps,
                lampProps,
                echartProps
            };
        }
    }
</script>

<style scoped>
</style>