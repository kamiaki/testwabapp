<template>
    <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
    import {inject, onMounted, onBeforeUnmount} from "vue";
    import barDefault from './barDefault'

    export default {
        name: "BarAutoTest",
        props: ['barData'],
        setup(props) {
            let echarts = inject("ec");//引入
            let myChart = {}
            let echartsData = {dataX: [34, 15, 28, 11]}

            function resize() {
                myChart.resize()
            }

            onMounted(() => {//需要获取到element,所以是onMounted的Hook
                myChart = echarts.init(document.getElementById("myChart"));
                // 绘制图表
                myChart.setOption(barDefault.option(echarts, echartsData), true);
                window.addEventListener('resize', resize)// 响应式大小
            });
            onBeforeUnmount(() => {
                window.removeEventListener('resize', resize)
            })


            return {
                barData: props.barData
            }
        }
    }
</script>

<style scoped>

</style>