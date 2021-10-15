<template>
    <div>
        <div style="margin: 10px auto; width: 90%;">
            <div style="font-size: 10px;display: flex; justify-content: space-between">
                <div>
                    线程数: {{manualTestData.form.threadCount}}
                    测试量: {{manualTestData.form.testCount}}
                </div>
                <div>测试时间: {{manualTestData.dateTimeStr}}</div>
            </div>
        </div>
        <div class="table-wrapper-style1">
            <el-table :data="manualTestData.tableData" stripe style="width: 100%">
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
        setup({manualTestData}) {
            return {
                tableFormat: tf,
                manualTestData
            }
        }
    }
</script>

<style scoped lang="less">
    @import "src/table1Less";

    .table-wrapper-style1 {
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    }
</style>