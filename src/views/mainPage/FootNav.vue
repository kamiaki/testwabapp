<template>
    <van-tabbar
            v-model="active"
            :placeholder="true"
    >
        <van-tabbar-item icon="home-o">拨测</van-tabbar-item>
        <van-tabbar-item icon="search">查询</van-tabbar-item>
        <van-tabbar-item icon="friends-o">更多</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import {ref} from 'vue';

    export default {
        name: "FootNav",
        setup() {
            const active = ref(0);
            return {active};
        }
    }
</script>

<style scoped>

</style>