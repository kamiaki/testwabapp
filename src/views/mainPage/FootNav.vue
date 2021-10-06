<template>
    <van-tabbar
            v-model="store.state.vuexMain.tabbarActive"
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
    import {useStore} from 'vuex'

    export default {
        name: "FootNav",
        setup() {
            const router = useRouter()
            const store = useStore()

            function change(a) {
                switch (a) {
                    case '拨测':
                        router.push({name: 'DialTestPage'})
                        break;
                    case '查询':
                        router.push({path: '/MainPage/QueryPage'})
                        break;
                    case '更多':
                        alert('此功能还未上线...')
                        store.state.vuexMain.tabbarActive = '拨测'
                        router.push({path: 'DialTestPage'})
                        break;
                }
            }

            return {change, store};
        }
    }
</script>

<style scoped>

</style>