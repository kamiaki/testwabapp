<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <NotifyAutoTest :notifyMsgs="notifyMsgs"></NotifyAutoTest>
        <SwipeAutoTest :echartMsgs="echartMsgs"></SwipeAutoTest>
        <LampAutoTest :lampMsgs="lampMsgs"></LampAutoTest>
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
            const resultData = [{title: '标题1', msg: '消息1'}, {title: '标题2', msg: '消息2'}]
            const notifyMsgs = reactive(resultData);
            // 指示灯信息
            const lampDatas = [{title: '移动', state: 0, msg: ''}
                , {title: '联通', state: 0, msg: ''}
                , {title: '电信', state: 0, msg: ''}
                , {title: '域名', state: 0, msg: ''}]
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