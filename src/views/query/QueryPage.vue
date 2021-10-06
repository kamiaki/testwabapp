<template>
    <van-tabs v-model:active="active"
              sticky swipeable
              @click-tab="onClickTab"
    >
        <van-tab title="拨测结果" name="拨测结果">
            <QueryTestPage></QueryTestPage>
        </van-tab>
        <van-tab title="告警信息" name="告警信息">
            <QueryAlertPage></QueryAlertPage>
        </van-tab>
    </van-tabs>
</template>

<script>
    import {ref, onMounted} from 'vue';
    import QueryAlertPage from '/@/views/query/queryAlert/QueryAlertPage.vue'
    import QueryTestPage from '/@/views/query/queryTest/QueryTestPage.vue'
    import {useStore} from 'vuex'

    export default {
        name: "QueryPage",
        components: {
            QueryAlertPage, QueryTestPage
        },
        setup() {
            const store = useStore()

            const active = ref(0);
            const onClickTab = function (data) {
                console.info(data)
            };

            onMounted(() => {
                store.state.vuexMain.tabbarActive = '查询'
            })

            return {active, onClickTab};
        }
    }
</script>

<style scoped>

</style>