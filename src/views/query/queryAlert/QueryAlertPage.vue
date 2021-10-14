<template>
    <div class="title">告警信息统计</div>
    <FormQueryAlert class="alertCss"
                    :formParms="formParms"
                    @doSearch="doSearch"></FormQueryAlert>
    <TableQueryAlert class="alertCss"
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
            // 表格
            const {alertData, refreshAlertData} = useAlertDefault()

            const formParms = reactive({
                start: 0, end: 0, myType: '', myState: '',
                currentPage: 0, totalItems: 24, itemsPerPage: 5
            })

            function doSearch() {
                refreshAlertData()
            }


            return {
                formParms,
                alertData,
                doSearch,
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