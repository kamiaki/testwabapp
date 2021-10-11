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
            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    Toast('刷新成功');
                    loading.value = false;
                }, 1000);
            };
            // 表格
            const tableData = [
                {name: '移动网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
                {name: '联通网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
                {name: '电信网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
                {name: '域名网络',max: utils.randomFlow(20, 30, 0), min: utils.randomFlow(0, 20, 0), level: '网络通畅'},
            ]
            const queryAlertData = reactive(
                {
                    tableData: tableData
                }
            )

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