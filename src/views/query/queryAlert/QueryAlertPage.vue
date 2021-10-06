<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <p>刷新次数: {{ count }}</p>
        <div>查询告警页面</div>
        <FormQueryAlert></FormQueryAlert>
        <TableQueryAlert></TableQueryAlert>
    </van-pull-refresh>
</template>

<script>
    import {ref, reactive} from 'vue'
    import { Toast } from 'vant'
    import FormQueryAlert from '/@/views/query/queryAlert/FormQueryAlert.vue'
    import TableQueryAlert from '/@/views/query/queryAlert/TableQueryAlert.vue'

    export default {
        name: "QueryAlertPage",
        components: {FormQueryAlert, TableQueryAlert},
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