<template>
    <div>大家好我是个柱状图</div>
    <div>{{barData.name}}</div>
    <div id="myChart" :style="{width: '100%', height: '500px'}"></div>

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
            function resize() {
                myChart.resize()
            }
            onMounted(() => {//需要获取到element,所以是onMounted的Hook
                myChart = echarts.init(document.getElementById("myChart"));
                // 绘制图表
                myChart.setOption(barDefault.option(echarts), true);
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