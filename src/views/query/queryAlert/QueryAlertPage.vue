<template>
    <div class="title">告警信息统计</div>
    <FormQueryAlert @doSearch="refresh"
            style="margin: 10px auto; width: 95%;"></FormQueryAlert>
    <TableQueryAlert :queryAlertData="queryAlertData"
                     style="width: 95%; margin: 10px auto"
    ></TableQueryAlert>
</template>

<script>
    import {ref, reactive} from 'vue'
    import {Toast} from 'vant'
    import FormQueryAlert from '/@/views/query/queryAlert/FormQueryAlert.vue'
    import TableQueryAlert from '/@/views/query/queryAlert/TableQueryAlert.vue'
    import utils from 'aki_js_utils'

    export default {
        name: "QueryAlertPage",
        components: {FormQueryAlert, TableQueryAlert},
        setup() {
            // 表格
            const tableData = createTestData()
            const queryAlertData = reactive({
                tableData: tableData
            })

            // 测试
            function createTestData() {
                const tmp = []
                for (let i = 0; i < 20; i++) {
                    tmp.push(
                        {
                            time: '2021-11-11',
                            state:  utils.randomFlow(0, 1, 0),
                            type: '移动网络',
                            targetIp: '11.11.11.11'
                        }
                    )
                }
                return tmp
            }

            function refresh() {
                queryAlertData.tableData = createTestData()
            }


            return {
                queryAlertData,
                refresh
            };
        }
    }
</script>

<style scoped>
    .title {
        text-align: center;
        font-size: 20px;
        margin: 20px 0;
    }
</style>