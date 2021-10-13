<template>
    <div class="title">告警信息统计</div>
    <FormQueryAlert class="alertCss"
                    :formParms="formParms"
                    @doSearch="refresh"
    ></FormQueryAlert>
    <TableQueryAlert class="alertCss"
                     :formParms="formParms"
                     :queryAlertData="queryAlertData"></TableQueryAlert>
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

            const formParms = reactive({
                start: 0, end: 0, myType: '', myState: '',
                currentPage: 0, totalItems: 24, itemsPerPage: 5
            })

            // 测试
            function createTestData() {
                const tmp = []
                for (let i = 0; i < 20; i++) {
                    tmp.push(
                        {
                            time: '2021-11-11',
                            state: utils.randomFlow(0, 1, 0),
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
                refresh,
                formParms
            };
        }
    }
</script>

<style scoped lang="less">
    .title {
        text-align: center;
        font-size: 20px;
        margin: 20px 0;
    }

    .alertCss {
        margin: 10px auto;
        width: 95%;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    }
</style>