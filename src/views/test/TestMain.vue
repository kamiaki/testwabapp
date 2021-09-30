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

    export default {
        name: "TestMain",
        setup() {
            const router = useRouter()

            function router1() {
                router.push({
                    name: 'Test1'
                })
            }
            function router2() {
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