<!--人数占比饼状图-->
<template>
  <CircularChart
    id="peopleNumberCircularChart"
    :option="option"
    height="270px"
  />
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
        title: {
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '50px',
          top: '30px',
          icon: 'circle',
          itemGap: 15,
          itemWidth: 10,
          data: ['白云区', '荔湾区', '番禺区', '天河区', '越秀区'],
          show: false
        },

        series: [
          {
            name: '人数占比',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              {
                value: 335,
                name: '白云区',
                label: { show: false }
              },
              {
                value: 310,
                name: '荔湾区',
                label: { show: false }
              },
              {
                value: 234,
                name: '番禺区',
                label: { show: false }
              },
              {
                value: 135,
                name: '天河区',
                label: { show: false }
              },
              {
                value: 1548,
                name: '越秀区',
                label: { show: false }
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
