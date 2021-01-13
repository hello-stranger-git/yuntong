<!--考评任务配置-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input
        v-model="taskName"
        class="taskName"
        placeholder="请输入任务名称"
        clearable
      />

      <!-- <el-select v-model="taskTime" placeholder="请选择时间">
        <el-option
          v-for="item in timeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select> -->

      <el-date-picker
        v-model="date"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        style="margin-left:24px"
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
          @click="addConfig"
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
          <el-table-column prop="taskName" label="任务名称" width="200" />
          <el-table-column prop="vld" label="任务有效期" width="148" />
          <el-table-column prop="frequency" label="任务频次" width="208" />
          <el-table-column prop="template " label="	巡查模板" width="100" />
          <el-table-column prop="assessor" label="考评人" width="200" />
          <el-table-column prop="creationTime" label="创建时间" width="200" />

          <el-table-column label="操作">
            <template slot-scope="scoped">
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
                @click="seeMessage(scoped.row)"
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

    <div class="dialog">
      <!--新增\查看dialog-->
      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogFormVisible"
        @open="resetForm"
      >
        <el-form ref="dialogForm" :rules="rules" :model="message">
          <el-form-item label="任务名称" label-width="100px" prop="taskName">
            <el-input v-model="message.taskName" :disabled="dialogDis" />
          </el-form-item>
          <el-form-item label="任务有效期" label-width="100px" prop="vld">
            <el-input v-model="message.vld" :disabled="dialogDis" />
          </el-form-item>

          <el-form-item label="任务频次" label-width="100px" prop="frequency">
            <el-radio-group v-model="message.frequency">
              <el-radio label="0" :disabled="dialogDis">日</el-radio>
              <el-radio label="1" :disabled="dialogDis">周</el-radio>
              <el-radio label="2" :disabled="dialogDis">月</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="考评人" label-width="100px" prop="assessor">
            <el-input v-model="message.assessor" :disabled="dialogDis" />
          </el-form-item>
          <el-form-item label="门店" label-width="100px" prop="store">
            <el-input v-model="message.store" :disabled="dialogDis" />
          </el-form-item>
          <el-form-item label="巡查模板" label-width="100px" prop="template">
            <el-input v-model="message.template" :disabled="dialogDis" />
          </el-form-item>
          <el-form-item label="执行时效" label-width="100px">
            <el-input v-model="message.implement" :disabled="dialogDis" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button
            v-if="dialogTitle !== '查看任务配置'"
            type="primary"
            :style="
              `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
            "
            @click="subDialogForm"
          >
            保存
          </el-button>
          <el-button @click="dialogFormVisible = false">关闭</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: '', // 请输入任务名称
      taskTime: '', // 请选择时间
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 时间选择数据
      // timeOptions: [
      //   {
      //     value: '今日',
      //     label: '今日'
      //   },
      //   {
      //     value: '昨日',
      //     label: '昨日'
      //   },
      //   {
      //     value: '最近7日',
      //     label: '最近7日'
      //   },
      //   {
      //     value: '最近30日',
      //     label: '最近30日'
      //   },
      //   {
      //     value: '本月',
      //     label: '本月'
      //   },
      //   {
      //     value: '上月',
      //     label: '上月'
      //   },
      //   {
      //     value: '自定义',
      //     label: '自定义'
      //   }
      // ],

      // 表格数据
      tableData: [
        {
          id: 1,
          taskName: '摄像1',
          vld: '一个月',
          frequency: '0',
          assessor: '文萍',
          store: '沙河',
          template: '店面巡查模板',
          implement: '1天',
          creationTime: ''
        }
      ],
      message: {
        id: 1,
        taskName: '',
        vld: '',
        frequency: '',
        assessor: '',
        store: '',
        template: '',
        implement: '',
        creationTime: ''
      },
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
      // 时间选择
      date: '',
      dialogFormVisible: false,
      dialogTitle: '新增任务配置',
      dialogDis: true,
      rules: {
        taskName: [
          { required: true, message: '请输入任务名称', trigger: 'blur' }
        ],

        vld: [{ required: true, message: '请输入任务有效期', trigger: 'blur' }],

        frequency: [
          { required: true, message: '请选择任务频次', trigger: 'blur' }
        ],

        assessor: [
          { required: true, message: '请输入考评人', trigger: 'blur' }
        ],

        store: [{ required: true, message: '请输入门店', trigger: 'blur' }],

        template: [
          { required: true, message: '请输入巡查模板', trigger: 'blur' }
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
    },
    // 查看
    seeMessage(row) {
      this.dialogTitle = '查看任务配置'
      this.dialogDis = true
      this.dialogFormVisible = true
      this.message = row
    },
    // 新增
    addConfig() {
      this.dialogTitle = '新增任务配置'
      this.dialogDis = false
      this.dialogFormVisible = true
      this.message = {
        id: '',
        taskName: '',
        vld: '',
        frequency: '',
        assessor: '',
        store: '',
        template: '',
        implement: '',
        creationTime: ''
      }
    },
    // 提交
    subDialogForm() {
      this.$refs['dialogForm'].validate(valid => {
        if (valid) {
          this.dialogFormVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs['dialogForm'].resetFields()
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
  // 上方按钮样式
  .newlyAdded {
    .el-button {
      padding: 5px 10px;
    }
  }
  .table {
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

//新增任务配置dialog
.dialog {
  /deep/.el-dialog {
    width: 822px;
    background: #ffffff;
    border-radius: 10px;
    .el-dialog__header {
      font-size: 18px;
      font-weight: bold;
      color: #141414;
      padding: 24px 0 0 24px;
    }
    .el-dialog__body {
      padding-top: 40px;
      .el-form-item__label {
        font-size: 14px;
        font-weight: bold;
        color: #141414;
      }
    }
    .el-dialog__footer {
      .dialog-footer {
        text-align: center;
      }
    }
  }
}
</style>
