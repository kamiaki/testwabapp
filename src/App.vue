<template>
    <div class="my_background" :style="{backgroundImage: bgImageUrl}">
        <br>
        <br>
        <div>111</div>
        <br>
        <br>
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
    import {onUnmounted} from 'vue'
    import bgImage from '/@/assets/background/bg2.png'

    export default {
        name: 'App',
        setup() {
            //
            const store = useStore()
            let bgImageUrl = `url(${bgImage})`
            console.info(bgImage)
            console.info(bgImageUrl)
            //
            function turnOnAndOffTheTest(e) {
                keyboardEvents.turnOnAndOffTheTest(e, store)
            }

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

<style>
    .my_background {
        height: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
    }

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
</style>