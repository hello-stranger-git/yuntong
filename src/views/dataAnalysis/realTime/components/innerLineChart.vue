<template>
  <div>
    <LineChart
      id="innerLineChart"
      width="100%"
      height="450px"
      :option="option"
    />
  </div>
</template>

<script>
import LineChart from '@/components/lineChart'
export default {
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
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
