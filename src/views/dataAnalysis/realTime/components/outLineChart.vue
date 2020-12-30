<template>
  <LineChart id="outLineChart" width="100%" height="450px" :option="option" />
</template>
<script>
import LineChart from '@/components/lineChart'
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis' // 提示框
        },
        legend: {
          icon: 'circle', //  控制形状
          right: '20px', // 右边距
          top: '20px', // 上边距
          data: ['今日', '昨天', '前天'] // 展现不同系列的颜色和名称
        },
        grid: {
          // 绘图区域大小设置
          left: '25px',
          right: '25px'
        },
        xAxis: {
          type: 'category', // 坐标轴类型
          data: [
            '8:00',
            '10:00',
            '12:00',
            '14:00',
            '16:00',
            '18:00',
            '20::00',
            '22:00'
          ],
          axisTick: {
            show: false // 是否显示坐标轴刻度
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false // 是否显示分隔线
          },
          axisTick: {
            show: false // 是否显示坐标轴刻度
          },
          axisLabel: {
            show: false // 是否显示刻度标签
          }
        },
        series: [
          {
            name: '今日',
            data: [20, 70, 60, 80, 90, 42, 100, 30],
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
            name: '昨天',
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
            name: '前天',
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
          }
        ]
      }
    }
  },
  components: {
    LineChart
  }
}
</script>

<style lang="less" scoped></style>
