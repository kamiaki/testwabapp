<template>
    <van-swipe class="my-swipe"
               :autoplay="10000"
               indicator-color="white">
        <van-swipe-item>
            <BarHManualTest :manualTestData="manualTestData"
                            :style="{width: '100%', height: '350px'}"></BarHManualTest>
        </van-swipe-item>
        <van-swipe-item>
            <BarVManualTest :manualTestData="manualTestData"
                            :style="{width: '100%', height: '350px'}"></BarVManualTest>
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
    .my-swipe {
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    }
</style>