<template>
  <div :id="id" :style="'height:' + height + ';' + 'width:' + width"></div>
</template>

<script>
export default {
  props: {
    // 唯一标识符
    id: { type: String, default: 'lineChart' },
    // 宽
    width: {
      type: String,
      default: '100%'
    },
    // 高
    height: {
      type: String,
      default: '100%'
    },
    option: {
      // 所有配置
      type: Object,
      default: null
    }
  },
  methods: {
    drawChart() {
      console.log(this.option)
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById(this.id))
      const option = this.option
      myChart.setOption(option)
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>

<style lang="less" scoped></style>
