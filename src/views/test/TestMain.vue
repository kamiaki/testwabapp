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
    import apiTest from '/@/api/apiTest'
    import apiDialTest from '/@/api/apiDialTest.js'

    export default {
        name: "TestMain",
        setup() {
            apiDialTest.getTestResultGraphicData().then(res => {
                console.info(res)
            }).catch((e)=>{
                console.info(e)
            })
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

            async function router2() {
                let arrays = {}
                await apiTest.getTestResultGraphicData({}).then(result => {
                    arrays = result
                }).catch((e) => {
                    alert(e)
                })
                console.info(arrays)
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