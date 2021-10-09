<template>
    <div id="myChartManualTestBar" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
    import {inject, onMounted, onBeforeUnmount, watch} from "vue";
    import barVDefault from './barVDefault'

    export default {
        name: "BarAutoTest",
        props: ['manualTestData'],
        setup(props) {
            let echarts = inject("ec");//引入
            let myChart = {}

            function resize() {
                myChart.resize()
            }
            onMounted(() => {
                // 绘制图表
                myChart = echarts.init(document.getElementById("myChartManualTestBar"));
                barVDefault.drawEcharts(echarts, myChart, props.manualTestData.echartData.bar)
                window.addEventListener('resize', resize)// 响应式大小
            });

            onBeforeUnmount(() => {
                window.removeEventListener('resize', resize)
            })

            watch(props.manualTestData, () => {
                barVDefault.drawEcharts(echarts, myChart, props.manualTestData.echartData.bar)
            })
        }
    }
</script>

<style scoped>

</style>