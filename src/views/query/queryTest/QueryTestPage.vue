<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <!-- 释放提示 -->
        <template #loading>
            <img class="huaji" :src="huaji"/>
        </template>

        <div class="title">拨测结果统计</div>
        <FormQueryTest @doSearch="refresh"
                       style="margin: 10px auto; width: 95%;"
        ></FormQueryTest>
        <TableQueryTest :queryTestData="queryTestData"
                        style="width: 95%; margin: 10px auto"
        ></TableQueryTest>
    </van-pull-refresh>
</template>

<script>
    import {ref, reactive} from 'vue'
    import {Toast} from 'vant'
    import FormQueryTest from '/@/views/query/queryTest/FormQueryTest.vue'
    import TableQueryTest from '/@/views/query/queryTest/TableQueryTest.vue'
    import utils from 'aki_js_utils'
    import huaji from '/@/assets/other/huaji.png'

    export default {
        name: "QueryTestPage",
        components: {FormQueryTest, TableQueryTest},
        setup() {
            // 表格
            const tableData = createTestData()
            const queryTestData = reactive({
                tableData: tableData
            })

            // 测试
            function createTestData() {
                const tmp = []
                for (let i = 0; i < 20; i++) {
                    tmp.push(
                        {
                            ip: '11.11.11.11',
                            time: '2021-11-11',
                            totalTime: utils.randomFlow(1, 30, 0),
                            state: 0,
                            type: '移动网络',
                            targetIp: '11.11.11.11',
                            successCount: utils.randomFlow(0, 5, 0),
                            failCount: utils.randomFlow(0, 5, 0)
                        }
                    )
                }
                return tmp
            }

            function refresh(){
                queryTestData.tableData = createTestData()
            }

            const loading = ref(false);
            const onRefresh = () => {
                setTimeout(() => {
                    Toast('刷新成功');
                    loading.value = false;
                    refresh()
                }, 1000);
            };

            return {
                loading,
                onRefresh,
                queryTestData,
                refresh,
                huaji
            };
        }
    }
</script>

<style scoped>
    .huaji {
        width: 80px;
        height: 80px;
        margin-top: 8px;
        border-radius: 4px;
    }

    .title {
        text-align: center;
        font-size: 20px;
        margin: 20px 0;
    }
</style>