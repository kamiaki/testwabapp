<template>
    <FormManualTest></FormManualTest>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <p>刷新次数: {{ count }}</p>
        <SwipeManualTest></SwipeManualTest>
        <TableManualTest></TableManualTest>
    </van-pull-refresh>
</template>

<script>
    import { ref } from 'vue';
    import { Toast } from 'vant';
    import FormManualTest from '/@/views/dialTest/manualTest/FormManualTest.vue'
    import SwipeManualTest from '/@/views/dialTest/manualTest/SwipeManualTest.vue'
    import TableManualTest from '/@/views/dialTest/manualTest/TableManualTest.vue'

    export default {
        name: "ManualTestPage",
        components: {FormManualTest, SwipeManualTest, TableManualTest},
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