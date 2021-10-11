<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <FormQueryAlert></FormQueryAlert>
        <TableQueryAlert :queryAlertData="queryAlertData"></TableQueryAlert>
    </van-pull-refresh>
</template>

<script>
    import {ref, reactive} from 'vue'
    import { Toast } from 'vant'
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
                            state: 0,
                            type: '移动网络',
                            targetIp: '11.11.11.11'
                        }
                    )
                }
                return tmp
            }

            function refresh(){
                queryAlertData.tableData = createTestData()
            }
            
            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    Toast('刷新成功');
                    loading.value = false;
                }, 1000);
            };
           

            return {
                loading,
                onRefresh,
                queryAlertData
            };
        }
    }
</script>

<style scoped>

</style>