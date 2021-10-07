<template>
    <van-tabs v-model:active="active" sticky swipeable>
        <van-tab title="拨测结果" name="test">
            <QueryTestPage></QueryTestPage>
        </van-tab>
        <van-tab title="告警信息" name="alert">
            <QueryAlertPage></QueryAlertPage>
        </van-tab>
    </van-tabs>
</template>

<script>
    import {ref, toRef, onMounted} from 'vue';
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
            const tabbarActive = toRef(store.state.vuexMain, 'tabbarActive')
            const active = ref('test');

            onMounted(() => {
                tabbarActive.value = '查询'
            })

            return {active};
        }
    }
</script>

<style scoped>

</style>