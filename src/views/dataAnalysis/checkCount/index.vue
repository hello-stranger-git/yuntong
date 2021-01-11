<!--考勤统计-->
<template>
  <div :style="{ margin: '24px' }">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <!-- tab1 -->
      <el-tab-pane label="今日考勤" name="first">
        <!-- 搜索 -->
        <div class="search">
          <!-- 区域选择 -->
          <span @click="drawer('today')">
            <el-input
              v-model="todayMechanism"
              placeholder="请选择机构"
              readonly="readonly"
            />
          </span>
          <!-- 侧边弹出层 -->
          <SingleChoice ref="todaySingleChoice" @change="todayObtain" />
          <el-select
            v-model="todayName"
            :disabled="todayMechanism ? false : true"
            placeholder="请选择名字"
          >
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>

          <el-button
            type="primary"
            :style="
              `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
            "
            class="searchBtn"
          >
            查询
          </el-button>
          <el-button type="success" class="resetBtn" @click="reset('today')">
            重置
          </el-button>
          <el-button type="info" class="resetBtn">导出</el-button>
        </div>
        <!--表格-->
        <div class="module">
          <div class="total">
            总人数：0
            <span>迟到：0</span>
            <span>早退：0</span>
            <span>正常：0</span>
            <span>范围外：0</span>
          </div>
          <div class="table">
            <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName"
            >
              <el-table-column prop="index" label="员工编号" />
              <el-table-column prop="name" label="姓名" />
              <el-table-column prop="avatar" label="头像" />
              <el-table-column prop="storeName" label="门店名称" />
              <el-table-column prop="record" label="考勤记录" />
            </el-table>
          </div>
          <!--分页组件-->
          <div style="text-align:center;margin-top:55px">
            <el-pagination
              background
              layout="total,prev, pager, next"
              :total="total"
              :page-size="pageSize"
              :current-page="currentPage"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-tab-pane>
      <!-- tab2 -->
      <el-tab-pane label="历史考勤" name="second">
        <!-- 搜索 -->
        <div class="search">
          <!-- 区域选择 -->
          <span @click="drawer('history')">
            <el-input
              v-model="historyMechanism"
              placeholder="请选择机构"
              readonly="readonly"
            />
          </span>
          <!-- 侧边弹出层 -->
          <SingleChoice ref="historySingleChoice" @change="historyObtain" />
          <el-select
            v-model="historyName"
            :disabled="historyMechanism ? false : true"
            placeholder="请选择姓名"
          >
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-date-picker
            v-model="historyDate"
            type="daterange"
            :disabled="historyMechanism ? false : true"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :style="{ marginLeft: '24px' }"
          />
          <el-button
            type="primary"
            :style="
              `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
            "
            class="searchBtn"
          >
            查询
          </el-button>
          <el-button type="success" class="resetBtn" @click="reset('history')">
            重置
          </el-button>
          <el-button type="info" class="resetBtn">导出</el-button>
        </div>
        <!--表格-->
        <div class="module">
          <div class="total">
            总人数：0
            <span>迟到：0</span>
            <span>早退：0</span>
            <span>正常：0</span>
            <span>范围外：0</span>
          </div>
          <div class="table">
            <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName"
            >
              <el-table-column prop="index" label="员工编号" />
              <el-table-column prop="name" label="姓名" />
              <el-table-column prop="avatar" label="头像" />
              <el-table-column prop="storeName" label="门店名称" />
              <el-table-column prop="record" label="考勤记录" />
              <el-table-column prop="date" label="考勤日期" />
              <el-table-column prop="totalTime" label="总出勤时间" />
              <el-table-column prop="statu" label="出勤状态" />
            </el-table>
          </div>
          <!--分页组件-->
          <div style="text-align:center;margin-top:55px">
            <el-pagination
              background
              layout="total,prev, pager, next"
              :total="total"
              :page-size="pageSize"
              :current-page="currentPage"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-tab-pane>
      <!-- tab3 -->
      <el-tab-pane label="出勤统计" name="third">
        <!-- 搜索 -->
        <div class="search">
          <!-- <el-select v-model="StatisticsMechanism" placeholder="请选择店铺">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select> -->

          <!-- 区域选择 -->
          <span @click="drawer('statistics')">
            <el-input
              v-model="statisticsMechanism"
              placeholder="请选择机构"
              readonly="readonly"
            />
          </span>

          <!-- 侧边弹出层 -->
          <SingleChoice
            ref="statisticsSingleChoice"
            @change="statisticsObtain"
          />
          <el-date-picker
            v-model="statisticsDate"
            type="daterange"
            range-separator="至"
            :disabled="statisticsMechanism ? false : true"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :style="{ marginLeft: '24px' }"
          />
          <el-button
            type="primary"
            :style="
              `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
            "
            class="searchBtn"
          >
            查询
          </el-button>
          <el-button
            type="success"
            class="resetBtn"
            @click="reset('statistics')"
          >
            重置
          </el-button>
          <el-button type="info" class="resetBtn">导出</el-button>
        </div>
        <!--表格-->
        <div class="module">
          <div class="table">
            <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName"
            >
              <el-table-column prop="index" label="考勤日期" />
              <el-table-column prop="storeName" label="门店名称" />
              <el-table-column prop="name" label="总人数" />
              <el-table-column prop="avatar" label="正常" />
              <el-table-column prop="storeName" label="迟到" />
              <el-table-column prop="record" label="早退" />
              <el-table-column prop="date" label="缺卡" />
              <el-table-column prop="totalTime" label="范围外" />
              <el-table-column prop="statu" label="旷工" />
              <el-table-column prop="statu" label="操作" />
            </el-table>
          </div>
          <!--分页组件-->
          <div style="text-align:center;margin-top:55px">
            <el-pagination
              background
              layout="total,prev, pager, next"
              :total="total"
              :page-size="pageSize"
              :current-page="currentPage"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SingleChoice from '@/components/popupTree/singleChoice.vue' // 单选弹出层

export default {
  components: {
    SingleChoice
  },
  data() {
    return {
      // 今日tab
      activeName: 'first',
      todayMechanism: '',
      todayName: '',
      value1: '',
      total: 0, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 0, // 当前在哪一页
      tableData: [],
      options1: [
        {
          value: '大明',
          label: '大明'
        },
        {
          value: '小明',
          label: '小明'
        }
      ],
      // 历史tab

      historyMechanism: '',
      historyName: '',
      historyDate: '',
      // 统计tab
      statisticsMechanism: '',
      statisticsDate: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    },
    // 修改表格隔行颜色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else if (rowIndex % 2 !== 0) {
        return 'success-row'
      }
      return ''
    },
    // 触发重置输入框
    reset(tab) {
      if (tab === 'today') {
        this.todayMechanism = ''
        this.todayName = ''
      } else if (tab === 'history') {
        this.historyMechanism = ''
        this.historyName = ''
        this.historyDate = ''
      } else {
        this.statisticsMechanism = ''
        this.statisticsDate = ''
      }
    },

    // 触发调用子组件方法
    drawer(tab) {
      if (tab === 'today') {
        this.$refs.todaySingleChoice.show()
      } else if (tab === 'history') {
        this.$refs.historySingleChoice.show()
      } else {
        this.$refs.statisticsSingleChoice.show()
      }
    },

    // 今日
    // 获取子组件选择数据
    todayObtain(i) {
      this.todayMechanism = i
    },

    // 历史
    // 获取子组件选择数据
    historyObtain(i) {
      this.historyMechanism = i
    },

    // 统计
    // 获取子组件选择数据
    statisticsObtain(i) {
      this.statisticsMechanism = i
    }
  }
}
</script>

<style lang="less" scoped>
.el-tabs {
  // background-color: #fff;
  /deep/.el-tabs__item.is-active {
    color: #fff;
    background-color: #409eff;
  }
  /deep/.el-tabs__item:not(.is-disabled):hover {
    color: #fff;
    background-color: #409eff;
  }
}
.search {
  box-sizing: border-box;
  padding: 20px 0;
  height: 80px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  /deep/.el-input {
    width: 280px;
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
/deep/.el-popper__dropdown {
  margin-left: 24px;
}
//表格板块
.module {
  background-color: #ffffff;
  margin-top: 24px;
  padding: 24px;
  border-radius: 10px;
  .total {
    float: right;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    span {
      display: inline-block;
      padding: 0 5px;
      margin-left: 20px;
      background: lightcoral;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
  }
  .table {
    margin-top: 36px;
    /deep/.el-table {
      .warning-row {
        background: #ebebeb;
      }
    }
    /deep/.el-table {
      .success-row {
        background: #ffffff;
      }
    }
    /deep/.el-table {
      th {
        & > .cell {
          color: #141414;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
  .el-button {
    text-align: center;
  }
}

//tab样式，调整
/deep/.el-tabs--border-card {
  background: #e9eef3;
  border: 0;
  box-shadow: none;
  .el-tabs__nav-scroll {
    // padding-left: 24px;
    background-color: #e9eef3;
  }
}
/deep/.el-tabs--border-card > .el-tabs__content {
  padding: 24px 0 0 0;
}
/deep/.el-tabs__item {
  &.is-active,
  &:hover {
    border-radius: 4px;
  }
  margin-right: 8px;
}
</style>
