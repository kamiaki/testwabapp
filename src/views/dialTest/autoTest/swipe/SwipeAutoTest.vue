<template>
    <van-swipe :loop="false"
               class="echartsDiv"
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
    .echartsDiv {
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    }
</style>