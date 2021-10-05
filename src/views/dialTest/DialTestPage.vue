<template>
    <div>拨测页面</div>
    <van-tabs v-model:active="active"
              sticky
              animated
              @click-tab="onClickTab"
    >
        <van-tab title="自动拨测" name="自动拨测"></van-tab>
        <van-tab title="手动拨测" name="手动拨测"></van-tab>
    </van-tabs>
    <router-view/>
</template>

<script>
    import {ref} from 'vue';
    import {useRouter} from 'vue-router'

    export default {
        name: "DialTestPage",
        setup() {
            const active = ref(2);
            const router = useRouter()

            const onClickTab = function (data) {
                switch (data.title) {
                    case '自动拨测':
                        router.push({name: 'AutoTestPage'})
                        break;
                    case '手动拨测':
                        router.push({name: 'ManualTestPage'})
                        break;
                }
            };

            return {active, onClickTab};
        }
    }
</script>

<style scoped>

</style>