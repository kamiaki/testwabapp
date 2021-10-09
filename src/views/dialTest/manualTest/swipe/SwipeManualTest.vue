<template>
    <van-swipe class="my-swipe"
               :autoplay="10000"
               indicator-color="white">
        <van-swipe-item>
            <BarHManualTest :manualTestData="manualTestData"
                            class="echartsDiv"
                            :style="{width: '100%', height: '400px'}"></BarHManualTest>
        </van-swipe-item>
        <van-swipe-item>
            <BarVManualTest :manualTestData="manualTestData"
                            class="echartsDiv"
                            :style="{width: '100%', height: '400px'}"></BarVManualTest>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    import BarHManualTest from "/@/views/dialTest/manualTest/swipe/BarHManualTest.vue";
    import BarVManualTest from "/@/views/dialTest/manualTest/swipe/BarVManualTest.vue";

    export default {
        name: "SwipeAutoTest",
        components: {BarHManualTest, BarVManualTest},
        props: ['manualTestData'],
        setup(props){
        }
    }
</script>

<style scoped>
    .echartsDiv{
        border-radius: 10px;overflow: hidden;
    }
</style>