<template>
    <div>告警信息统计</div>
    <div class="table-wrapper-style1">
        <el-table :data="propsQueryAlertData.tableData" stripe style="width: 100%">
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
    <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
</template>

<script>
    import {ref, reactive} from 'vue'
    import {tf} from './TableQueryAlertSetting.js'

    export default {
        name: "TableQueryTest",
        props: ['queryAlertData'],
        setup(props) {
            const currentPage = ref(1);
            return {
                currentPage,
                propsQueryAlertData: props.queryAlertData,
                tableFormat: tf
            }
        }
    }
</script>

<style scoped lang="less">
    @import "src/table1Less";
</style>