<template>
    <van-grid>
        <van-grid-item icon="photo-o" :text="item.title" v-for="item in lampMsgs" :key="item"/>
    </van-grid>
</template>

<script>
    export default {
        name: "LampAutoTest",
        props: ['lampMsgs'],
        setup(props) {
            return {
                lampMsgs: props.lampMsgs
            }
        }
    }
</script>

<style scoped>

</style>