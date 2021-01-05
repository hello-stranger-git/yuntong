<!--区域排行-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input v-model="searchValue" placeholder="请输入内容" clearable />
      <el-date-picker
        v-model="dateTime"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="margin-left:24px"
      />

      <el-button type="primary" class="searchBtn">查询</el-button>
      <el-button type="info" class="resetBtn">重置</el-button>
    </div>
    <!--客流排行-->
    <div class="module" style="height:790px">
      <div class="flow">
        <div class="titleDiv">
          <span class="title">
            客流排行
            <span
              style="font-size: 18px;font-weight: 400;color: #141414;vertical-align: bottom;"
            >
              （2020-12-19至2020-12-25）
            </span>
          </span>
        </div>
        <FlowRankingBarChart />
      </div>
    </div>
    <!--区域排行和占比-->
    <div class="module">
      <!-- 区域排行 -->
      <div class="left">
        <div class="titleDiv">
          <span class="title">
            区域排行
            <span
              style="font-size: 18px;font-weight: 400;color: #141414;vertical-align: bottom;"
            >
              （2020-12-19至2020-12-25）
            </span>
          </span>
        </div>
        <RegionRankingBarChart />
      </div>
      <!-- 占比 -->
      <div class="right">
        <!--人次占比-->
        <div>
          <div class="titleDiv">
            <span class="title">
              人次占比
              <span
                style="font-size: 18px;font-weight: 400;color: #141414;vertical-align: bottom;"
              >
                （2020-12-19至2020-12-25）
              </span>
            </span>
          </div>
          <PersonalCircularChart />
        </div>
        <!--人数占比-->
        <div>
          <div class="titleDiv">
            <span class="title">
              人数占比
              <span
                style="font-size: 18px;font-weight: 400;color: #141414;vertical-align: bottom;"
              >
                （2020-12-19至2020-12-25）
              </span>
            </span>
          </div>
          <PeopleNumberCircularChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlowRankingBarChart from './components/flowRankingBarChart' // 客流排行柱状图
import RegionRankingBarChart from './components/regionRankingBarChart' // 区域排行柱状图

import PersonalCircularChart from './components/personalCircularChart' // 人次占比饼状图

import PeopleNumberCircularChart from './components/peopleNumberCircularChart' // 人数占比饼状图
export default {
  components: {
    FlowRankingBarChart,
    RegionRankingBarChart,
    PersonalCircularChart,
    PeopleNumberCircularChart
  },
  data() {
    return {
      searchValue: '', // 搜索输入
      dateTime: '' // 日期选择器
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

//客流排行、区域排行和占比
.module {
  height: 668px;
  margin-top: 24px;
  display: flex;
  .flow {
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
  }
  .left {
    width: 60%;
    background-color: #ffffff;
    margin-right: 26px;
    border-radius: 10px;
  }
  .right {
    width: 40%;
    background-color: #ffffff;
    border-radius: 10px;
    & > div {
      height: 50%;
      overflow: hidden;
    }
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
}
</style>
