<template>
    <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe
                vertical
                class="notice-swipe"
                :autoplay="3000"
                :show-indicators="false"
        >
            <van-swipe-item v-for="item in notifyProps.notifyData" :key="item">
                {{item.fullText}}
            </van-swipe-item>
        </van-swipe>
    </van-notice-bar>
</template>

<script>
    export default {
        name: "NotifyAutoTest",
        props: ['notifyProps'],
        setup(props) {
            return {
                notifyProps: props.notifyProps
            }
        }
    }
</script>

<style scoped>
    .notice-swipe {
        height: 40px;
        line-height: 40px;
    }
</style>