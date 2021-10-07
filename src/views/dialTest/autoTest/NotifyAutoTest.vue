<template>
    <van-notice-bar left-icon="volume-o" :scrollable="false">
        <van-swipe
                vertical
                class="notice-swipe"
                :autoplay="3000"
                :show-indicators="false"
        >
            <van-swipe-item v-for="(item, k) in notifyMsgs" :key="item">{{`告警:${item.title}-${item.msg}`}}
            </van-swipe-item>
        </van-swipe>
    </van-notice-bar>
</template>

<script>
    import {toRef, ref, reactive} from 'vue'

    export default {
        name: "NotifyAutoTest",
        props: ['notifyMsgs'],
        setup(props) {
            return {
                notifyMsgs: props.notifyMsgs
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