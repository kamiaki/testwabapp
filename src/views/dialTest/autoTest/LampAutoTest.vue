<template>
    <van-grid gutter="5" :column-num="4">
        <van-grid-item
                v-for="item in lampProps.lampDatas"
                :key="item">
            <van-image :src="item.iconUrl"/>
            <div> {{item.name}}</div>
        </van-grid-item>
    </van-grid>
</template>

<script>
    export default {
        name: "LampAutoTest",
        props: ['lampProps'],
        setup(props) {
            return {
                lampProps: props.lampProps
            }
        }
    }
</script>

<style scoped>

</style>