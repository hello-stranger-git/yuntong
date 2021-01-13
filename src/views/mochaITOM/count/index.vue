<!--视频观看统计-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <!-- <el-input v-model="storeName" placeholder="请选择门店名称" clearable /> -->

      <!-- 门店选择 -->
      <span @click="drawer">
        <el-input
          v-model="storeName"
          placeholder="请选择门店名称"
          readonly="readonly"
        />
      </span>
      <!-- 侧边弹出层 -->
      <MultipleChoice ref="singleChoice" @change="obtain" />

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
      <el-button type="info" class="resetBtn" @click="reset">重置</el-button>
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
          @cell-click="openTime"
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

    <div class="videoDialog">
      <el-dialog title="视频查看记录" :visible.sync="videoDialogVisible">
        <el-table :data="videoTimeData">
          <el-table-column property="name" label="观看人" />
          <el-table-column property="deviceId" label="设备号" />
          <el-table-column property="awayNumber" label="通道号" />
          <el-table-column property="awayName" label="通道名称" />
          <el-table-column property="startTime" label="开始时间" />
          <el-table-column property="endTime" label="结束时间" />
          <el-table-column property="countTime" label="持续时间" />
        </el-table>
        <!--分页组件-->
        <div style="text-align:center;margin-top:55px">
          <el-pagination
            background
            layout="total,prev, pager, next"
            :total="total1"
            :page-size="pageSize1"
            :current-page="currentPage1"
          />
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import MultipleChoice from '@/components/popupTree/multipleChoice.vue' // 多选弹出层

export default {
  components: {
    MultipleChoice
  },
  data() {
    return {
      storeName: '', // 请输入设备序列号
      personNumber: '', // 观看人数
      time: '', // 请输入门店编号
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 分页数据end
      // 分页数据start
      total1: 8, // 总共多少条数据
      pageSize1: 10, // 每页显示条数
      currentPage1: 1, // 当前在哪一页
      // 分页数据end
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
      ],
      // 观看视频记录
      videoTimeData: [
        {
          id: 1,
          name: '齐梦燕',
          deviceId: '5G037E7PAZD0BF8',
          awayNumber: '5',
          awayName: '质询台',
          startTime: '2021-01-08 16:08:15',
          endTime: '2021-01-08 16:10:20',
          countTime: '2分钟5秒'
        },
        {
          id: 2,
          name: '齐梦燕',
          deviceId: '5G037E7PAZD0BF8',
          awayNumber: '5',
          awayName: '质询台',
          startTime: '2021-01-08 16:08:15',
          endTime: '2021-01-08 16:10:20',
          countTime: '2分钟5秒'
        },
        {
          id: 3,
          name: '齐梦燕',
          deviceId: '5G037E7PAZD0BF8',
          awayNumber: '5',
          awayName: '质询台',
          startTime: '2021-01-08 16:08:15',
          endTime: '2021-01-08 16:10:20',
          countTime: '2分钟5秒'
        },
        {
          id: 4,
          name: '齐梦燕',
          deviceId: '5G037E7PAZD0BF8',
          awayNumber: '5',
          awayName: '质询台',
          startTime: '2021-01-08 16:08:15',
          endTime: '2021-01-08 16:10:20',
          countTime: '2分钟5秒'
        },
        {
          id: 5,
          name: '齐梦燕',
          deviceId: '5G037E7PAZD0BF8',
          awayNumber: '5',
          awayName: '质询台',
          startTime: '2021-01-08 16:08:15',
          endTime: '2021-01-08 16:10:20',
          countTime: '2分钟5秒'
        },
        {
          id: 6,
          name: '齐梦燕',
          deviceId: '5G037E7PAZD0BF8',
          awayNumber: '5',
          awayName: '质询台',
          startTime: '2021-01-08 16:08:15',
          endTime: '2021-01-08 16:10:20',
          countTime: '2分钟5秒'
        },
        {
          id: 7,
          name: '齐梦燕',
          deviceId: '5G037E7PAZD0BF8',
          awayNumber: '5',
          awayName: '质询台',
          startTime: '2021-01-08 16:08:15',
          endTime: '2021-01-08 16:10:20',
          countTime: '2分钟5秒'
        },
        {
          id: 8,
          name: '齐梦燕',
          deviceId: '5G037E7PAZD0BF8',
          awayNumber: '5',
          awayName: '质询台',
          startTime: '2021-01-08 16:08:15',
          endTime: '2021-01-08 16:10:20',
          countTime: '2分钟5秒'
        }
      ],
      videoDialogVisible: false
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
    },
    // 查看时长
    openTime(row, column, event) {
      if (event.childNodes[0].innerText.indexOf('秒') !== -1) {
        this.videoDialogVisible = true
      }
    },
    // 触发调用子组件方法
    drawer() {
      this.$refs.singleChoice.show()
    },
    // 获取子组件选择数据
    obtain(i) {
      console.log(i)
      var obj = []
      for (var item of i) {
        obj.push(item.label)
      }
      this.storeName = obj.join('；')
    },
    // 触发重置输入框
    reset() {
      this.storeName = ''
      this.personNumber = ''
      this.time = ''
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

/deep/.el-table_1_column_4 {
  .cell {
    color: #409eff;
    cursor: pointer;
  }
  &.is-leaf {
    .cell {
      color: #909399;
    }
  }
}

//查看记录dialog
.videoDialog {
  /deep/.el-dialog {
    width: 1058px;
    background: #ffffff;
    border-radius: 10px;
    .el-dialog__header {
      padding: 24px 0 0 24px;
      font-size: 18px;
      font-weight: bold;
      color: #141414;
    }
    .has-gutter {
      font-size: 14px;
      font-weight: bold;
      color: #141414;
    }
    tbody {
      font-size: 14px;
      color: #141414;
      font-weight: 400;
    }
  }
}
</style>
