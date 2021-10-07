<template>
    <van-tabs v-model:active="active"
              sticky swipeable
              @click-tab="onClickTab"
    >
        <van-tab title="自动" name="自动">
            <AutoTestPage></AutoTestPage>
        </van-tab>
        <van-tab title="手动" name="手动">
            <ManualTestPage></ManualTestPage>
        </van-tab>
    </van-tabs>


</template>

<script>
    import {ref, onMounted} from 'vue';
    import AutoTestPage from '/@/views/dialTest/autoTest/AutoTestPage.vue'
    import ManualTestPage from '/@/views/dialTest/manualTest/ManualTestPage.vue'
    import {useStore} from 'vuex'

    export default {
        name: "DialTestPage",
        components: {
            AutoTestPage, ManualTestPage
        },
        setup() {
            const store = useStore()

            const active = ref(0);
            const onClickTab = function (data) {
                // 点击了tab标签
            };
            function hello(val) {
                alert(val)
            }

            onMounted(() => {
                store.state.vuexMain.tabbarActive = '拨测'
            })

            return {active, onClickTab, hello};
        }
    }
</script>

<style scoped>

</style>