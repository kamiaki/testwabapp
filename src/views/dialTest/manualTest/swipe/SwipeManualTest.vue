<template>
    <van-swipe class="my-swipe"
               :autoplay="3000"
               indicator-color="white">
        <van-swipe-item>
            <BarHManualTest></BarHManualTest>
        </van-swipe-item>
        <van-swipe-item>
            <BarVManualTest></BarVManualTest>
        </van-swipe-item>
    </van-swipe>
    <br>
    <br>
    <br>
    <br>
    <br>
</template>

<script>
    import BarHManualTest from "/@/views/dialTest/manualTest/swipe/BarHManualTest.vue";
    import BarVManualTest from "/@/views/dialTest/manualTest/swipe/BarVManualTest.vue";

    export default {
        name: "SwipeAutoTest",
        components: {BarHManualTest, BarVManualTest},
        props: ['manualTestData']
    }
</script>

<style scoped>

</style>