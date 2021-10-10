<template>
    <van-tabs v-model:active="active" sticky
              @click-tab="onClickTab">
        <van-tab title="自动" name="auto">
            <AutoTestPage></AutoTestPage>
        </van-tab>
        <van-tab title="手动" name="manual">
            <ManualTestPage></ManualTestPage>
        </van-tab>
    </van-tabs>


</template>

<script>
    import {ref, toRef, onMounted} from 'vue';
    import AutoTestPage from '/@/views/dialTest/autoTest/AutoTestPage.vue'
    import ManualTestPage from '/@/views/dialTest/manualTest/ManualTestPage.vue'
    import {useStore} from 'vuex'
    import {Toast} from 'vant'

    export default {
        name: "DialTestPage",
        components: {
            AutoTestPage, ManualTestPage
        },
        setup() {

            const store = useStore()
            const tabbarActive = toRef(store.state.vuexMain, 'tabbarActive')
            const active = ref('auto');
            const onClickTab = function (data) {
                if ('manual' === data.name){
                    Toast('下拉即可拨测')
                }
            };
            onMounted(() => {
                tabbarActive.value = '拨测'
            })

            return {active, onClickTab};
        }
    }
</script>

<style scoped>

</style>