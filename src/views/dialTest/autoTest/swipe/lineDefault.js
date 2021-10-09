let xLabel = [1, 2, 3, 4, 5, 6]
let mobile = ["40", "60", "22", "85", "50", "40"]
let unicom = [2, 3, 55, 11, 8, 3]
let telecom = ["20", "65", "12", "1", "30", "60"]
let domain = ["20", "50", "78", "65", "24", "60"]


export default {
    option: function (echarts) {
        return {
            title: {
                text: '最新拨测耗时展示', //主标题
                x: 'center', //标题位置
                y: 20,
                textStyle: {
                    color: '#ffffff'
                }
            },
            backgroundColor: '#0e1c47',
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'transparent',
                axisPointer: {
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(126,199,255,0)' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: 'rgba(126,199,255,1)' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(126,199,255,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                },
                formatter: (p) => {
      let dom = `<div style="color:#fff;position: relative;background: rgba(0,0,0,0.5)">
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
            <div style="width:100%;height:100%;display:${p[0] ? 'flex' : 'none'};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[0] ? p[0].seriesName : ''}</span>
                <span style="font-size:14px;color:#fff;">${p[0] ? p[0].data : ''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[1] ? 'flex' : 'none'};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[1] ? p[1].seriesName : ''}</span>
                <span style="font-size:14px;color:#fff;">${p[1] ? p[1].data : ''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[2] ? 'flex' : 'none'};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[2] ? p[2].seriesName : ''}</span>
                <span style="font-size:14px;color:#fff;">${p[2] ? p[2].data : ''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[3] ? 'flex' : 'none'};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[3] ? p[3].seriesName : ''}</span>
                <span style="font-size:14px;color:#fff;">${p[3] ? p[3].data : ''}</span>
            </div>
        </div>
    </div>`
                    return dom
                }
            },
            legend: {
                align: "left",
                right: '5%',
                top: '14%',
                type: 'plain',
                textStyle: {
                    color: '#7ec7ff',
                    fontSize: 16
                },
                // icon:'rect',
                itemGap: 25,
                itemWidth: 18,
                icon: 'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

                data: [
                    {
                        name: 'xxxx2'
                    },
                    {
                        name: 'xxxx3'
                    },
                    {
                        name: 'xxxx4'
                    },
                    {
                        name: 'xxxx5'
                    }
                ]
            },
            grid: {
                top: '18%',
                left: '15%',
                right: '5%',
                bottom: '25%',
                // containLabel: true
            },
            xAxis: [{
                name: '(次)',
                type: 'category',
                boundaryGap: false,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#233653'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#7ec7ff',
                        padding: 16,
                        fontSize: 14
                    },
                    formatter: function (data) {
                        return data
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#192a44'
                    },
                },
                axisTick: {
                    show: false,
                },
                data: xLabel
            }],
            yAxis: [{
                name: '耗时/ms',
                nameTextStyle: {
                    color: "#7ec7ff",
                    fontSize: 16,
                    padding: 10
                },
                min: 0,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#192a44'
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#233653"
                    }

                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#7ec7ff',
                        padding: 16
                    },
                    formatter: function (value) {
                        if (value === 0) {
                            return value
                        }
                        return value
                    }
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [{
                name: 'xxxx2',
                type: 'line',
                symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true,
                symbolSize: 0,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 5,
                        color: "rgba(25,163,223,1)", // 线条颜色
                    },
                    borderColor: 'rgba(0,0,0,.4)',
                },
                itemStyle: {
                    color: "rgba(25,163,223,1)",
                    borderColor: "#646ace",
                    borderWidth: 2

                },
                tooltip: {
                    show: true
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(25,163,223,.3)"


                        },
                            {
                                offset: 1,
                                color: "rgba(25,163,223, 0)"
                            }
                        ], false),
                        shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                        shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                    }
                },
                data: mobile
            }, {
                name: 'xxxx3',
                type: 'line',
                symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true,
                symbolSize: 0,
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 5,
                        color: "rgba(10,219,250,1)", // 线条颜色
                    },
                    borderColor: 'rgba(0,0,0,.4)',
                },
                itemStyle: {
                    color: "rgba(10,219,250,1)",
                    borderColor: "#646ace",
                    borderWidth: 2

                },
                tooltip: {
                    show: true
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(10,219,250,.3)"
                        },
                            {
                                offset: 1,
                                color: "rgba(10,219,250, 0)"
                            }
                        ], false),
                        shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
                        shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                    }
                },
                data: unicom
            }
                ,
                {
                    name: 'xxxx4',
                    type: 'line',
                    symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
                    showAllSymbol: true,
                    symbolSize: 0,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 5,
                            color: "rgba(10,219,250,1)", // 线条颜色
                        },
                        borderColor: 'rgba(0,0,0,.4)',
                    },
                    itemStyle: {
                        color: "rgba(10,219,250,1)",
                        borderColor: "#646ace",
                        borderWidth: 2

                    },
                    tooltip: {
                        show: true
                    },
                    areaStyle: { //区域填充样式
                        normal: {
                            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(10,219,250,.3)"
                            },
                                {
                                    offset: 1,
                                    color: "rgba(10,219,250, 0)"
                                }
                            ], false),
                            shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
                            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    data: telecom
                }
                ,
                {
                    name: 'xxxx5',
                    type: 'line',
                    symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
                    showAllSymbol: true,
                    symbolSize: 0,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            width: 5,
                            color: "rgba(10,219,250,1)", // 线条颜色
                        },
                        borderColor: 'rgba(0,0,0,.4)',
                    },
                    itemStyle: {
                        color: "rgba(10,219,250,1)",
                        borderColor: "#646ace",
                        borderWidth: 2

                    },
                    tooltip: {
                        show: true
                    },
                    areaStyle: { //区域填充样式
                        normal: {
                            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(10,219,250,.3)"
                            },
                                {
                                    offset: 1,
                                    color: "rgba(10,219,250, 0)"
                                }
                            ], false),
                            shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
                            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    data: domain
                }]
        }
    }
}