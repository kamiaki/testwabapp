<template>
    <van-tabbar
            v-model="store.state.vuexMain.tabbarActive"
            :placeholder="true"
    >
        <van-tabbar-item icon="good-job-o" name="拨测">拨测</van-tabbar-item>
        <van-tabbar-item icon="gold-coin-o" name="查询">查询</van-tabbar-item>
        <van-tabbar-item icon="star-o" name="更多">更多</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import {watch} from 'vue'
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import {Toast} from 'vant';
    import doge from '/@/assets/other/doge.png'

    export default {
        name: "FootNav",
        setup() {
            const router = useRouter()
            const store = useStore()

            watch(() => store.state.vuexMain.tabbarActive, () => {
                switch (store.state.vuexMain.tabbarActive) {
                    case '拨测':
                        router.push({name: 'DialTestPage'})
                        break;
                    case '查询':
                        router.push({path: '/MainPage/QueryPage'})
                        break;
                    case '更多':
                        Toast({
                            message: '汪汪汪！',
                            icon: doge,
                        });
                        break;
                }
            })

            return {store};
        }
    }
</script>

<style scoped>

</style>