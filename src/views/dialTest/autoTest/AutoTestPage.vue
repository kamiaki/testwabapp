<template>
    <button @click="danji">我是按钮</button>
    <div>自动拨测页面</div>
    <div>{{`传过来的消息: ${msg}`}}</div>
    <div>{{`计算属性1: ${ppp.value1}`}}</div>
    <div>{{`计算属性2: ${ppp.value2}`}}</div>
    <div>{{`计算属性 总: ${ppp.fullName}`}}</div>
    <div v-for="(val) in list" :key="val"> {{ val }}</div>
</template>

<script>
    import {ref,reactive, onMounted, onBeforeUnmount, computed} from 'vue'

    export default {
        name: "AutoTestPage",
        props: ['msg'],
        emits: ['hello'],
        setup(prop, context) {
            let ppp = reactive({
                value1: 'dsadsadsa',
                value2: 2321321321
            })
            let list = []
            for (let i = 0; i < 100; i++) {
                list.push(i)
            }

            ppp.fullName = computed(()=>{
                return ppp.value1 + '-' + ppp.value2
            })

            onMounted(() => {
                console.info('auto_onMounted')
            })
            onBeforeUnmount(() => {
                console.info('auto_onBeforeUnmount')
            })

            function danji() {
                context.emit('hello', 666)
            }

            return {list, danji, ppp}
        }
    }
</script>

<style scoped>

</style>