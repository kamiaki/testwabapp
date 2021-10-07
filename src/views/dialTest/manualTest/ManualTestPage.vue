<template>
    <FormManualTest></FormManualTest>
    <van-pull-refresh v-model="loading" @refresh="onRefresh"
                      pulling-text="下拉即可拨测..."
                      loosing-text="释放即可拨测..."
                      loading-text="拨测中..."
    >
        <TableManualTest></TableManualTest>
        <SwipeManualTest></SwipeManualTest>
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
            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    Toast('拨测成功');
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