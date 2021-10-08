<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <NotifyAutoTest style="margin: 5px" :notifyMsgs="notifyMsgs"></NotifyAutoTest>
        <LampAutoTest style="margin: 5px" :lampMsgs="lampMsgs"></LampAutoTest>
        <SwipeAutoTest style="margin: 5px" :echartMsgs="echartMsgs"></SwipeAutoTest>
    </van-pull-refresh>
</template>

<script>
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
            const resultData = [
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
            const notifyMsgs = reactive(resultData);
            // 指示灯信息
            const lampDatas = [{id: 'mobile', state: 0, msg: ''}
                , {id: 'unicom', state: 0, msg: ''}
                , {id: 'telecom', state: 0, msg: ''}
                , {id: 'domain', state: 0, msg: ''}]
            const lampMsgs = reactive(lampDatas)
            // 图表信息
            const echartDatas = {
                bar: {name: 'bar'},
                line: {name: 'line'}
            }
            const echartMsgs = reactive(echartDatas)

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
                notifyMsgs,
                lampMsgs,
                echartMsgs
            };
        }
    }
</script>

<style scoped>
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
</style>