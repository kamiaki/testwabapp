<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <p>刷新次数: {{ count }}</p>
        <SwipeAutoTest></SwipeAutoTest>
        <LampAutoTest></LampAutoTest>
        <NotifyAutoTest></NotifyAutoTest>
    </van-pull-refresh>
</template>

<script>
    import {ref, reactive} from 'vue'
    import { Toast } from 'vant'
    import SwipeAutoTest from "/@/views/dialTest/autoTest/SwipeAutoTest.vue";
    import LampAutoTest from "/@/views/dialTest/autoTest/LampAutoTest.vue";
    import NotifyAutoTest from "/@/views/dialTest/autoTest/NotifyAutoTest.vue";

    export default {
        name: "AutoTestPage",
        components: {SwipeAutoTest, LampAutoTest, NotifyAutoTest},
        setup() {
            const count = ref(0);
            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    Toast('刷新成功');
                    loading.value = false;
                    count.value++;
                }, 1000);
            };
            return {
                count,
                loading,
                onRefresh,
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