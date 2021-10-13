<template>
    <van-pull-refresh v-model="loading" :head-height="80" @refresh="onRefresh">
        <NotifyAutoTest style="margin:0px 5px 20px" :autoTestData="autoTestData"></NotifyAutoTest>
        <LampAutoTest style="margin:20px 5px" :autoTestData="autoTestData"></LampAutoTest>
        <SwipeAutoTest style="margin:20px 5px" :autoTestData="autoTestData"></SwipeAutoTest>
    </van-pull-refresh>
</template>

<script>
    import {ref, reactive} from 'vue'
    import {Toast} from 'vant'
    import SwipeAutoTest from "/@/views/dialTest/autoTest/swipe/SwipeAutoTest.vue";
    import LampAutoTest from "/@/views/dialTest/autoTest/LampAutoTest.vue";
    import NotifyAutoTest from "/@/views/dialTest/autoTest/NotifyAutoTest.vue";
    import autoTestDefault from './autoTestDefault'


    export default {
        name: "AutoTestPage",
        components: {SwipeAutoTest, LampAutoTest, NotifyAutoTest},
        setup() {
            let {autoTestData, refreshAutoTestData} = autoTestDefault()
            // 下拉刷新
            const loading = ref(false);
            const onRefresh = () => {
                refreshAutoTestData()
                loading.value = false;
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