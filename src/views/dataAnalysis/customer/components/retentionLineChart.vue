<template>
  <LineChart
    id="retentionLineChart"
    width="100%"
    height="450px"
    :option="option"
  />
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
          top: '20px', // 上边距
          show: false,
          data: ['今日'] // 展现不同系列的颜色和名称
        },
        grid: {
          // 绘图区域大小设置
          left: '25px',
          right: '25px'
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
            '2020-12-25',
            '2020-12-26',
            '2020-12-27',
            '2020-12-28'
          ],
          axisTick: {
            show: false // 是否显示坐标轴刻度
          }
        },
        yAxis: [
          {
            min: 0,
            max: 200,
            type: 'value',
            name: '客流量',
            nameGap: 25,
            nameTextStyle: {
              color: '#7A7A7A',
              fontSize: 14,
              align: 'center'
            },
            splitLine: {
              lineStyle: {
                type: 'dashed',
                width: 1
              }
            },
            axisTick: {
              show: false // 是否显示坐标轴刻度
            },
            axisLabel: {
              color: '#141414',
              fontSize: 13,
              margin: 3
            }
          }
        ],
        series: [
          {
            name: '今日',
            data: [20, 70, 60, 80, 90, 100, 100, 30, 80, 60],
            symbol: 'none', // 拐角圆点样式

            type: 'line',
            smooth: true,
            itemStyle: {
              color: '#4A92FF' // 折线颜色
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
                    color: '#4A92FF' // 0% 处的颜色
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
