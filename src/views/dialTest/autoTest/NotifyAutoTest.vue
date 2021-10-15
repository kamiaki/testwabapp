<template>
    <van-config-provider :theme-vars="themeVars">
        <van-notice-bar class="xxx" left-icon="volume-o" :scrollable="false">
            <van-swipe
                    vertical
                    class="notice-swipe"
                    :autoplay="3000"
                    :show-indicators="false"
            >
                <van-swipe-item v-for="item in notifyData" :key="item">
                    {{item.fullText}}
                </van-swipe-item>
            </van-swipe>
        </van-notice-bar>
    </van-config-provider>
</template>

<script>
    import {toRefs} from 'vue'

    export default {
        name: "NotifyAutoTest",
        props: ['notifyData'],
        setup(props) {
            const themeVars = {
                noticeBarHeight: '50px',
                noticeBarFontSize: '18px'
            };
            const {notifyData} = toRefs(props)
            return {notifyData, themeVars}
        }
    }
</script>

<style scoped>
    .notice-swipe {
        height: 40px;
        line-height: 40px;
    }
    .xxx{
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    }
</style>