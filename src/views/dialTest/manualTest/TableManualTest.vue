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


        <div class="table-wrapper-style1">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Date" width="180"/>
                <el-table-column prop="name" label="Name" width="180"/>
                <el-table-column prop="address" label="Address"/>
            </el-table>
        </div>


    </div>
</template>

<script>
    export default {
        name: "TableManualTest",
        props: ['manualTestData'],
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: 'Tom',
                        address: 'aaa',
                    },
                    {
                        date: '2016-05-02',
                        name: 'Tom',
                        address: 'aaa',
                    },
                    {
                        date: '2016-05-04',
                        name: 'Tom',
                        address: 'aaa',
                    },
                    {
                        date: '2016-05-01',
                        name: 'Tom',
                        address: 'aaa',
                    },
                ],
            }
        },
        setup(props) {
            return {
                manualTestData: props.manualTestData
            }
        }
    }
</script>

<style scoped lang="less">
    @import "src/table1Less";

    .tableW {
        .van-col {
            text-align: center;
            border: 1px solid #000;
            font-size: 12px;
        }

        .tableC {
            .van-col {
                background: #f3fffe;
            }
        }

        .tableH {
            background: #f7f7ff;
        }
    }
</style>