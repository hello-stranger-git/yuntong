<!--巡查记录-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input
        v-model="shopName"
        class="shopName"
        placeholder="请选输入门店名称"
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

      <el-select v-model="inspectionType" filterable placeholder="类型">
        <el-option
          v-for="item in options"
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
          <el-table-column prop="evaluationTime" label="考评时间" width="200" />
          <el-table-column prop="type" label="巡查类型" width="148" />
          <el-table-column prop="store" label="考评门店" width="208" />
          <el-table-column
            prop="rectificationPerson"
            label="	整改人"
            width="100"
          />
          <el-table-column prop="result" label="考评结果" width="200" />
          <el-table-column prop="state" label="整改状态" width="200" />
          <el-table-column prop="assessor" label="考评人" width="200" />
          <el-table-column label="详情">
            <template>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
              >
                查看
              </el-button>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
              >
                导出
              </el-button>
            </template>
          </el-table-column>
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
      shopName: '', // 请输入门店名称
      operationDate: '', // 请选择时间
      inspectionType: '', // 选择类型
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 类型数据
      options: [
        {
          value: '在线考评',
          label: '在线考评'
        },
        {
          value: '点检',
          label: '点检'
        },
        {
          value: '在线考评转点检',
          label: '在线考评转点检'
        }
      ],
      // 时间选择数据
      dateData: [
        {
          value: '今日',
          label: '今日'
        },
        {
          value: '昨日',
          label: '昨日'
        },
        {
          value: '最近7日',
          label: '最近7日'
        },
        {
          value: '最近30日',
          label: '最近30日'
        },
        {
          value: '上月',
          label: '上月'
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
      },
      // 表格数据
      tableData: [
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        },
        {
          evaluationTime: '2020-12-31 10:55:09',
          type: '在线考评',
          store: '从化区华为授权体验店',
          rectificationPerson: '兰宇贵',
          result: '2',
          state: '完成',
          assessor: '齐梦燕'
        }
      ]
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
  .inspectionData,
  .el-date-editor {
    margin-left: 24px;
  }
  .el-select {
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
  // 上方切换按钮样式
  .userButton {
    // border: 1px solid red;
    .el-button {
      &:first-child {
        border-radius: 5px 0 0 5px;
      }
      &:last-child {
        border-radius: 0 5px 5px 0;
      }
      &:focus {
        background-color: #409eff;
        color: #fff;
      }
      padding: 0;
      margin: 0;
      font-size: 14px;
      color: #141414;
      width: 80px;
      height: 36px;
      border: none;
      background-color: #ececec;
    }
  }
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
