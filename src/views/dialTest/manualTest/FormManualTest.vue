<template>
    <van-dropdown-menu>
        <van-dropdown-item teleport="body" v-model="manualTestData.form.threadCount" :options="option1"/>
        <van-dropdown-item teleport="body" v-model="manualTestData.form.testCount" :options="option2"/>
    </van-dropdown-menu>
</template>

<script>
    export default {
        name: "FormManualTest",
        props: ['manualTestData'],
        setup({manualTestData}) {
            const option1 = [
                {text: '线程数 1', value: 1},
                {text: '线程数 2', value: 2},
                {text: '线程数 5', value: 5},
            ];
            const option2 = [
                {text: '测试量 2', value: 2},
                {text: '测试量 5', value: 5},
                {text: '测试量 10', value: 10},
            ];
            return {
                option1,
                option2,
                manualTestData
            };
        }
    }
</script>

<style scoped>

</style>