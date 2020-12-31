<!--顾客年龄段柱状图-->
<template>
  <div>
    <BarChart
      id="customerBarChart"
      class="customerBarChart"
      width="100%"
      height="350px"
      :option="option"
    />
  </div>
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
        xAxis: {
          type: 'category',
          data: ['少年11~17', '青年20~30岁', '中年40~59岁', '老年46岁以上'],
          axisLine: {
            lineStyle: {
              color: '#707070'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#141414',
            fontSize: 14
          }
        },
        yAxis: {
          type: 'value',
          name: '客流数',
          nameTextStyle: {
            color: '#7A7A7A',
            fontSize: 14,
            align: 'right'
          },
          nameGap: 25,
          min: 0,
          max: 200,
          axisLabel: {
            color: '#141414',
            fontSize: 13
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              width: 1
            }
          }
        },
        series: [
          {
            data: [75, 190, 170, 40],
            type: 'bar',
            barWidth: 32,
            itemStyle: {
              color: '#F1835B'
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.customerBarChart {
  margin-top: 30px;
}
</style>
