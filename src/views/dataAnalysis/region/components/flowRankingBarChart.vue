<!--客流排行柱状图-->
<template>
  <div>
    <BarChart
      id="flowRankingBarChart"
      :option="option"
      width="100%"
      height="725px"
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
        title: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          show: false,
          left: '151px',
          right: '100px',
          top: '73px',
          bottom: '52px'
        },
        xAxis: {
          name: '客流数',
          type: 'value',
          axisLine: {
            show: true
          },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          name: '门店名称',
          nameTextStyle: {
            align: 'right', // 名称对齐方式
            padding: [0, 20, 0, 0]
          },
          type: 'category',
          data: [
            '钟落谭全球通',
            '百信广场华为店',
            '人和中国移动',
            '安华汇华为体验店',
            '人人佳华为店',
            '广州天河体验店'
          ],
          axisLabel: {
            color: '#141414' // 刻度标签颜色
          },
          axisTick: {
            show: false // 隐藏坐标轴刻度
          }
        },
        series: [
          {
            name: '人次',
            type: 'bar',
            data: [100, 200, 300, 400, 500, 700],
            barWidth: 24, // 柱形宽度
            itemStyle: {
              color: '#F8C498' // 柱形颜色
            }
          },
          {
            name: '人数',
            type: 'bar',
            data: [200, 150, 190, 230, 450, 560],
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
