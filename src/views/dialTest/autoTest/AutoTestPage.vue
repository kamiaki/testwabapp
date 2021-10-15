<template>
    <van-pull-refresh v-model="loading" :head-height="80" @refresh="onRefresh">
        <NotifyAutoTest style="margin:20px 5px " :notifyData="autoTestData.notifyData"></NotifyAutoTest>
        <LampAutoTest style="margin:20px 5px" :autoTestData="autoTestData"></LampAutoTest>
        <SwipeAutoTest style="margin:20px 5px" :autoTestData="autoTestData"></SwipeAutoTest>
    </van-pull-refresh>
</template>

<script>
    import {ref, reactive} from 'vue'
    import SwipeAutoTest from "/@/views/dialTest/autoTest/swipe/SwipeAutoTest.vue";
    import LampAutoTest from "/@/views/dialTest/autoTest/LampAutoTest.vue";
    import NotifyAutoTest from "/@/views/dialTest/autoTest/NotifyAutoTest.vue";
    import useTestDefault from './useTestDefault'


    export default {
        name: "AutoTestPage",
        components: {SwipeAutoTest, LampAutoTest, NotifyAutoTest},
        setup() {
            // 获取数据 以及 刷新数据
            let {autoTestData, refreshAutoTestData} = useTestDefault()
            // 下拉刷新
            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    refreshAutoTestData()
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