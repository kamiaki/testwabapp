<template>
    <div id="myChartAutoTestLine" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
    import {inject, onMounted, onBeforeUnmount, watch} from "vue";
    import drawEcharts from './useLineDefault'

    export default {
        name: "LineAutoTest",
        props: ['autoTestData'],
        setup(props) {
            let echarts = inject("ec");//引入
            let myChart = {}

            function resize() {
                myChart.resize()
            }

            onMounted(() => {//需要获取到element,所以是onMounted的Hook
                // 绘制图表
                myChart = echarts.init(document.getElementById("myChartAutoTestLine"));
                drawEcharts(echarts, myChart, props.autoTestData.echartData.line)
                window.addEventListener('resize', resize)// 响应式大小
            });

            onBeforeUnmount(() => {
                window.removeEventListener('resize', resize)
            })

            watch(props.autoTestData, () => {
                drawEcharts(echarts, myChart, props.autoTestData.echartData.line)
            })
        }
    }
</script>

<style scoped>

</style>