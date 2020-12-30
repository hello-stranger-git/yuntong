<template>
  <div class="customerCircularChart">
    <!-- 环形图 -->
    <div class="annular">
      <CircularChart width="100%" height="100%" :option="option" />
      <div class="total">
        <span>123</span>
        <p>总人数</p>
      </div>
    </div>
    <div class="proportion">
      <ul>
        <li><Proportional /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import CircularChart from '@/components/circularChart'
import Proportional from '@/components/proportional'
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          icon: 'circle',
          left: '20%',
          bottom: '0%',
          data: ['老年', '中年', '青年', '少年']
        },
        grid: {
          // show: true,
          x: 1,
          y: 1,
          x2: 1,
          y2: 1
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            center: ['50%', '40%'], // 设置环形图外边距
            label: {
              show: false,
              position: 'center'
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: '30',
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: '老年' },
              { value: 310, name: '中年' },
              { value: 234, name: '青年' },
              { value: 135, name: '少年' }
            ]
          }
        ]
      }
    }
  },

  components: {
    CircularChart,
    Proportional
  }
}
</script>

<style lang="less" scoped>
.customerCircularChart {
  display: flex;
  .annular {
    height: 400px;
    width: 300px;
    // border: 1px solid red;
    position: relative;
  }
  .total {
    position: absolute;
    top: 119px;
    left: 112px;
    text-align: center;
    span {
      font-size: 30px;
      color: #343434;
      font-weight: bold;
      width: 100%;
      display: block;
    }
    p {
      font-size: 24px;
    }
  }
  .proportion {
    // border: 1px solid red;
    flex: 1;
  }
}
</style>
