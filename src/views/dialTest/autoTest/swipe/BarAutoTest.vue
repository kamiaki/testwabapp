<template>
    <div id="myChartAutoTestBar" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
    import {inject, onMounted, onBeforeUnmount, watch} from "vue";
    import drawEcharts from './useBarDefault'

    export default {
        name: "BarAutoTest",
        props: ['autoTestData'],
        setup(props) {
            let echarts = inject("ec");//引入
            let myChart = {}

            function resize() {
                myChart.resize()
            }
            onMounted(() => {
                // 绘制图表
                myChart = echarts.init(document.getElementById("myChartAutoTestBar"));
                drawEcharts(echarts, myChart, props.autoTestData.echartData.bar)
                window.addEventListener('resize', resize)// 响应式大小
            });

            onBeforeUnmount(() => {
                window.removeEventListener('resize', resize)
            })

            watch(props.autoTestData, () => {
                drawEcharts(echarts, myChart, props.autoTestData.echartData.bar)
            })
        }
    }
</script>

<style scoped>

</style>