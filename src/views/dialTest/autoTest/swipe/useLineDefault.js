import {line} from "/@/dictionary/dataDictionary.js"

let bgColor = "#fff";
let color = [
    "#0090FF",
    "#36CE9E",
    "#FFC005",
    "#8B5CFF",
    "#FF515A",
    "#00CA69"
];
const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
            "0x" + hex.slice(3, 5)
        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
}

export default function (echarts, myChart, Data) {
    let names = [line.mobile.name, line.unicom.name, line.telecom.name, line.domain.name]
    let xAxisData = Data.xLabel;
    let yAxisData0 = Data.mobile;
    let yAxisData1 = Data.unicom;
    let yAxisData2 = Data.telecom;
    let yAxisData3 = Data.domain;

    const option = {
        title: {
            text: '最新拨测耗时展示', //主标题
            x: 'center', //标题位置
            y: 18,
            textStyle: {
                color: '#000000'
            }
        },
        backgroundColor: bgColor,
        color: color,
        legend: {
            align: "left",
            right: 50,
            top: 60,
            type: 'plain',
            textStyle: {
                color: '#7ec7ff',
                fontSize: 12
            },
            itemGap: 5,
            itemWidth: 10,
            data: [
                {
                    name: line.mobile.name
                },
                {
                    name: line.unicom.name
                },
                {
                    name: line.telecom.name
                },
                {
                    name: line.domain.name
                }
            ]
        },
        tooltip: {
            trigger: "axis",
            formatter: function (params) {
                let html = '';
                params.forEach(v => {
                    html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.seriesName}
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                ms`;
                })
                return html
            },
            extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
            axisPointer: {
                type: 'shadow',
                shadowStyle: {
                    color: '#ffffff',
                    shadowColor: 'rgba(225,225,225,1)',
                    shadowBlur: 5
                }
            }
        },
        grid: {
            top: 100,
            left: 40,
            right: 40,
            bottom: 50,
            // containLabel: true
        },
        xAxis: [{
            type: "category",
            boundaryGap: false,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: "#333"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#D9D9D9"
                }
            },
            data: xAxisData
        }],
        yAxis: [{
            type: "value",
            name: '耗时/ms',
            axisLabel: {
                textStyle: {
                    color: "#666"
                }
            },
            nameTextStyle: {
                color: "#666",
                fontSize: 12,
                lineHeight: 40
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#E9E9E9"
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: names[0],
            type: "line",
            smooth: true,
            showSymbol: false,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[0],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[0], 0.5),
                    shadowOffsetY: 8
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                            offset: 0,
                            color: hexToRgba(color[0], 0.3)
                        },
                            {
                                offset: 1,
                                color: hexToRgba(color[0], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 10
                }
            },
            data: yAxisData0
        },
            {
                name: names[1],
                type: "line",
                smooth: true,
                showSymbol: false,
                zlevel: 3,
                lineStyle: {
                    normal: {
                        color: color[1],
                        shadowBlur: 3,
                        shadowColor: hexToRgba(color[1], 0.5),
                        shadowOffsetY: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                offset: 0,
                                color: hexToRgba(color[1], 0.3)
                            },
                                {
                                    offset: 1,
                                    color: hexToRgba(color[1], 0.1)
                                }
                            ],
                            false
                        ),
                        shadowColor: hexToRgba(color[1], 0.1),
                        shadowBlur: 10
                    }
                },
                data: yAxisData1
            },
            {
                name: names[2],
                type: "line",
                smooth: true,
                showSymbol: false,
                zlevel: 3,
                lineStyle: {
                    normal: {
                        color: color[2],
                        shadowBlur: 3,
                        shadowColor: hexToRgba(color[2], 0.5),
                        shadowOffsetY: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                offset: 0,
                                color: hexToRgba(color[2], 0.3)
                            },
                                {
                                    offset: 1,
                                    color: hexToRgba(color[2], 0.1)
                                }
                            ],
                            false
                        ),
                        shadowColor: hexToRgba(color[2], 0.1),
                        shadowBlur: 10
                    }
                },
                data: yAxisData2
            }, {
                name: names[3],
                type: "line",
                smooth: true,
                showSymbol: false,
                zlevel: 3,
                lineStyle: {
                    normal: {
                        color: color[3],
                        shadowBlur: 3,
                        shadowColor: hexToRgba(color[3], 0.5),
                        shadowOffsetY: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                offset: 0,
                                color: hexToRgba(color[3], 0.3)
                            },
                                {
                                    offset: 1,
                                    color: hexToRgba(color[3], 0.1)
                                }
                            ],
                            false
                        ),
                        shadowColor: hexToRgba(color[3], 0.1),
                        shadowBlur: 10
                    }
                },
                data: yAxisData3
            }
        ]
    };
    // 绘制图表
    myChart.setOption(option, true)
}