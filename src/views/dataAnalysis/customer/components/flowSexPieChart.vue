<template>
  <div>
    <CircularChart
      id="flowSexPieChart"
      class="flowSexPieChart"
      width="100%"
      height="360px"
      :option="option"
    />
  </div>
</template>

<script>
import CircularChart from '@/components/circularChart'
export default {
  components: {
    CircularChart
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: '73%',
          top: '25%',
          data: ['女性', '男性'],
          textStyle: {
            color: '#000000',
            fontSize: 16
          },
          icon: 'circle',
          itemGap: 30
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '65%',
            center: ['35%', '40%'],
            data: [
              {
                value: 10,
                name: '女性',
                itemStyle: {
                  color: '#FF8181'
                },
                label: {
                  color: '#FF8181'
                }
              },
              {
                value: 100,
                name: '男性',

                itemStyle: {
                  color: '#4A92FF'
                },
                label: {
                  color: '#4A92FF'
                }
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.flowSexPieChart {
  margin-top: 26px;
}
</style>
