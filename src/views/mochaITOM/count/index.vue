<!--视频观看统计-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input v-model="storeName" placeholder="请选择门店名称" clearable />
      <el-input v-model="personNumber" placeholder="请输入观看人数" clearable />
      <el-date-picker
        v-model="time"
        type="daterange"
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
      <el-button type="info" class="resetBtn">重置</el-button>
    </div>
    <!--表格板块-->
    <div class="module">
      <!--按钮组-->
      <div>
        <el-button
          type="primary"
          :style="
            `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
          "
        >
          导出
        </el-button>
      </div>
      <!--表格-->
      <div class="table">
        <el-table
          border
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="storeName" label="门店名称" />
          <el-table-column prop="personNumber" label="观看人数" />
          <el-table-column prop="checkTimes" label="查看次数" />
          <el-table-column prop="checkLongTime" label="查看时长" />
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
      storeName: '', // 请输入设备序列号
      personNumber: '', // 观看人数
      time: '', // 请输入门店编号
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 分页数据start
      // 表格数据
      tableData: [
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
        },
        {
          storeName: '丽的百信广场西区华为店',
          personNumber: 5,
          checkTimes: 998,
          checkLongTime: '5478分钟41秒'
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
    margin-top: 24px;
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
