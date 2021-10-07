<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
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
            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    Toast('刷新成功');
                    loading.value = false;
                    count.value++;
                }, 1000);
            };
            return {
                loading,
                onRefresh,
            };
        }
    }
</script>

<style scoped>

</style>