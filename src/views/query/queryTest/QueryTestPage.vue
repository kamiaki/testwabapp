<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <p>刷新次数: {{ count }}</p>
        <div>查询拨测结果页面</div>
        <FormQueryTest></FormQueryTest>
        <TableQueryTest></TableQueryTest>
    </van-pull-refresh>
</template>

<script>
    import {ref, reactive} from 'vue'
    import { Toast } from 'vant'
    import FormQueryTest from '/@/views/query/queryTest/FormQueryTest.vue'
    import TableQueryTest from '/@/views/query/queryTest/TableQueryTest.vue'

    export default {
        name: "QueryTestPage",
        components: {FormQueryTest, TableQueryTest},
        setup() {
            const count = ref(0);
            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    Toast('刷新成功');
                    loading.value = false;
                    count.value++;
                }, 1000);
            };
            return {
                count,
                loading,
                onRefresh,
            };
        }
    }
</script>

<style scoped>

</style>