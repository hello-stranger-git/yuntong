<template>
  <div class="chainComparison">
    <dl v-for="(item, i) of chainComparisonData" :key="i">
      <dt><img :src="item.icon" /></dt>
      <dd>
        <h3>{{ item.text }}</h3>
        <span>{{ item.number }}</span>
        <p>
          <span>环比</span>
          <img :src="item.rise ? shangsheng : xiajiang" />
          <span>{{ item.ChainComparison }}</span>
        </p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xiajiang: require('@/assets/img/dataAnalysis/flow/xiajiang.png'), // 下降图标
      shangsheng: require('@/assets/img/dataAnalysis/flow/shangsheng.png'), // 上升图标
      chainComparisonData: [
        {
          icon: require('@/assets/img/dataAnalysis/flow/jindian.png'),
          text: '进店客流',
          number: '134',
          rise: false,
          ChainComparison: '11.30%'
        },
        {
          icon: require('@/assets/img/dataAnalysis/flow/dianwai.png'),
          text: '店外客流',
          number: '134',
          rise: false,
          ChainComparison: '11.30%'
        },
        {
          icon: require('@/assets/img/dataAnalysis/flow/keliu.png'),
          text: '客流总人数',
          number: '134',
          rise: false,
          ChainComparison: '11.30%'
        },
        {
          icon: require('@/assets/img/dataAnalysis/flow/rijun.png'),
          text: '日均人数',
          number: '134',
          rise: true,
          ChainComparison: '11.30%'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.chainComparison {
  display: flex;
  flex-wrap: wrap;
  dl {
    display: flex;
    margin: 0 65px;
    margin-top: 86px;
    margin-bottom: 69px;
    dt {
      width: 106px;
      height: 106px;
      img {
        width: 100%;
      }
    }
    dd {
      margin-left: 24px;
      font-size: 24px;

      text-align: center;
      h3 {
        font-weight: 400;
      }
      & > span {
        margin-top: 7px;
        font-weight: bold;
      }
      p {
        color: #4ed16c;
        margin-top: 11px;
        list-style: 20px;

        img {
          vertical-align: middle;
          width: 11px;
          height: 20px;
          margin: 0 8px;
        }
      }
    }
  }
}
</style>
