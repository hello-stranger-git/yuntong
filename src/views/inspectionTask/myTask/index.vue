<!--我的任务-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="searchBox">
      <div class="search">
        <!-- <el-input v-model="storeName" placeholder="请输入门店名称" clearable /> -->
        <!-- 区域选择 -->
        <span @click="drawer">
          <el-input
            v-model="storeName"
            placeholder="请选择机构"
            readonly="readonly"
          />
        </span>
        <!-- 侧边弹出层 -->
        <MultipleChoice ref="singleChoice" @change="obtain" />

        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
        <el-select v-model="model" placeholder="巡查模板" clearable>
          <el-option
            v-for="item in template"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-input v-model="task" placeholder="请输入任务名称" clearable />
      </div>
      <div class="search">
        <el-select v-model="waitDeal" placeholder="任务状态" clearable>
          <el-option
            v-for="item in stateData"
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
        <el-button type="info" class="resetBtn" @click="reset">重置</el-button>
      </div>
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
          <el-table-column prop="task" label="任务名称" width="300" />
          <el-table-column prop="checkModel" label="巡查模板" width="200" />
          <el-table-column prop="checkMan" label="考评人" width="150" />
          <el-table-column prop="checkDate" label="考评时间" />
          <el-table-column prop="actionTime" label="执行时效" />
          <el-table-column prop="taskStatu" label="任务状态" />
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
import MultipleChoice from '@/components/popupTree/multipleChoice.vue' // 多选弹出层

export default {
  components: {
    MultipleChoice
  },
  data() {
    return {
      storeName: '', // 店名
      task: '',
      model: '',
      date: '',
      waitDeal: '',
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 分页数据start
      // 表格数据
      tableData: [
        // {
        //   storeName: '百信广场苹果专卖店',
        //   task:'',
        // }
      ],

      template: [
        {
          value: '巡查模板',
          label: '巡查模板'
        },
        {
          value: '店面巡查模板',
          label: '店面巡查模板'
        },
        {
          value: '超级旗舰店模板',
          label: '超级旗舰店模板'
        },
        {
          value: '设备运行状态模板',
          label: '设备运行状态模板'
        }
      ],
      stateData: [
        {
          value: '待处理',
          label: '待处理'
        },
        {
          value: '已完成',
          label: '已完成'
        },
        {
          value: '失效',
          label: '失效'
        }
      ]
    }
  },
  mounted() {
    // for (let i = 0; i < 9; i++) {
    //   this.tableData.push(this.tableData[0])
    // }
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
      this.date = ''
      this.model = ''
      this.task = ''
      this.waitDeal = ''
    }
  }
}
</script>

<style lang="less" scoped>
//搜索板块
.searchBox {
  border-radius: 10px;
  overflow: hidden;
}
.search {
  box-sizing: border-box;
  padding: 20px 0px;
  height: 80px;
  background: #ffffff;
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
    /deep/.el-table-column--selection {
      padding-left: 5px;
    }
  }
}
.el-range-editor.el-input__inner {
  margin-left: 24px;
}
</style>
