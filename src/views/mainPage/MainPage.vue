<template>
    <TitleHead></TitleHead>
    <div v-for="(item,i) in list">--索引值--{{i}}   --每一项--{{item}}</div>
    <van-button type="primary">主要按钮</van-button>
    <FootNav></FootNav>
</template>

<script>
    import TitleHead from '/@/views/mainPage/TitleHead.vue'
    import FootNav from '/@/views/mainPage/FootNav.vue'
    import {reactive} from 'vue'

    export default {
        name: "MainPage",
        components: {
            TitleHead, FootNav
        },
        setup(){
            let list = reactive([])

            for (let i = 0; i < 100; i++) {
                list.push(i)
            }

            return {list}
        }
    }
</script>

<style scoped>

</style>