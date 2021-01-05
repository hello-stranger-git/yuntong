<!--区域排行柱状图-->
<template>
  <BarChart id="regionRankingBarChart" :option="option" />
</template>

<script>
import BarChart from '@/components/barChart'
export default {
  components: {
    BarChart
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis'
        },

        grid: {
          show: false,
          left: '93px',
          right: '45px',
          top: '100px',
          bottom: '100px'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['白云区', '天河区', '番禺区', '荔湾区', '越秀区'],
            axisTick: {
              show: false // 隐藏坐标轴刻度
            }
          }
        ],
        yAxis: {
          type: 'value',
          name: '客流数',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          nameTextStyle: {
            align: 'right', // 名称对齐方式
            padding: [0, 9, 0, 0]
          }
        },
        series: [
          {
            name: '人次',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6],
            barWidth: 24, // 柱形宽度
            itemStyle: {
              color: '#F8C498' // 柱形颜色
            }
          },
          {
            name: '人数',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7],
            barWidth: 24, // 柱形宽度
            itemStyle: {
              color: '#56BE9B' // 柱形颜色
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
