import {line} from "/@/dictionary/dataDictionary.js"

export default function (echarts, myChart, Data) {
    // 配置项
    const option = {
        title: {
            text: '近十次平均拨测结果', //主标题
            x: 'center', //标题位置
            y: 20,
            textStyle: {
                color: '#000000'
            }
        },
        backgroundColor: '#ffffff',
        color: ["#63caff", "#3608FE"],
        grid: {
            containLabel: true,
            left: 50,
            right: 50,
            bottom: 50,
            top: 100
        },
        xAxis: {
            axisLabel: {
                color: "#666666",
                fontSize: 14,
                interval: 0
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#d0dbff",
                    width: 1,
                    type: "solid"
                },
                show: true
            },
            data: [line.mobile.name,
                line.unicom.name,
                line.telecom.name,
                line.domain.name],
            type: "category"
        },
        yAxis: {
            axisLabel: {
                color: "#424242",
                fontSize: 14
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "#c3c9e8",
                    type: "solid"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#d0dbff",
                    width: 1,
                    type: "solid"
                },
                show: true
            },
            name: "耗时/ms",
            nameTextStyle: {
                color: '#000000'
            }
        },
        series: [{
            data: Data.dataX,
            type: "bar",
            barWidth: 30,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                        offset: 0,
                        color: "#3A1BFD"
                    }, {
                        offset: 1,
                        color: "#3BEFFD"
                    }]
                }
            },
            label: {
                show: true,
                position: "top",
                distance: 10,
                color: "#828282"
            }
        }, {
            data: [1, 1, 1, 1],
            type: "pictorialBar",
            barMaxWidth: "20",
            symbol: "diamond",
            symbolOffset: [0, "50%"],
            symbolSize: [30, 15]
        }, {
            data: Data.dataX,
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [30, 12],
            zlevel: 2
        }],
        tooltip: {
            trigger: "item",
            show: true
        }
    }
    // 绘制
    myChart.setOption(option, true)
}