<!--待我处理-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input
        v-model="storeName"
        class="deviceNmu"
        placeholder="请输入门店名称"
        clearable
      />
      <el-date-picker v-model="value1" type="date" placeholder="选择日期" />
      <el-select v-model="value" placeholder="请选择状态">
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
          <el-table-column prop="storeName" label="门店名称" width="300" />
          <el-table-column prop="date" label="时间" width="300" />
          <el-table-column prop="checkType" label="巡查类型" width="200" />
          <el-table-column prop="status" label="任务状态" width="150" />
          <el-table-column prop="checkSuggest" label="点检意见" />
          <el-table-column label="操作" width="200">
            <template slot-scope="scoped">
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
                @click="jump(scoped.row)"
              >
                {{ scoped.row.status }}
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
      storeName: '', // 店名
      value1: '',
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 分页数据start
      // 表格数据
      tableData: [
        {
          storeName: '百信广场苹果专卖店',
          date: new Date().toLocaleString(),
          checkType: '在线考评转点检',
          status: '待整改',
          checkSuggest: '“视频3，6，7，8摄像头无法打开”点检不合格'
        },
        {
          storeName: '百信广场苹果专卖店',
          date: new Date().toLocaleString(),
          checkType: '在线考评转点检',
          status: '待审核',
          checkSuggest: '“视频3，6，7，8摄像头无法打开”点检不合格'
        }
      ],
      options1: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  mounted() {
    for (let i = 0; i < 9; i++) {
      this.tableData.push(this.tableData[0])
    }
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
    // 跳转到待整改或者待审核
    jump(data) {
      if (data.status === '待整改') {
        this.$router.push({
          path: '/inspectionTask/waitDeal/rectification',
          query: { data: data }
        })
      } else if (data.status === '待审核') {
        this.$router.push({
          path: '/inspectionTask/waitDeal/examine',
          query: { data: data }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
//搜索板块
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
  }
  .el-button {
    text-align: center;
  }
}
</style>
