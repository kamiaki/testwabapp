<template>
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
</template>

<script>
    import keyboardEvents from './keyboardEvents'
    import {useStore} from 'vuex'

    export default {
        name: 'App',
        setup() {
            window.addEventListener('keydown', turnOnAndOffTheTest, false)

            const store = useStore()

            function turnOnAndOffTheTest(e) {
                keyboardEvents.turnOnAndOffTheTest(e, store)
            }

            return {store, turnOnAndOffTheTest}

        }
    }
</script>

<style>
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