<template>
    <router-view/>
    <!--开启测试模式提示-->
    <transition
            enter-active-class="animate__animated animate__lightSpeedInLeft"
            leave-active-class="animate__animated animate__lightSpeedOutLeft">
        <div v-if="isTest" class="div_test">已开启测试模式</div>
    </transition>
</template>

<script>
    import * as echarts from 'echarts'
    import {ref, provide} from 'vue'
    import bgImage2 from '/@/assets/background/bg2.png'
    import turnOnAndOff from '/@/hooks/useTurnOnAndOffTheTest'

    export default {
        name: 'App',
        setup() {
            provide('ec', echarts)//provide

            let bgImageUrl = ref(`url(${bgImage2})`)
            const isTest = turnOnAndOff()
            return {isTest, bgImageUrl}
        }
    }
</script>

<style lang="less">
    body {
        color: #3e3e3e;
        font-family: 微软雅黑;
        font-weight: 600;
    }

    .div_test {
        position: absolute;
        top: 30px;
        left: 30px;
        background: #e3e3e3;
        padding: 10px;
        border-radius: 15px;
        font-size: 20px;
        z-index: 99999;
    }
</style>