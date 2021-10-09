<template>
    <van-swipe :loop="false"
               indicator-color="white">
        <van-swipe-item>
            <BarAutoTest :autoTestData="autoTestData"
                         :style="{width: '100%', height: '400px'}"
            ></BarAutoTest>
        </van-swipe-item>
        <van-swipe-item>
            <LineAutoTest :autoTestData="autoTestData"
                          :style="{width: '100%', height: '400px'}"
            ></LineAutoTest>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    import BarAutoTest from "/@/views/dialTest/autoTest/swipe/BarAutoTest.vue";
    import LineAutoTest from "/@/views/dialTest/autoTest/swipe/LineAutoTest.vue";

    export default {
        name: "SwipeAutoTest",
        components: {BarAutoTest, LineAutoTest},
        props: ['autoTestData'],
        setup(props) {
            return {
                autoTestData: props.autoTestData
            }
        }
    }
</script>

<style scoped>

</style>