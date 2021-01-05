<!--巡查模板配置-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input
        v-model="TemplateName"
        class="TemplateName"
        placeholder="模板名称"
        clearable
      />
      <el-input
        v-model="describe"
        class="describe"
        placeholder="描述"
        clearable
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
      <!--按钮-->
      <div class="newlyAdded">
        <el-button
          type="primary"
          :style="
            `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
          "
        >
          新增
        </el-button>
      </div>
      <!--表格-->
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="TemplateName" label="模板名称" width="200" />
          <el-table-column prop="totalScore" label="总分数" width="148" />
          <el-table-column prop="describe" label="描述" width="400" />
          <el-table-column prop="creationTime" label="	创建时间" width="300" />

          <el-table-column label="操作">
            <template>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
              >
                编辑
              </el-button>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
              >
                删除
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
      TemplateName: '', // 输入模板名称
      describe: '', // 描述
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 表格数据
      tableData: [
        {
          TemplateName: '店面巡查模板',
          totalScore: '100',
          describe: '适用于所有门店范围',
          creationTime: '2019-12-22 14:47:40'
        },
        {
          TemplateName: '店面巡查模板',
          totalScore: '100',
          describe: '适用于所有门店范围',
          creationTime: '2019-12-22 14:47:40'
        },
        {
          TemplateName: '店面巡查模板',
          totalScore: '100',
          describe: '适用于所有门店范围',
          creationTime: '2019-12-22 14:47:40'
        },
        {
          TemplateName: '店面巡查模板',
          totalScore: '100',
          describe: '适用于所有门店范围',
          creationTime: '2019-12-22 14:47:40'
        },
        {
          TemplateName: '店面巡查模板',
          totalScore: '100',
          describe: '适用于所有门店范围',
          creationTime: '2019-12-22 14:47:40'
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
  .describe {
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
  // 上方按钮样式
  .newlyAdded {
    .el-button {
      padding: 5px 10px;
    }
  }
  // 表格样式
  .table {
    /deep/.el-table {
      .warning-row {
        background: #ebebeb;
      }
    }
    .primary {
      margin-left: 24px;
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
