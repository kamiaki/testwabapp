<template>
    <div>大家好我是个折线图</div>
    <div>{{lineData.name}}</div>
</template>

<script>
    export default {
        name: "LineAutoTest",
        props: ['lineData'],
        setup(props) {
            return {
                lineData: props.lineData
            }
        }
    }
</script>

<style scoped>

</style>