<template>
    <div>自动拨测页面</div>
    <div v-for="(val) in list" :key="val"> {{ val }}</div>
</template>

<script>
    import {ref, onMounted, onBeforeUnmount} from 'vue'

    export default {
        name: "AutoTestPage",
        setup() {
            let list = []
            for (let i = 0; i < 100; i++) {
                list.push(i)
            }

            onMounted(() => {
                console.info('auto_onMounted')
            })
            onBeforeUnmount(() => {
                console.info('auto_onBeforeUnmount')
            })

            return {list}
        }
    }
</script>

<style scoped>

</style>