<template>
    <div class="title">拨测结果统计</div>
    <FormQueryTest class="testCss"
                    @doSearch="doSearch"
                    :formParms="formParms"></FormQueryTest>
    <TableQueryTest class="testCss"
                     @changePagination="changePagination"
                     :formParms="formParms"
                     :testData="testData"></TableQueryTest>
</template>

<script>
    import FormQueryTest from '/@/views/query/queryTest/FormQueryTest.vue'
    import TableQueryTest from '/@/views/query/queryTest/TableQueryTest.vue'
    import useTestDefault from './useTestDefault'

    export default {
        name: "QueryTestPage",
        components: {FormQueryTest, TableQueryTest},
        setup() {
            // 表单数据, 查询结果, 搜索方法, 分页切换方法
            const {formParms, testData, doSearch, changePagination} = useTestDefault()

            return {
                formParms,
                testData,
                doSearch,
                changePagination
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

    .testCss {
        margin: 10px auto;
        width: 95%;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    }
</style>