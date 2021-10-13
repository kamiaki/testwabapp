<template>
    <div id="myChartManualTestBarV" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
    import {inject, onMounted, onBeforeUnmount, watch} from "vue";
    import drawEcharts from './useBarVDefault'

    export default {
        name: "BarVManualTest",
        props: ['manualTestData'],
        setup(props) {
            let echarts = inject("ec");//引入
            let myChart = {}

            function resize() {
                myChart.resize()
            }
            onMounted(() => {
                // 绘制图表
                myChart = echarts.init(document.getElementById("myChartManualTestBarV"));
                drawEcharts(echarts, myChart, props.manualTestData.echartData.barV)
                window.addEventListener('resize', resize)// 响应式大小
            });

            onBeforeUnmount(() => {
                window.removeEventListener('resize', resize)
            })

            watch(props.manualTestData, () => {
                drawEcharts(echarts, myChart, props.manualTestData.echartData.barV)
            })
        }
    }
</script>

<style scoped>

</style>