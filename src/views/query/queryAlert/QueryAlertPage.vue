<template>
    <div class="title">告警信息统计</div>
    <FormQueryAlert class="alertCss"
                    @doSearch="doSearch"
                    :alertData="alertData"
                    :formParms="formParms"></FormQueryAlert>
    <TableQueryAlert class="alertCss"
                     @changePagination="changePagination"
                     :formParms="formParms"
                     :alertData="alertData"></TableQueryAlert>
</template>

<script>
    import {ref, reactive} from 'vue'
    import FormQueryAlert from '/@/views/query/queryAlert/FormQueryAlert.vue'
    import TableQueryAlert from '/@/views/query/queryAlert/TableQueryAlert.vue'
    import useAlertDefault from './useAlertDefault'

    export default {
        name: "QueryAlertPage",
        components: {FormQueryAlert, TableQueryAlert},
        setup() {
            // 表单数据, 查询结果, 搜索方法, 分页切换方法
            const {formParms, alertData, doSearch, changePagination} = useAlertDefault()

            return {
                formParms,
                alertData,
                doSearch,
                changePagination
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