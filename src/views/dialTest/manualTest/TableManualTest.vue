<template>
    <div>
        <div>参数展示</div>
        <van-row>
            <van-col span="12">线程数: {{manualTestData.form.threadCount}} | 测试量: {{manualTestData.form.testCount}}</van-col>
            <van-col span="12">测试时间: {{'2021-10-08'}}</van-col>
        </van-row>
        <van-row>
            <van-col span="6">网络类型</van-col>
            <van-col span="6">最大值(ms)</van-col>
            <van-col span="6">最小值(ms)</van-col>
            <van-col span="6">网络波动级别</van-col>
        </van-row>
        <van-row v-for="item in manualTestData.tableData" :key="item">
            <van-col span="6">{{item.name}}</van-col>
            <van-col span="6">{{item.max}}</van-col>
            <van-col span="6">{{item.min}}</van-col>
            <van-col span="6">{{item.level}}</van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "TableManualTest",
        props: ['manualTestData'],
        setup(props) {
            return {
                manualTestData: props.manualTestData
            }
        }
    }
</script>

<style scoped>

</style>