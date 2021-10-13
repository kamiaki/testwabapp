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
    import {useStore} from 'vuex'
    import SwipeAutoTest from "/@/views/dialTest/autoTest/swipe/SwipeAutoTest.vue";
    import LampAutoTest from "/@/views/dialTest/autoTest/LampAutoTest.vue";
    import NotifyAutoTest from "/@/views/dialTest/autoTest/NotifyAutoTest.vue";
    import autoTestDefault from './autoTestDefault'
    import apiDialTest from '/@/api/apiDialTest'


    export default {
        name: "AutoTestPage",
        components: {SwipeAutoTest, LampAutoTest, NotifyAutoTest},
        setup() {
            const store = useStore()
            const autoTestData = autoTestDefault.setDefaultAutoTestData()

            // 测试刷新数据
            function setEchartsData() {
                if (!store.state.isTest) {
                    autoTestDefault.setTestAutoTestData(autoTestData)
                } else {
                    apiDialTest.getTestResultGraphicData().then(res => {
                        autoTestData.echartData = res
                    }).catch((e) => {
                        Toast(`获取图表失败: ${e}`)
                    })
                }
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