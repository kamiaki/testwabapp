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
    import BarAutoTest from "/@/views/dialTest/autoTest/BarAutoTest.vue";
    import LineAutoTest from "/@/views/dialTest/autoTest/LineAutoTest.vue";

    export default {
        name: "SwipeAutoTest",
        components: {BarAutoTest, LineAutoTest}
    }
</script>

<style scoped>

</style>