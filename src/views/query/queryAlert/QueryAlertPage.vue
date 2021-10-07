<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
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
            };
        }
    }
</script>

<style scoped>

</style>