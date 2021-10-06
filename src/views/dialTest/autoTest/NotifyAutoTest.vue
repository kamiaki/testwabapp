<template>
    <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe
                vertical
                class="notice-swipe"
                :autoplay="3000"
                :show-indicators="false"
        >
            <van-swipe-item>告警1</van-swipe-item>
            <van-swipe-item>告警2</van-swipe-item>
            <van-swipe-item>告警3</van-swipe-item>
        </van-swipe>
    </van-notice-bar>
</template>

<script>
    export default {
        name: "NotifyAutoTest"
    }
</script>

<style scoped>
    .notice-swipe {
        height: 40px;
        line-height: 40px;
    }
</style>