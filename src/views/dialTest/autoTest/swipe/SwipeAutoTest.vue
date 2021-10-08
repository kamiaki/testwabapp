<template>
    <van-swipe :loop="false"
               indicator-color="white">
        <van-swipe-item>
            <BarAutoTest :echartProps="echartProps"
                         :style="{width: '100%', height: '400px'}"
            ></BarAutoTest>
        </van-swipe-item>
        <van-swipe-item>
            <LineAutoTest :echartProps="echartProps"
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
        props: ['echartProps'],
        setup(props) {
            console.info(props.echartProps)
            return {
                echartProps: props.echartProps
            }
        }
    }
</script>

<style scoped>

</style>