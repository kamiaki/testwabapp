<template>
    <van-swipe class="my-swipe"
               :autoplay="3000"
               indicator-color="white">
        <van-swipe-item>
            <BarAutoTest></BarAutoTest>
        </van-swipe-item>
        <van-swipe-item>
            <LineAutoTest></LineAutoTest>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    import BarAutoTest from "/@/views/dialTest/autoTest/swipe/BarAutoTest.vue";
    import LineAutoTest from "/@/views/dialTest/autoTest/swipe/LineAutoTest.vue";

    export default {
        name: "SwipeAutoTest",
        components: {BarAutoTest, LineAutoTest}
    }
</script>

<style scoped>

</style>