import {line} from "/@/dictionary/dataDictionary.js"


export default {
    drawEcharts: function (echarts, myChart, Data) {
        // 配置项
        const option = {
            title : {
                text: '各个网络类型的成功/失败比例', //主标题
                x: 'center', //标题位置
                y: 20,
                textStyle: {
                    color: '#ffffff'
                }
            },
            backgroundColor: '#00043A',
            tooltip: {
                trigger: 'axis',
                show: false,
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
            },
            legend: {
                show: false
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                splitLine: {
                    show: false
                },
                type: 'value',
                show: false,
            }],
            yAxis: [{
                splitLine: {
                    show: false
                },
                axisLine: { //y轴
                    show: false
                },
                type: 'category',
                axisTick: {
                    show: false
                },
                inverse: true,
                data: [line.mobile.name,
                    line.unicom.name,
                    line.telecom.name,
                    line.domain.name],
                axisLabel: {
                    color: '#A7D6F4',
                    fontSize: 14,
                }
            }],
            series: [{
                name: '标准化',
                type: 'bar',
                barWidth: 30, // 柱子宽度
                label: {
                    show: true,
                    position: 'right', // 位置
                    color: '#A7D6F4',
                    fontSize: 14,
                    distance: 15, // 距离
                    formatter: '{c} 个' // 这里是数据展示的时候显示的数据
                }, // 柱子上方的数值
                itemStyle: {
                    barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）

                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: '#51C5FD'
                    }, {
                        offset: 1,
                        color: '#005BB1'
                    }], false), // 渐变
                },
                data: Data.dataX
            },]
        };
        // 绘制
        myChart.setOption(option, true)
    }
}