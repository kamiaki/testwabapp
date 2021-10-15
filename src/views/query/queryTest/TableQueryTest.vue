<template>
    <div>
        <div class="table-wrapper-style1">
            <el-table :data="testData.tableData"
                      height="450"
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
        <van-pagination
                @change="changePagination"
                v-model="formParms.currentPage"
                :total-items="formParms.totalItems"
                :items-per-page="formParms.itemsPerPage"/>    </div>
</template>

<script>
    import {ref} from 'vue';
    import {tf} from './TableQueryTestSetting.js'

    export default {
        name: "TableQueryTest",
        props: ['testData', 'formParms'],
        emits: ['changePagination'],
        setup(props, context) {
            function changePagination() {
                context.emit('changePagination')
            }
            return {changePagination, tableFormat: tf}
        }
    }
</script>

<style scoped lang="less">
    @import "src/table1Less";

</style>