<template>
    <div class="my_background" :style="{backgroundImage: bgImageUrl}">
        <router-view/>
        <!--    图表显示按钮-->
        <transition
                enter-active-class="animate__animated animate__lightSpeedInLeft"
                leave-active-class="animate__animated animate__lightSpeedOutLeft">
            <div v-if="store.state.isTest" class="div_test">已开启测试模式</div>
        </transition>
    </div>
</template>

<script>
    import keyboardEvents from './keyboardEvents'
    import {useStore} from 'vuex'
    import {ref, onUnmounted} from 'vue'
    import bgImage2 from '/@/assets/background/bg2.png'
    import bgImage1 from '/@/assets/background/bg1.png'
    import utils from 'aki_js_utils'

    export default {
        name: 'App',
        setup() {
            //
            const store = useStore()
            let bgImageUrl = ref(`url(${bgImage2})`)

            // 键盘开启测试模式
            function turnOnAndOffTheTest(e) {
                keyboardEvents.turnOnAndOffTheTest(e, store)
            }

            (function changeBG() {
                const n = utils.randomFlow(0, 1, 0)
                if (n > 0) {
                    bgImageUrl.value = `url(${bgImage1})`
                } else {
                    bgImageUrl.value = `url(${bgImage2})`
                }
                setTimeout(() => {
                    changeBG()
                }, 2000)
            })()
            //
            window.addEventListener('keydown', turnOnAndOffTheTest, false)
            onUnmounted(() => {
                window.removeEventListener('keydown', turnOnAndOffTheTest)
            })
            //
            return {store, bgImageUrl}
        }
    }
</script>

<style lang="less">
    body {
        color: black;
        font-family: 微软雅黑;
        font-weight: 600;
    }

    .my_background {
        height: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;

        .div_test {
            position: absolute;
            top: 30px;
            left: 30px;
            background: black;
            padding: 10px;
            border-radius: 15px;
            font-size: 20px;
            z-index: 99999;
        }
    }
</style>