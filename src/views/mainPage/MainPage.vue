<template>
<!--    <TitleHead></TitleHead>-->
    <router-view/>
    <FootNav></FootNav>
</template>

<script>
    import TitleHead from '/@/views/mainPage/TitleHead.vue'
    import FootNav from '/@/views/mainPage/FootNav.vue'

    export default {
        name: "MainPage",
        components: {TitleHead, FootNav}
    }
</script>

<style scoped>
</style>