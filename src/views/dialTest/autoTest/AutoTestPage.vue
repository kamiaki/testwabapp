<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <NotifyAutoTest :notifyMsgs="notifyMsgs"></NotifyAutoTest>
        <SwipeAutoTest></SwipeAutoTest>
        <LampAutoTest></LampAutoTest>
    </van-pull-refresh>
</template>

<script>
    import {ref, reactive} from 'vue'
    import {Toast} from 'vant'
    import SwipeAutoTest from "/@/views/dialTest/autoTest/swipe/SwipeAutoTest.vue";
    import LampAutoTest from "/@/views/dialTest/autoTest/LampAutoTest.vue";
    import NotifyAutoTest from "/@/views/dialTest/autoTest/NotifyAutoTest.vue";

    export default {
        name: "AutoTestPage",
        components: {SwipeAutoTest, LampAutoTest, NotifyAutoTest},
        setup() {
            const loading = ref(false);
            const resultData = [{title: '标题1', msg: '消息1'}, {title: '标题2', msg: '消息2'}]
            const notifyMsgs = reactive(resultData);

            const onRefresh = () => {
                setTimeout(() => {
                    Toast('刷新成功');
                    loading.value = false;
                }, 1000);
            };
            return {
                loading,
                onRefresh,
                notifyMsgs
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