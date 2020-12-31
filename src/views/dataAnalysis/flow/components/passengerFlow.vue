<template>
  <div class="passengerFlow">
    <LineChart id="passengerFlow" width="100%" height="100%" :option="option" />
  </div>
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
          top: '32px', // 上边距
          // show: true,
          data: ['人数按天去重', '人数按小时去重', '人次'] // 展现不同系列的颜色和名称
        },
        grid: {
          // 绘图区域大小设置
          left: '45px',
          right: '35px',
          top: '130px',
          show: false
        },
        xAxis: {
          type: 'category', // 坐标轴类型
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
          splitLine: {
            show: true, // 是否显示分隔线
            lineStyle: {
              type: 'dashed' // 虚线
            }
          },
          axisTick: {
            show: false // 是否显示坐标轴刻度
          },
          axisLabel: {
            show: true // 是否显示刻度标签
          }
        },
        series: [
          {
            name: '人数按天去重',
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
            name: '人数按小时去重',
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
            name: '人次',
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

<style lang="less" scoped>
.passengerFlow {
  height: 100%;
}
</style>
