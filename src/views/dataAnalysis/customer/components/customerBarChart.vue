<!--顾客年龄段柱状图-->
<template>
  <div>
    <BarChart
      id="customerBarChart"
      width="100%"
      height="100%"
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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
