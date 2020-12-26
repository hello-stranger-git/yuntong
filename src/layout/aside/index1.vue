<template>
  <div class="contain">
    <div class="head">
      <img :src="logo" />
      <div class="name">云瞳</div>
    </div>
    <!-- 遍历路由表 -->
    <div
      v-for="(item, index) in routes"
      :key="index"
      class="menu"
      :class="activeIndex === index ? 'activeItem' : ''"
    >
      <div :class="{ item: true }" @click="item.flag = !routes[index].flag">
        <div
          :class="{ icon: true }"
          :style="{ color: activeIndex === index ? '#38414A' : '' }"
        >
          <i :class="'iconfont ' + item.icon"></i>
        </div>
        <div :style="{ color: activeIndex === index ? '#38414A' : '' }">
          {{ item.value }}
        </div>
      </div>
      <ul
        v-if="item.childrens"
        :style="{
          height: item.flag ? 42 * item.childrens.length + 'px' : '0px'
        }"
      >
        <li v-for="(params, i) in item.childrens" :key="i">
          {{ params.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import huaweiLogo from '@/assets/img/layout/huaweiLogo.png'
export default {
  data() {
    return {
      flag: true,
      flag1: false,
      flag2: false,
      logo: huaweiLogo,
      activeIndex: 0,
      routes: [
        {
          value: '实时大屏',
          icon: 'iconzu831'
        },
        {
          value: '门店分布',
          icon: 'iconzu683'
        },
        {
          value: '数据分析',
          flag: false,
          icon: 'iconzu686',
          childrens: [
            { value: '实时分析' },
            { value: '客流分析' },
            { value: '顾客分析' },
            { value: '区域排行' },
            { value: '会员识别' },
            { value: '多店对比' },
            { value: '识别驾驶' },
            { value: '波次统计' },
            { value: '统计报表' },
            { value: '考勤统计' }
          ]
        },
        {
          value: '实时视频',
          icon: 'iconzu831'
        },
        {
          value: '视频巡查',
          icon: 'iconzu688'
        },
        {
          value: '语音巡查',
          icon: 'iconzu694'
        },
        {
          value: '巡查任务',
          icon: 'iconzu695'
        },
        {
          value: '门店管理',
          icon: 'iconzu697'
        },
        {
          value: '运维管理',
          icon: 'iconzu699'
        },
        {
          value: '参数配置',
          icon: 'iconzu705'
        },
        {
          value: '工单',
          icon: 'iconzu73'
        },
        {
          value: '流量与计费',
          icon: 'iconzu777'
        },
        {
          value: '系统管理',
          icon: 'iconzu804'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.contain {
  padding: 0 40px 0 28px;
  overflow: auto;
  .head {
    height: 81px;
    position: relative;
    img {
      position: absolute;
      top: 21px;
      left: 13px;
      cursor: pointer;
    }
    .name {
      position: absolute;
      top: 29px;
      left: 80px;
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .activeItem {
    background-color: #fff;
    font-weight: bold;
    border-radius: 5px;
  }
  .menu {
    .item {
      position: relative;
      height: 42px;
      line-height: 42px;
      border-radius: 5px;
      font-size: 14px;
      padding-left: 52px;
      color: #fff;
      .icon {
        position: absolute;
        left: 20px;
        top: 0;
      }
    }
    .item:hover {
      background-color: pink;
    }
    ul {
      transition: height 0.3s;
      overflow: hidden;
    }
    ul > li {
      height: 42px;
      line-height: 42px;
      padding-left: 52px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
      border-radius: 5px;
    }
    ul > li:hover {
      background-color: lightblue;
    }
  }
}
.contain::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}
</style>
