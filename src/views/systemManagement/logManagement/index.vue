<!--日志管理-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input
        v-model="accountNumber"
        class="deviceNmu"
        placeholder="请输入操作账号"
        clearable
      />
      <el-input
        v-model="operator"
        class="operator"
        placeholder="请输入操作人"
        clearable
      />
      <!-- 日期选择 -->
      <el-date-picker
        v-model="operationDate"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
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
      <el-button type="info" class="resetBtn">重置</el-button>
    </div>
    <!--表格板块-->
    <div class="module">
      <!--表格-->
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="accountNumber" label="账号" width="152" />
          <el-table-column prop="operationContent" label="类型" width="152" />
          <el-table-column prop="position" label="操作内容" />
          <el-table-column prop="IP" label="IP" width="152" />
          <el-table-column prop="date" label="操作日期" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountNumber: '', // 请输入操作账号
      operator: '', // 请输入操作人
      operationDate: '', // 选择日期
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 表格数据
      tableData: [
        {
          accountNumber: 'chengxu1',
          operationContent: '登录/登出',
          position: '提交在线考评，用户名:齐梦燕，门店：百信广场华为体验店',
          IP: '59.62.94.62',
          date: '2020-12-31 10:55:16'
        },
        {
          accountNumber: 'chengxu1',
          operationContent: '登录/登出',
          position: '提交在线考评，用户名:齐梦燕，门店：百信广场华为体验店',
          IP: '59.62.94.62',
          date: '2020-12-31 10:55:16'
        },
        {
          accountNumber: 'chengxu1',
          operationContent: '登录/登出',
          position: '提交在线考评，用户名:齐梦燕，门店：百信广场华为体验店',
          IP: '59.62.94.62',
          date: '2020-12-31 10:55:16'
        },
        {
          accountNumber: 'chengxu1',
          operationContent: '登录/登出',
          position: '提交在线考评，用户名:齐梦燕，门店：百信广场华为体验店',
          IP: '59.62.94.62',
          date: '2020-12-31 10:55:16'
        }
      ],
      // 日期选择数据
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.total = this.tableData.length
  },
  methods: {
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
  .operator,
  .operationDate,
  .el-date-editor {
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

//表格板块
.module {
  background-color: #ffffff;
  margin-top: 24px;
  padding: 24px;
  border-radius: 10px;
  .table {
    // margin-top: 24px;
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
    /deep/.el-table .cell {
      padding: 0;
      margin-left: 10px;
      color: #141414;
    }
    /deep/.el-button--mini,
    /deep/.el-button--mini.is-round {
      padding-left: 9px;
    }
    /deep/.el-table-column--selection {
      padding-left: 5px;
    }
  }
}
</style>
