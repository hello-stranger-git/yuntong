<!--客流分析-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <!-- 区域选择 -->
      <span @click="drawer">
        <el-input
          v-model="searchValue"
          placeholder="请选择机构"
          readonly="readonly"
        />
      </span>
      <!-- 侧边弹出层 -->
      <SingleChoice ref="singleChoice" @change="obtain" />
      <el-select
        v-model="selectValue"
        clearable
        placeholder="请选择"
        class="select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="margin-left:24px"
      />

      <el-button
        type="primary"
        class="searchBtn"
        :style="
          `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
        "
        >查询</el-button
      >
      <el-button type="info" class="resetBtn" @click="reset">重置</el-button>
    </div>
    <!--客流分析-->
    <div class="module folw">
      <!-- 客流分析 -->
      <div class="left">
        <div class="titleDiv">
          <span class="title">
            客流分析
          </span>
        </div>
        <PassengerFlow />
      </div>
      <!-- 右边 -->
      <div class="right">
        <ChainComparison />
      </div>
    </div>

    <!--店外和时间段-->
    <div class="module inner">
      <!-- 左边 -->
      <div class="left">
        <div class="titleDiv">
          <span class="title">
            店外客流分析
          </span>
        </div>
        <OutPassengerFlow />
      </div>
      <!-- 右边 -->
      <div class="right">
        <div class="titleDiv">
          <span class="title">
            时间段客流
          </span>
        </div>
        <TimeSlotFlow />
      </div>
    </div>

    <!--客群特征和热力图-->
    <div class="module feature">
      <!-- 左边 -->
      <div class="left">
        <div class="titleDiv">
          <span class="title">
            客群特征
          </span>
        </div>
        <Customers />
      </div>
      <!-- 右边 -->
      <div class="right">
        <div class="titleDiv">
          <span class="title">
            热力图
          </span>
        </div>
        <HeatMap />
      </div>
    </div>

    <!-- 客流单价分析 -->
    <div class="price">
      <div class="titleDiv">
        <span class="title">
          客流单价分析
        </span>
      </div>
      <div id="priceBar" style="width:100%;text-align:center">
        <PriceBarChart />
      </div>
    </div>

    <div style="text-align:center;margin-top:24px">
      <span
        :style="
          `font-size: 16px;color: #FFFFFF;display:inline-block;width: 166px;height: 59px;background: #4A92FF;border-radius: 8px;line-height:59px;text-align:center;background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
        "
      >
        导出报表
      </span>
    </div>
  </div>
</template>

<script>
import SingleChoice from '@/components/popupTree/singleChoice.vue' // 单选弹出层

import PassengerFlow from './components/passengerFlow' // 客流分析
import OutPassengerFlow from './components/outPassengerFlow' // 店外客流分析
import TimeSlotFlow from './components/timeSlotFlow' // 时间段客流
import Customers from './components/customers' // 客群特征
import HeatMap from './components/heatMap' // 热力图
import ChainComparison from './components/chainComparison'

import PriceBarChart from '../realTime/components/BarChart' // 引入最后一个柱状图
export default {
  components: {
    PriceBarChart,
    PassengerFlow,
    OutPassengerFlow,
    TimeSlotFlow,
    Customers,
    HeatMap,
    ChainComparison,
    SingleChoice
  },
  data() {
    return {
      // 搜索模块数据start
      // 搜索输入框
      searchValue: '',
      date: '', // 日期选中器
      // 下拉框里面的数据
      options: [
        {
          value: '1',
          label: '雅宝COCOPark体验店'
        },
        {
          value: '2',
          label: '龙岗体验店'
        },
        {
          value: '3',
          label: '南坑体验店'
        },
        {
          value: '4',
          label: '布吉体验店'
        },
        {
          value: '5',
          label: '福田体验店'
        }
      ],
      // 下拉框值
      selectValue: ''
      // 搜索模块数据end
    }
  },
  methods: {
    // 触发调用子组件方法
    drawer() {
      this.$refs.singleChoice.show()
    },
    // 获取子组件选择数据
    obtain(i) {
      this.searchValue = i
    },
    // 触发重置输入框
    reset() {
      this.searchValue = ''
      this.selectValue = ''
      this.date = ''
    }
  }
}
</script>

<style lang="less" scoped>
//搜索板块
.search {
  box-sizing: border-box;
  padding: 20px 24px;
  height: 80px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  /deep/.el-input {
    width: 280px;
  }
  .select {
    margin-left: 24px;
  }
  .searchBtn {
    margin-left: 48px;
  }
  .resetBtn {
    margin-left: 24px;
  }
  .el-button {
    width: 90px;
  }
}

//客流分析
.folw {
  height: 541px;
}
//店外和时间段
.inner {
  height: 400px;
}
//客群特征
.feature {
  height: 521px;
}
//模板
.module {
  margin-top: 24px;
  display: flex;
  .left {
    width: 50%;
    background-color: #ffffff;
    margin-right: 26px;
    border-radius: 10px;
  }
  .right {
    width: 50%;
    background-color: #ffffff;
    border-radius: 10px;
  }
}

//头部title全部公用样式
.titleDiv {
  margin: 24px 24px 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  float: left;
  .title {
    font-size: 28px;
    font-weight: bold;
    color: #141414;
  }
  .more {
    font-size: 16px;
    font-weight: 400;
    color: #4a92ff;
    cursor: pointer;
  }
}
//客流单价分析
.price {
  margin-top: 24px;
  height: 531px;
  padding: 24px;
  background: #ffffff;
  border-radius: 10px;
  .titleDiv {
    margin: 0;
  }
}
</style>
