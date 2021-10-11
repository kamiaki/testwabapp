<template>
    <div>
        <div class="table-wrapper-style1">
            <el-table :data="propsQueryTestData.tableData"
                      height="800"
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
        <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5"/>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import {tf} from './TableQueryTestSetting.js'

    export default {
        name: "TableQueryTest",
        props: ['queryTestData'],
        setup(props) {
            const currentPage = ref(1);
            return {
                currentPage,
                propsQueryTestData: props.queryTestData,
                tableFormat: tf
            };
        },
    }
</script>

<style scoped lang="less">
    @import "src/table1Less";

</style>