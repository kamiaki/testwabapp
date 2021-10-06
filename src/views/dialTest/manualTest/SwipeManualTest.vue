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
</template>

<script>
    import BarHManualTest from "/@/views/dialTest/manualTest/BarHManualTest.vue";
    import BarVManualTest from "/@/views/dialTest/manualTest/BarVManualTest.vue";

    export default {
        name: "SwipeAutoTest",
        components: {BarHManualTest, BarVManualTest}
    }
</script>

<style scoped>

</style>