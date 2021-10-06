<template>
    <SwipeAutoTest></SwipeAutoTest>
    <LampAutoTest></LampAutoTest>
    <NotifyAutoTest></NotifyAutoTest>
</template>

<script>
    import {ref, reactive} from 'vue'
    import SwipeAutoTest from "/@/views/dialTest/autoTest/SwipeAutoTest.vue";
    import LampAutoTest from "/@/views/dialTest/autoTest/LampAutoTest.vue";
    import NotifyAutoTest from "/@/views/dialTest/autoTest/NotifyAutoTest.vue";

    export default {
        name: "AutoTestPage",
        components: {SwipeAutoTest, LampAutoTest, NotifyAutoTest}
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