<template>
    <br>
    <br>
    <br>
    <div>TestMain</div>
    <router-view/>

    <div @click="router1" style="cursor: pointer; background: aqua">111</div>
    <div @click="router2" style="cursor: pointer; background: rosybrown">222</div>
</template>

<script>
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import {get} from '../../utils/ajax/request'

    export default {
        name: "TestMain",
        setup() {
            const router = useRouter()
            const store = useStore()

            function router1() {
                store.state.vuexTest.testValue = new Date().getTime()
                alert(store.state.vuexTest.testValue)
                alert(store.state.isShowLoginWindow)

                router.push({
                    name: 'Test1'
                })
            }

            function router2() {
                get('/network/v1/getTestResultGraphicData',
                    {}, {params: null}).then(result => {
                  console.info(result)
                }).catch((e) => {
                    console.info('异常',e)
                })
                router.push({
                    name: 'Test2'
                })
            }

            return {
                router1,
                router2
            }
        }
    }
</script>

<style scoped>

</style>