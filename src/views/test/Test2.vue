<template>
    <h6>大家好我是个测试页2</h6>
    <p>我是测试页2的内容</p>
</template>

<script>
    import {onUnmounted} from 'vue'

    export default {
        name: "Test2",
        setup() {
            onUnmounted(()=>{
                console.info('Test2 onUnmounted')
            })
        }
    }
</script>

<style scoped>

</style>