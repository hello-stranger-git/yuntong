<template>
  <div style="width:100%;text-align:center">
    <BarChart id="flowBarChart" :option="option" width="100%" height="500px" />
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
        grid: {
          left: 48,
          right: 48,
          bottom: 30
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          name: '店铺',
          data: [
            '百信广场苹果专卖店',
            '百信广场华为体验店',
            '钟落潭全球通',
            '雄州城华为体验店',
            '人人佳华为体验店',
            '太和华为体验店',
            '同和华为体验店',
            '安华汇华为体验店',
            '从化区华为体验店',
            '百信广场西区华为店'
          ],
          nameTextStyle: {
            color: '#7A7A7A',
            fontWeight: 400,
            fontSize: 14
          },
          lineStyle: {
            color: '#707070'
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            color: '#141414',
            fontWeight: 400,
            fontSize: 14,
            interval: 0
          }
        },
        yAxis: {
          type: 'value',
          name: '客流量',
          nameTextStyle: {
            color: '#7A7A7A',
            fontSize: 14,
            fontWeight: 400,
            padding: [0, 40, 16, 0]
          },
          axisLabel: {
            color: '#141414',
            fontWeight: 400,
            fontSize: 13
          },
          splitLine: {
            lineStyle: {
              color: '#E5E5E5',
              type: 'dashed'
            }
          }
        },
        series: [
          {
            data: [225, 210, 180, 170, 140, 150, 112, 100, 70, 80],
            type: 'bar',
            itemStyle: {
              color: '#27C4FF'
            },
            barWidth: 32
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
