<template>
    <div>查询拨测结果页面</div>
    <FormQueryTest></FormQueryTest>
    <TableQueryTest></TableQueryTest>
</template>

<script>
    import FormQueryTest from '/@/views/query/queryTest/FormQueryTest.vue'
    import TableQueryTest from '/@/views/query/queryTest/TableQueryTest.vue'

    export default {
        name: "QueryTestPage",
        components: {
            FormQueryTest, TableQueryTest
        }
    }
</script>

<style scoped>

</style>