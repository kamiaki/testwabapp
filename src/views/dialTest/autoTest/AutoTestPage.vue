<template>
    <button @click="danji">我是按钮</button>
    <div>自动拨测页面</div>
    <div>{{`传过来的消息: ${msg}`}}</div>
    <div>{{`计算属性1: ${ppp.value1}`}}</div>
    <div>{{`计算属性2: ${ppp.value2}`}}</div>
    <div>{{`计算属性 总: ${ppp.fullName}`}}</div>
    <div>{{`num : ${num}`}}</div>
    <div v-for="(val) in list" :key="val"> {{ val }}</div>
</template>

<script>
    import {ref, reactive, watch, onMounted, onBeforeUnmount, computed} from 'vue'

    export default {
        name: "AutoTestPage",
        props: ['msg'],
        emits: ['hello'],
        setup(prop, context) {
            let num = ref(123)
            let ppp = reactive({
                value1: 'dsadsadsa',
                value2: 2321321321
            })
            let list = []
            for (let i = 0; i < 100; i++) {
                list.push(i)
            }

            ppp.fullName = computed(() => {
                return ppp.value1 + '-' + ppp.value2
            })

            watch(ppp, ()=> {
                console.info(`ppp改变了`)
            })
            watch(num, (n, o)=> {
                console.info(`num改变了:旧:${o}新:${n}`)
            })

            watch(()=>ppp.value1, (n, o)=> {
                console.info(n)
                console.info(o)
                console.info(`ppp value1 改变了`)
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

            setTimeout(() => {
                ppp.value1 = '啊啊啊'
                num.value = 4324324
            }, 2000)

            return {list, danji, ppp, num}
        }
    }
</script>

<style scoped>

</style>