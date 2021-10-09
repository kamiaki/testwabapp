<template>
    <van-config-provider :theme-vars="themeVars">
        <van-notice-bar left-icon="volume-o" :scrollable="false">
            <van-swipe
                    vertical
                    class="notice-swipe"
                    :autoplay="3000"
                    :show-indicators="false"
            >
                <van-swipe-item v-for="item in autoTestData.notifyData" :key="item">
                    {{item.fullText}}
                </van-swipe-item>
            </van-swipe>
        </van-notice-bar>
    </van-config-provider>
</template>

<script>
    export default {
        name: "NotifyAutoTest",
        props: ['autoTestData'],
        setup(props) {
            const themeVars = {
                noticeBarHeight: '50px',
                noticeBarFontSize: '18px'
            };

            return {
                autoTestData: props.autoTestData, themeVars
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