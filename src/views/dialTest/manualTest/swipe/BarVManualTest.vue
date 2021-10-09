<template>
    <div id="myChartManualTestBar" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
    import {inject, onMounted, onBeforeUnmount, watch} from "vue";
    import barVDefault from './barVDefault'

    export default {
        name: "BarAutoTest",
        props: ['manualTestData'],

    }
</script>

<style scoped>

</style>