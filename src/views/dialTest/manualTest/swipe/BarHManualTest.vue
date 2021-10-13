<template>
    <div id="myChartManualTestBarH" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
    import {inject, onMounted, onBeforeUnmount, watch} from "vue";
    import drawEcharts from './useBarHDefault'

    export default {
        name: "BarHManualTest",
        props: ['manualTestData'],
        setup(props) {
            let echarts = inject("ec");//引入
            let myChart = {}

            function resize() {
                myChart.resize()
            }
            onMounted(() => {
                // 绘制图表
                myChart = echarts.init(document.getElementById("myChartManualTestBarH"));
                drawEcharts(echarts, myChart, props.manualTestData.echartData.barH)
                window.addEventListener('resize', resize)// 响应式大小
            });

            onBeforeUnmount(() => {
                window.removeEventListener('resize', resize)
            })

            watch(props.manualTestData, () => {
                drawEcharts(echarts, myChart, props.manualTestData.echartData.barH)
            })
        }
    }
</script>

<style scoped>

</style>