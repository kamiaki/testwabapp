<template>
    <van-swipe class="my-swipe"
               :autoplay="3000"
               indicator-color="white">
        <van-swipe-item>
            <BarAutoTest :barData="barData"></BarAutoTest>
        </van-swipe-item>
        <van-swipe-item>
            <LineAutoTest :lineData="lineData"></LineAutoTest>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    import BarAutoTest from "/@/views/dialTest/autoTest/swipe/BarAutoTest.vue";
    import LineAutoTest from "/@/views/dialTest/autoTest/swipe/LineAutoTest.vue";

    export default {
        name: "SwipeAutoTest",
        components: {BarAutoTest, LineAutoTest},
        props: ['echartMsgs'],
        setup(props) {
            return {
                barData: props.echartMsgs.bar,
                lineData: props.echartMsgs.line
            }
        }
    }
</script>

<style scoped>

</style>