<template>
    <div id="myChart2" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
    import {inject, onMounted, onBeforeUnmount} from "vue";
    import lineDefault from './lineDefault'

    export default {
        name: "LineAutoTest",
        props: ['lineData'],
        setup(props) {
            let echarts = inject("ec");//引入
            let myChart = {}
            function resize() {
                myChart.resize()
            }
            onMounted(() => {//需要获取到element,所以是onMounted的Hook
                myChart = echarts.init(document.getElementById("myChart2"));
                // 绘制图表
                myChart.setOption(lineDefault.option(echarts), true);
                window.addEventListener('resize', resize)// 响应式大小
            });
            onBeforeUnmount(() => {
                window.removeEventListener('resize', resize)
            })


            return {
                lineData: props.lineData
            }
        }
    }
</script>

<style scoped>

</style>