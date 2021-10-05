<template>
    <div>自动拨测页面</div>
    <div v-for="(val) in list" :key="val"> {{ val }}</div>
</template>

<script>
    export default {
        name: "AutoTestPage",
        setup() {
            let list = []
            for (let i = 0; i < 100; i++) {
                list.push(i)
            }
            return {list}
        }
    }
</script>

<style scoped>

</style>