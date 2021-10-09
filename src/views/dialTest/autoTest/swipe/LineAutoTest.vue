<template>
    <div id="myChart2" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
    import {inject, onMounted, onBeforeUnmount, watch} from "vue";
    import lineDefault from './lineDefault'

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
                myChart = echarts.init(document.getElementById("myChart2"));
                lineDefault.drawEcharts(echarts, myChart, props.autoTestData.echartData.line)
                window.addEventListener('resize', resize)// 响应式大小
            });

            onBeforeUnmount(() => {
                window.removeEventListener('resize', resize)
            })

            watch(props.autoTestData, () => {
                lineDefault.drawEcharts(echarts, myChart, props.autoTestData.echartData.line)
            })
        }
    }
</script>

<style scoped>

</style>