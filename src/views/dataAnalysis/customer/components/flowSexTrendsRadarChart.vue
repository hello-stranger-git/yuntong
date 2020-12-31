<template>
  <div>
    <RadarChart
      id="flowSexTrendsRadarChart"
      width="100%"
      height="320px"
      :option="option"
    />
  </div>
</template>

<script>
import RadarChart from '@/components/radarChart'
export default {
  components: {
    RadarChart
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item',
          borderWidth: 0,
          borderColor: '#ffffff',
          textStyle: { color: '#141414', fontSize: 14, fontWeight: 'normal' }
          // formatter: function(params) {
          //   let Html = ''
          //   for (let i = 0; i < params.value.length; i++) {
          //     Html += `<br/><span style="display:inline-block;margin-right:4px;border-radius:50%;width:10px;height:10px;background-color:#FF0000;"></span>${params.value[i]}`
          //   }
          //   // return result
          //   return `${params.name}${Html}`
          // }
        },
        radar: {
          name: {
            textStyle: {
              color: '#141414',
              fontSize: 14
            }
          },
          indicator: [
            { name: '2020-12-19', max: 100 },
            { name: '2020-12-20', max: 100 },
            { name: '2020-12-21', max: 100 },
            { name: '2020-12-22', max: 100 },
            { name: '2020-12-23', max: 100 },
            { name: '2020-12-24', max: 100 }
          ]
        },
        series: [
          {
            type: 'radar',
            tooltip: {
              extraCssText: 'box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);'
            },
            data: [
              {
                value: [25, 30, 40, 40, 40, 10, 13],
                name: '男',
                symbol: 'none',
                lineStyle: {
                  color: '#FF0000'
                }
                // tooltip: {
                //   textStyle: {
                //     fontWeight: 'normal',
                //     fontSize: 14,
                //     color: '#000000'
                //   }
                // }
              },
              {
                value: [30, 70, 50, 70, 30, 25, 15, 25],
                name: '女',
                symbol: 'none',
                lineStyle: {
                  color: '#FF0000'
                },
                tooltip: {
                  textStyle: {
                    fontWeight: 'normal',
                    fontSize: 14,
                    color: '#000000'
                  }
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

<style lang="scss" scoped></style>
