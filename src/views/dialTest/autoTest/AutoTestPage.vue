<template>
    <button @click="danji">我是按钮</button>
    <div>自动拨测页面</div>
    <div>{{`传过来的消息: ${msg}`}}</div>
    <div v-for="(val) in list" :key="val"> {{ val }}</div>
</template>

<script>
    import {ref, onMounted, onBeforeUnmount} from 'vue'

    export default {
        name: "AutoTestPage",
        props: ['msg'],
        emits: ['hello'],
        setup(prop, context) {
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

            function danji() {
                context.emit('hello', 666)
            }

            return {list, danji}
        }
    }
</script>

<style scoped>

</style>