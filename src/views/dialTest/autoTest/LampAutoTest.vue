<template>
    <van-grid gutter="5" :column-num="4">
        <van-grid-item
                v-for="item in autoTestData.lampData"
                :key="item">
            <van-image :src="item.iconUrl"/>
            <div> {{item.name}}</div>
        </van-grid-item>
    </van-grid>
</template>

<script>
    export default {
        name: "LampAutoTest",
        props: ['autoTestData'],
        setup(props) {
            return {
                autoTestData: props.autoTestData
            }
        }
    }
</script>

<style scoped>

</style>