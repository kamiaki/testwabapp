<template>
    <van-tabbar
            v-model="active"
            :placeholder="true"
            @change="change"
    >
        <van-tabbar-item icon="home-o" name="拨测">拨测</van-tabbar-item>
        <van-tabbar-item icon="search" name="查询">查询</van-tabbar-item>
        <van-tabbar-item icon="friends-o" name="更多">更多</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import {ref} from 'vue';
    import {useRouter} from 'vue-router'

    export default {
        name: "FootNav",
        setup() {
            const router = useRouter()
            const active = ref('拨测');

            function change(active) {
                switch (active) {
                    case '拨测':
                        router.push({name: 'DialTestPage'})
                        break;
                    case '查询':
                        router.push({path: '/MainPage/QueryPage'})
                        break;
                }
            }

            return {active, change};
        }
    }
</script>

<style scoped>

</style>