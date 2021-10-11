<template>
    <div>
        <div style="margin: 10px auto; width: 90%;">
            <div style="display: flex; justify-content: space-between">
                <div style="text-align: left">
                    线程数: {{manualTestData.form.threadCount}}
                    测试量: {{manualTestData.form.testCount}}
                </div>
                <div style="text-align: right">测试时间: {{'2021-10-08'}}</div>
            </div>
        </div>

        <div class="table-wrapper-style1">
            <el-table :data="propsManualTestData.tableData" stripe style="width: 100%">
                <el-table-column
                        v-for="(obj, index) in tableFormat"
                        :key="obj"
                        :prop="obj.prop"
                        :label="obj.label"
                        :sortable="obj.sortable"
                        :min-width="obj.width"
                        :formatter="obj.formatter"
                ></el-table-column>
            </el-table>
        </div>


    </div>
</template>

<script>
    import {tf} from './TableManualTestSetting.js'

    export default {
        name: "TableManualTest",
        props: ['manualTestData'],
        setup(props) {
            return {
                propsManualTestData: props.manualTestData,
                tableFormat: tf
            }
        }
    }
</script>

<style scoped lang="less">
    @import "src/table1Less";

    .table-wrapper-style1 {
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
    }
</style>