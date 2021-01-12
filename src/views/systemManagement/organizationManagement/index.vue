<!--组织管理-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input
        v-model="name"
        class="deviceNmu"
        placeholder="请输入组织名称"
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
      <div class="addDiv">
        <el-button
          type="primary"
          :style="
            `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
          "
          @click="add()"
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
          row-key="id"
          border
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <el-table-column prop="organizeName" label="组织名称" />
          <el-table-column prop="shortName" label="组织简称" />
          <el-table-column prop="higherOrganize" label="上级组织" />
          <el-table-column prop="path" label="地址" />
          <el-table-column prop="tel" label="联系电话" />
          <el-table-column label="操作">
            <template slot-scope="props">
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
                @click="handle(props.row)"
              >
                查看
              </el-button>
              <el-button
                v-if="!props.row.children"
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
                @click="edit(props.row)"
              >
                编辑
              </el-button>
              <el-button
                v-if="!props.row.children"
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
                @click="add(props.row)"
              >
                新增
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
      <!--新增\编辑\查看dialog-->
      <el-dialog
        :title="dialogTitle"
        :visible.sync="dialogFormVisible"
        @open="resetForm"
      >
        <el-form ref="dialogForm" :model="form" :rules="rules">
          <el-form-item
            label="组织名称"
            label-width="100px"
            prop="organizeName"
          >
            <el-input v-model="form.organizeName" :disabled="dialogEdit" />
          </el-form-item>
          <el-form-item
            label="上级组织"
            label-width="100px"
            prop="higherOrganize"
          >
            <el-input v-model="form.higherOrganize" :disabled="dialogEdit" />
          </el-form-item>
          <el-form-item label="组织简称" label-width="100px">
            <el-input v-model="form.shortName" :disabled="dialogEdit" />
          </el-form-item>
          <el-form-item label="地址" label-width="100px">
            <el-input v-model="form.path" :disabled="dialogEdit" />
          </el-form-item>
          <el-form-item label="服务电话" label-width="100px" prop="tel">
            <el-input v-model="form.tel" :disabled="dialogEdit" />
          </el-form-item>
          <el-form-item label="启用/禁用" label-width="100px">
            <el-radio-group v-model="form.status">
              <el-radio label="0" :disabled="dialogEdit">启用</el-radio>
              <el-radio label="1" :disabled="dialogEdit">禁用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button
            v-if="dialogTitle !== '查看'"
            type="primary"
            :style="
              `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
            "
            @click="subDialogForm"
          >
            提交
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
      name: '', // 城市
      total: 1, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 分页数据start
      // 表格数据
      tableData: [
        {
          id: 1,
          organizeName: '广东省',
          shortName: '简称',
          path: '中国广东省广州市白云区机场路1455号',
          higherOrganize: '丽的华为',
          tel: '13660333868',
          status: '0',
          children: [
            {
              id: 11,
              organizeName: '广东省',
              shortName: '简称',
              path: '中国广东省广州市白云区机场路1455号',
              higherOrganize: '上级',
              tel: '13660333868',
              status: '0'
            },
            {
              id: 12,
              organizeName: '广东省',
              shortName: '简称',
              path: '中国广东省广州市白云区机场路1455号',
              higherOrganize: '上级',
              tel: '13660333868',
              status: '0'
            }
          ]
        }
      ],
      dialogTitle: '新增',
      dialogEdit: true, // 新增\编辑\查看dialog，是否可编辑
      dialogFormVisible: false, // 新增\编辑\查看dialog
      form: {
        higherOrganize: '',
        id: '',
        organizeName: '',
        path: '',
        shortName: '',
        tel: '',
        status: '0'
      },
      rules: {
        organizeName: [
          { required: true, message: '请输入组织名称', trigger: 'blur' }
        ],

        higherOrganize: [
          { required: true, message: '请输入上级组织', trigger: 'blur' }
        ],

        tel: [{ required: true, message: '请输入服务电话', trigger: 'blur' }]
      }
    }
  },
  mounted() {},
  methods: {
    handle(row) {
      this.dialogTitle = '查看'
      this.dialogFormVisible = true
      this.dialogEdit = true
      this.form = row
    },
    edit(row) {
      this.dialogTitle = '编辑'
      this.dialogFormVisible = true
      this.dialogEdit = false
      this.form = row
    },
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
    // 新增
    add(row) {
      this.dialogTitle = '新增'
      this.dialogFormVisible = true
      this.dialogEdit = false
      this.form = {
        higherOrganize: '',
        id: '',
        organizeName: '',
        path: '',
        shortName: '',
        tel: '',
        status: ''
      }
      if (row.higherOrganize) {
        this.form.higherOrganize = row.higherOrganize
      }
    },
    // dialog表单提交
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
  padding: 20px 0px;
  height: 80px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  .el-input {
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
.el-cascader {
  width: 280px;
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
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

//新增\编辑\查看dialog
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
