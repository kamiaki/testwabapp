<template>
    <FormManualTest :manualTestData="manualTestData"></FormManualTest>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
        <template #pulling="props">
            <img class="huaji" :src="huaji"/>
        </template>
        <!-- 释放提示 -->
        <template #loosing>
            <img class="huaji" :src="huaji"/>
        </template>
        <TableManualTest  style="margin:10px 5px" :manualTestData="manualTestData"></TableManualTest>
        <SwipeManualTest  style="margin:10px 5px"  :manualTestData="manualTestData"></SwipeManualTest>
    </van-pull-refresh>
</template>

<script>
    import {ref} from 'vue'
    import FormManualTest from '/@/views/dialTest/manualTest/FormManualTest.vue'
    import SwipeManualTest from '/@/views/dialTest/manualTest/swipe/SwipeManualTest.vue'
    import TableManualTest from '/@/views/dialTest/manualTest/TableManualTest.vue'
    import huaji from '/@/assets/other/huaji.png'
    import useManualTestDefault from './useManualTestDefault'

    export default {
        name: "ManualTestPage",
        components: {FormManualTest, SwipeManualTest, TableManualTest},
        setup() {
            const loading = ref(false);
            // 获取数据 以及 刷新数据
            let {manualTestData, refreshManualTestData} = useManualTestDefault()

            const onRefresh = () => {
                setTimeout(() => {
                    refreshManualTestData()
                    loading.value = false;
                }, 1);
            };

            return {
                loading,
                onRefresh,
                manualTestData,
                huaji
            };
        }
    }
</script>

<style scoped>

</style>