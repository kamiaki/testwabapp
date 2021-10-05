<template>
    <TitleHead></TitleHead>
    <router-view/>
    <FootNav></FootNav>
</template>

<script>
    import {reactive} from 'vue'
    import TitleHead from '/@/views/mainPage/TitleHead.vue'
    import FootNav from '/@/views/mainPage/FootNav.vue'

    export default {
        name: "MainPage",
        components: {
            TitleHead, FootNav
        },
        setup(){
            return {}
        }
    }
</script>

<style scoped>

</style>