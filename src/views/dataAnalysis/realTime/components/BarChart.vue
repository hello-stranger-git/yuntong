<template>
  <div style="width:100%">
    <canvas
      id="priceBarChart"
      width="1600"
      height="460"
      style="margin-top:13px"
    ></canvas>
  </div>
</template>

<script>
import Bar from '@/components/bar.js'
export default {
  props: {},
  data() {
    return {}
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      const bar = new Bar('priceBarChart')
      bar.setData({
        yMaxMark: 8000,
        yMaxMarkAverage: 1000,
        data1: [
          5000,
          4000,
          4500,
          0,
          5000,
          4000,
          5000,
          4200,
          3500,
          3500,
          4000,
          4300
        ],
        data2: [
          3000,
          2000,
          3500,
          0,
          3000,
          3000,
          4500,
          3000,
          3100,
          3200,
          3200,
          3000
        ],
        dashLine: [
          2500,
          1000,
          175,
          0,
          1050,
          2000,
          2050,
          2020,
          1050,
          1600,
          1600,
          1500
        ],
        xShowLine: false,
        legend: [
          { color: '#E60012', title: '客单价', shape: 'line' },
          { color: '#56BE9B', title: '客流人数', shape: 'arc' },
          { color: '#F8C498', title: '销售额', shape: 'arc' }
        ],
        xLabel: [
          '今日',
          '日',
          '六',
          '歇',
          '11-12',
          '11-11',
          '11-10',
          '11-09',
          '11-08',
          '11-07',
          '11-06',
          '11-05'
        ],
        otherLabel: [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.priceBarChart {
  width: 100%;
}
</style>
