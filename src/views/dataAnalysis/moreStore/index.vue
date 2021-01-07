<!--多店对比-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
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
    <!--店铺客流对比-->
    <div
      style="background: #FFFFFF;border-radius: 10px;margin-top:24px;padding:24px"
    >
      <div>
        <span style="font-size: 28px;font-weight: bold;color: #141414;">
          TOP10店铺排行
        </span>
        <p
          style="font-size: 20px;font-weight: bold;color: #141414;margin-top:54px"
        >
          店铺客流量对比
        </p>
      </div>
      <FlowBarChart style="margin-top:15px" />
    </div>
    <!--店铺店外客流对比-->
    <div
      style="background: #FFFFFF;border-radius: 10px;margin-top:24px;padding:24px"
    >
      <div>
        <p style="font-size: 20px;font-weight: bold;color: #141414">
          店铺店外客流量对比
        </p>
      </div>
      <InnerFlowBarChart style="margin-top:15px" />
    </div>
    <!--店铺店内客流对比-->
    <div
      style="background: #FFFFFF;border-radius: 10px;margin-top:24px;padding:24px"
    >
      <div>
        <p style="font-size: 20px;font-weight: bold;color: #141414">
          店铺客单价对比
        </p>
      </div>
      <FlowPriceBarChart style="margin-top:15px" />
    </div>
  </div>
</template>

<script>
import FlowBarChart from './components/flowBarChart'
import InnerFlowBarChart from './components/innerFlowBarChart'
import FlowPriceBarChart from './components/flowPriceBarChart'
export default {
  components: {
    FlowBarChart,
    InnerFlowBarChart,
    FlowPriceBarChart
  },
  data() {
    return {
      // 搜索模块数据start
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
    // margin-left: 24px;
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
</style>
