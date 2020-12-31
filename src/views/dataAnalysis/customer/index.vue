<!--顾客分析-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input v-model="searchValue" placeholder="请输入内容" clearable />
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
      >
        查询
      </el-button>
      <el-button type="info" class="resetBtn">重置</el-button>
    </div>
    <!--顾客年龄段和年龄趋势-->
    <div class="module">
      <!-- 顾客年龄段 -->
      <div class="left">
        <div class="titleDiv">
          <span class="title">
            顾客年龄段
          </span>
        </div>
        <div class="customerBar">
          <CustomerBarChart />
        </div>
      </div>
      <!-- 年龄趋势 -->
      <div class="right">
        <div class="titleDiv">
          <span class="title">
            年龄趋势
          </span>
        </div>
        <div class="ageTrends" style="display: flex;justify-content: center;">
          <AgeTrendsLineChart />
        </div>
      </div>
    </div>
    <!--客流性别和客流性别趋势-->
    <div class="module">
      <!-- 客流性别 -->
      <div class="left">
        <div class="titleDiv">
          <span class="title">
            客流性别
          </span>
        </div>
        <FlowSexPieChart />
      </div>
      <!-- 客流性别趋势 -->
      <div class="right">
        <div class="titleDiv">
          <span class="title">
            客流性别趋势
          </span>
        </div>
        <FlowSexTrendsRadarChart />
      </div>
    </div>

    <!-- 顾客平均滞留时长 -->
    <div class="retention">
      <div class="titleDiv">
        <span class="title">
          顾客平均滞留时长
        </span>
      </div>
      <div style="display: flex;justify-content: center;">
        <RetentionLineChart />
      </div>
    </div>
  </div>
</template>

<script>
import FlowSexPieChart from './components/flowSexPieChart' // 客流性别饼状图
import CustomerBarChart from './components/customerBarChart' // 顾客年龄段柱状图
import AgeTrendsLineChart from './components/ageTrendsLineChart' // 年龄趋势折线图
import FlowSexTrendsRadarChart from './components/flowSexTrendsRadarChart' // 客流性别趋势雷达图

import RetentionLineChart from './components/retentionLineChart' // 客流平均滞留折线图
export default {
  components: {
    FlowSexPieChart,
    CustomerBarChart,
    AgeTrendsLineChart,
    FlowSexTrendsRadarChart,
    RetentionLineChart
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

//所有左右模板
.module {
  height: 405px;
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
//顾客平均滞留时长
.retention {
  margin-top: 24px;
  height: 495px;
  padding: 24px;
  background: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  .titleDiv {
    margin: 0;
  }
}
//头部title全部公用样式
.titleDiv {
  margin: 24px 24px 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

//顾客年龄段柱状图
.customerBar {
  height: 100%;
}
</style>
