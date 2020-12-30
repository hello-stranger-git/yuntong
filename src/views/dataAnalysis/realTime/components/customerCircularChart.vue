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
        <li v-for="(item, i) of proportionalData" :key="i">
          <Proportional
            :letfText="item.letfText"
            :leftIcon="item.leftIcon"
            :leftValue="item.leftValue"
            :rightText="item.rightText"
            :rightIcon="item.rightIcon"
            :rightValue="item.rightValue"
            :width="item.width"
            :bgColor="item.bgColor"
            :proportionColor="item.proportionColor"
          />
        </li>
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
      // 环形图数据
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
      },
      // 比例图数据
      proportionalData: [
        {
          // 左侧标题
          letfText: '男性',
          // 左侧图标
          leftIcon: require('@/assets/img/icon/boyIcon.png'),
          // 左侧数值:
          leftValue: 203,
          // 右侧标题
          rightText: '女性',
          // 右侧图标
          rightIcon: require('@/assets/img/icon/girlIcon.png'),
          // 右侧数值:
          rightValue: 44,
          // 比例宽度
          width: '50%',
          // 背景颜色
          bgColor: '#FF8181',
          // 比例条颜色
          proportionColor: '#4A92FF'
        },
        {
          letfText: '回头客',
          leftIcon: require('@/assets/img/icon/user.png'),
          leftValue: 203,
          width: '90%',
          proportionColor: '#56BE9B'
        },
        {
          letfText: '会员',
          leftIcon: require('@/assets/img/icon/huuiyuan.png'),
          leftValue: 203,
          width: '30%',
          proportionColor: '#F8C498'
        }
      ]
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
    padding-top: 50px;
    ul li {
      margin-bottom: 47px;
    }
  }
}
</style>
