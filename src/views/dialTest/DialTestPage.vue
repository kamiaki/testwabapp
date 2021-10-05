<template>
    <van-tabs v-model:active="active"
              sticky swipeable
              @click-tab="onClickTab"
    >
        <van-tab title="自动拨测" name="自动拨测">
            <AutoTestPage></AutoTestPage>
        </van-tab>
        <van-tab title="手动拨测" name="手动拨测">
            <ManualTestPage></ManualTestPage>
        </van-tab>
    </van-tabs>
</template>

<script>
    import {ref} from 'vue';
    import AutoTestPage from '/@/views/dialTest/autoTest/AutoTestPage.vue'
    import ManualTestPage from '/@/views/dialTest/manualTest/ManualTestPage.vue'

    export default {
        name: "DialTestPage",
        components: {
            AutoTestPage, ManualTestPage
        },
        setup() {
            const active = ref(0);
            const onClickTab = function (data) {
               console.info(data)
            };
            return {active, onClickTab};
        }
    }
</script>

<style scoped>

</style>