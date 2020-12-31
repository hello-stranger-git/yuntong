<!--年龄趋势折线图-->
<template>
  <div>
    <LineChart
      id="innerLineChart"
      width="715px"
      height="360px"
      :option="option"
    />
  </div>
</template>

<script>
import LineChart from '@/components/lineChart'
export default {
  components: {
    LineChart
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis' // 提示框
        },
        legend: {
          icon: 'circle', //  控制形状
          right: '20px', // 右边距
          top: '-5px', // 上边距
          // show: true,
          width: '270px',
          data: ['少年11-17岁', '青年20-30岁', '中年40-59岁', '老年60岁以上'] // 展现不同系列的颜色和名称
        },
        grid: {
          // 绘图区域大小设置
          left: '25px',
          right: '25px'
        },
        xAxis: {
          type: 'category', // 坐标轴类型
          axisLine: {
            lineStyle: {
              color: '#707070'
            }
          },
          axisLabel: {
            color: '#141414',
            fontSize: 14
          },
          data: [
            '2020-12-19',
            '2020-12-20',
            '2020-12-21',
            '2020-12-22',
            '2020-12-23',
            '2020-12-24',
            '2020-12-25'
          ],
          axisTick: {
            show: false // 是否显示坐标轴刻度
          }
        },
        yAxis: {
          type: 'value',
          name: '客流数',
          nameGap: 25,
          nameTextStyle: {
            color: '#7A7A7A',
            fontSize: 14,
            align: 'center'
          },

          axisLabel: {
            color: '#141414',
            fontSize: 13,
            margin: 5
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              width: 1
            }
          },
          axisTick: {
            show: false // 是否显示坐标轴刻度
          }
        },
        series: [
          {
            name: '少年11-17岁',
            data: [20, 70, 60, 80, 90, 120, 100, 30],
            symbol: 'none', // 拐角圆点样式

            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#74d2c6' // 折线颜色
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 1,
                y: 1,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    //  区域填充样式
                    offset: 1,
                    color: '#56BE9B' // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: '#fff' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },
          {
            name: '青年20-30岁',
            data: [10, 50, 25, 32, 70, 42],
            symbol: 'none', // 拐角圆点样式

            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#e8b299' // 折线颜色
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 1,
                y: 1,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    //  区域填充样式
                    offset: 1,
                    color: '#F1835B' // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: '#fff' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },
          {
            name: '中年40-59岁',
            data: [10, 30, 25, 50, 40, 30, 49, 20],
            symbol: 'none', // 拐角圆点样式

            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#f7a3c0' // 折线颜色
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 1,
                y: 1,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    //  区域填充样式
                    offset: 1,
                    color: '#FEA8C5' // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: '#fff' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },

          {
            name: '老年60岁以上',
            data: [15, 35, 40, 30, 80, 50, 30, 42],
            symbol: 'none', // 拐角圆点样式

            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#F8C498' // 折线颜色
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 1,
                y: 1,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    //  区域填充样式
                    offset: 1,
                    color: '#F8C498' // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: '#fff' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
