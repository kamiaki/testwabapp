<template>
    <div>
        <div style="text-align: center;font-size: 25px;margin-top: 10px;">参数展示</div>
        <van-row style="margin: 10px 0 10px">
            <van-col span="24">
                <div>线程数: {{manualTestData.form.threadCount}} | 测试量: {{manualTestData.form.testCount}}</div>
                <div>测试时间: {{'2021-10-08'}}</div>
            </van-col>
        </van-row>

        <div class="table-wrapper-style1">
            <el-table :data="propsManualTestData.tableData" stripe style="width: 100%">
                <el-table-column label="网络类型" prop="name"/>
                <el-table-column label="最大值(ms)" prop="max"/>
                <el-table-column label="最小值(ms)" prop="min"/>
                <el-table-column label="最小值(ms)" prop="level"/>
            </el-table>
        </div>


    </div>
</template>

<script>
    export default {
        name: "TableManualTest",
        props: ['manualTestData'],
        setup(props) {
            return {
                propsManualTestData: props.manualTestData
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