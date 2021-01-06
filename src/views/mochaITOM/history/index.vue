<!--视频观看历史-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input
        v-model="person"
        class="deviceNmu"
        placeholder="请输入观看人"
        clearable
      />
      <el-input
        v-model="number"
        class="deviceName"
        placeholder="请输入设备号"
        clearable
      />
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
          <el-table-column prop="from" label="来源" width="100" />
          <el-table-column prop="person" label="观看人" width="148" />
          <el-table-column prop="number" label="设备号" width="250px" />
          <el-table-column prop="deviceType" label="通道号" width="130" />
          <el-table-column prop="startTime" label="开始时间" />
          <el-table-column prop="endTime" label="结束时间" />
          <el-table-column prop="continut" label="持续时间" />
          <el-table-column prop="doorName" label="通道名称" />
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
      person: '', // 请输入设备序列号
      number: '', // 请输入门店名称
      time: '', // 请输入门店编号
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 分页数据start
      // 表格数据
      tableData: [
        {
          from: 'WEB端',
          person: '华为-程旭',
          number: '4K01C42PAZA9344',
          deviceType: 0,
          startTime: new Date().toLocaleString(),
          endTime: new Date().toLocaleString(),
          continut: '4分钟30秒',
          doorName: '客流鱼眼'
        },
        {
          from: 'WEB端',
          person: '华为-程旭',
          number: '4K01C42PAZA9344',
          deviceType: 0,
          startTime: new Date().toLocaleString(),
          endTime: new Date().toLocaleString(),
          continut: '4分钟30秒',
          doorName: '客流鱼眼'
        },
        {
          from: 'WEB端',
          person: '华为-程旭',
          number: '4K01C42PAZA9344',
          deviceType: 0,
          startTime: new Date().toLocaleString(),
          endTime: new Date().toLocaleString(),
          continut: '4分钟30秒',
          doorName: '客流鱼眼'
        },
        {
          from: 'WEB端',
          person: '华为-程旭',
          number: '4K01C42PAZA9344',
          deviceType: 0,
          startTime: new Date().toLocaleString(),
          endTime: new Date().toLocaleString(),
          continut: '4分钟30秒',
          doorName: '客流鱼眼'
        },
        {
          from: 'WEB端',
          person: '华为-程旭',
          number: '4K01C42PAZA9344',
          deviceType: 0,
          startTime: new Date().toLocaleString(),
          endTime: new Date().toLocaleString(),
          continut: '4分钟30秒',
          doorName: '客流鱼眼'
        },
        {
          from: 'WEB端',
          person: '华为-程旭',
          number: '4K01C42PAZA9344',
          deviceType: 0,
          startTime: new Date().toLocaleString(),
          endTime: new Date().toLocaleString(),
          continut: '4分钟30秒',
          doorName: '客流鱼眼'
        },
        {
          from: 'WEB端',
          person: '华为-程旭',
          number: '4K01C42PAZA9344',
          deviceType: 0,
          startTime: new Date().toLocaleString(),
          endTime: new Date().toLocaleString(),
          continut: '4分钟30秒',
          doorName: '客流鱼眼'
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
