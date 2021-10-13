<template>
    <div>
        <div class="table-wrapper-style1">
            <el-table :data="queryAlertData.tableData"
                      height="400"
                      stripe style="width: 100%">
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
        <van-pagination v-model="formParms.currentPage"
                        :total-items="formParms.totalItems"
                        :items-per-page="formParms.itemsPerPage"/>
    </div>
</template>

<script>
    import {ref, reactive} from 'vue'
    import {tf} from './TableQueryAlertSetting.js'

    export default {
        name: "TableQueryTest",
        props: ['queryAlertData', 'formParms'],
        setup() {
            return {tableFormat: tf}
        }
    }
</script>

<style scoped lang="less">
    @import "src/table1Less";
</style>