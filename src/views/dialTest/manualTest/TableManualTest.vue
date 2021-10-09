<template>
    <div>
        <div style="text-align: center;font-size: 25px;">参数展示</div>
        <van-row style="margin: 5px 0 20px">
            <van-col span="24">
                <div>线程数: {{manualTestData.form.threadCount}} | 测试量: {{manualTestData.form.testCount}}</div>
                <div>测试时间: {{'2021-10-08'}}</div>
            </van-col>
        </van-row>
       <div class="tableW">
           <van-row class="tableH">
               <van-col span="6">网络类型</van-col>
               <van-col span="6">最大值(ms)</van-col>
               <van-col span="6">最小值(ms)</van-col>
               <van-col span="6">网络波动级别</van-col>
           </van-row>
           <van-row v-for="item in manualTestData.tableData" :key="item" class="tableC">
               <van-col span="6">{{item.name}}</van-col>
               <van-col span="6">{{item.max}}</van-col>
               <van-col span="6">{{item.min}}</van-col>
               <van-col span="6">{{item.level}}</van-col>
           </van-row>
       </div>
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

<style scoped lang="less">
    .tableW{
        .van-col {
            text-align: center;
            border: 1px solid #000;
        }
        .tableC{
            .van-col {
                background: #f3fffe;
            }
        }
        .tableH{
            background: #f7f7ff;
        }
    }
</style>