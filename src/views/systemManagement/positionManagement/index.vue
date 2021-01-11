<!--职位管理-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input v-model="searchValue" placeholder="请输入内容" clearable />
      <el-button
        type="primary"
        class="searchBtn"
        :style="
          `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
        "
      >
        查询
      </el-button>
      <el-button type="info" class="resetBtn">重置</el-button>
    </div>

    <!--内容模块-->
    <div class="context">
      <div class="addDiv">
        <el-button
          type="primary"
          :style="
            `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
          "
        >
          新增
        </el-button>
      </div>
      <div style="margin-top:24px">
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="date" label="职位名称" width="300" />
          <el-table-column label="操作" class="czBtnGroup">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
                @click="openPositionDialog(scope.row)"
              >
                查看
              </el-button>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
                @click="handleEdit(scope.$index, scope.row)"
              >
                编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!--分页组件-->
      <div style="text-align:center;margin-top:69px;padding-bottom:36px">
        <el-pagination
          background
          layout="total,prev, pager, next"
          :total="total"
          :page-size="pageSize"
          :current-page="purrentPage"
        />
      </div>
    </div>

    <!--系统设置->职位管理->查看dialog-->
    <div class="positionDialog">
      <el-dialog title="查看" :visible.sync="positionDialogFormVisible">
        <el-form :model="positionForm">
          <el-form-item label="职位名称" label-width="100px">
            <el-input v-model="positionForm.name" :disabled="true" />
          </el-form-item>

          <el-form-item label="权限" prop="power" style="display:flex">
            <el-tree
              :data="positionForm.power"
              show-checkbox
              node-key="id"
              :props="defaultProps"
            />
          </el-form-item>

          <el-form-item label="职位描述" label-width="100px">
            <el-input v-model="positionForm.describe" :disabled="true" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="positionDialogFormVisible = false">关闭</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',

      // vip分页数据start
      total: 4, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      purrentPage: 1, // 当前在哪一页
      // vip分页数据end
      tableData: [
        {
          date: '超级管理员'
        },
        {
          date: '二级管理员'
        },
        {
          date: '二级管理员'
        },
        {
          date: '二级管理员'
        }
      ],
      // 职位管理查看
      positionForm: {
        name: '',
        power: [
          {
            id: 1,
            label: '门店分布',
            disabled: true,
            children: [
              {
                id: 1 - 1,
                label: '管理员',
                disabled: true
              }
            ]
          },
          {
            id: 2,
            label: '数据分析',
            disabled: true,
            children: [
              {
                id: 2 - 1,
                label: '管理员',
                disabled: true
              }
            ]
          },
          {
            id: 3,
            label: '实时视频',
            disabled: true,
            children: [
              {
                id: 3 - 1,
                label: '管理员',
                disabled: true
              }
            ]
          },
          {
            id: 4,
            label: '视频巡查',
            disabled: true,
            children: [
              {
                id: 4 - 1,
                label: '管理员',
                disabled: true
              }
            ]
          },
          {
            id: 5,
            label: '巡查任务',
            disabled: true,
            children: [
              {
                id: 5 - 1,
                label: '管理员',
                disabled: true
              }
            ]
          },
          {
            id: 6,
            label: '门店管理',
            disabled: true,
            children: [
              {
                id: 6 - 1,
                label: '管理员',
                disabled: true
              }
            ]
          }
        ],
        describe: ''
      },
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      // 职位管理dialog
      positionDialogFormVisible: true
    }
  },
  methods: {
    // 修改表格隔行颜色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else if (rowIndex % 2 !== 0) {
        return 'success-row'
      }
      return ''
    },
    // 打开职位管理查看
    openPositionDialog(row) {
      this.positionDialogFormVisible = true
      this.positionForm.name = row.date
      console.log(row)
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
  .select {
    margin-left: 24px;
  }
  .searchBtn {
    margin-left: 48px;
  }
  .resetBtn {
    margin-left: 24px;
  }
}
.el-button {
  width: 90px;
}

//内容模块
.context {
  width: 1674px;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 24px;
  padding-top: 24px;
  padding-left: 12px;
  .addDiv {
    margin-left: 12px;
  }
  /deep/.el-button--mini,
  /deep/.el-button--small {
    width: 49px;
    height: 28px;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
  }
  /deep/.el-table {
    th {
      & > .cell {
        font-weight: bold;
        color: #141414;
        font-size: 14px;
      }
    }
    .warning-row {
      background: #ebebeb;
    }
    .success-row {
      background: #ffffff;
    }
  }
}

//职位管理查询dialog
.positionDialog {
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
      padding-left: 48px;
      .el-form-item__label {
        width: 100px;
        font-size: 14px;
        font-weight: bold;
        color: #141414;
        padding-right: 19px;
      }
      .el-input__inner {
        width: 600px;
      }
    }
    .dialog-footer {
      text-align: center;
      .el-button {
      }
    }
  }
}
</style>
