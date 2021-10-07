<template>
    <div>大家好我是个柱状图</div>
    <div>{{barData.name}}</div>
</template>

<script>
    export default {
        name: "BarAutoTest",
        props: ['barData'],
        setup(props) {
            return {
                barData: props.barData
            }
        }
    }
</script>

<style scoped>

</style>