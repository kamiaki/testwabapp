<template>
    <FormManualTest :manualTestData="manualTestData"></FormManualTest>
    <van-pull-refresh v-model="loading" @refresh="onRefresh"
                      pulling-text="下拉即可拨测..."
                      loosing-text="释放即可拨测..."
                      loading-text="拨测中..."
    >
        <TableManualTest></TableManualTest>
        <SwipeManualTest :manualTestData="manualTestData"></SwipeManualTest>
    </van-pull-refresh>
</template>

<script>
    import {ref, reactive, watch, computed} from 'vue'
    import { Toast } from 'vant';
    import FormManualTest from '/@/views/dialTest/manualTest/FormManualTest.vue'
    import SwipeManualTest from '/@/views/dialTest/manualTest/swipe/SwipeManualTest.vue'
    import TableManualTest from '/@/views/dialTest/manualTest/TableManualTest.vue'
    import utils from 'aki_js_utils'

    export default {
        name: "ManualTestPage",
        components: {FormManualTest, SwipeManualTest, TableManualTest},
        setup() {
            const loading = ref(false);
            // form
            const form = {
                threadCount: 1,
                testCount: 2
            }
            //
            // 图表信息
            const echartData = {
                bar: {
                    dataX: [utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0)]
                },
                line: {
                    xLabel: [1, 2, 3, 4, 5, 6],
                    mobile: [utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0)],
                    unicom: [utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0)],
                    telecom: [utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0)],
                    domain: [utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0),
                        utils.randomFlow(0, 30, 0), utils.randomFlow(0, 30, 0)],
                }
            }

            const manualTestData = reactive({
                form: form,
                echartData: echartData
            })

            const onRefresh = () => {
                setTimeout(() => {
                    Toast(`线程数: ${manualTestData.form.threadCount}\r\n拨测数: ${manualTestData.form.testCount}\r\n拨测开始`);
                    loading.value = false;
                }, 1000);
            };

            return {
                loading,
                onRefresh,
                manualTestData
            };
        }
    }
</script>

<style scoped>

</style>