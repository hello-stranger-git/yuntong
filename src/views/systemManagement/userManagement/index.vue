<!--用户管理-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input
        v-model="uname"
        class="deviceNmu"
        placeholder="请输入姓名"
        clearable
      />
      <el-input
        v-model="accountNumber"
        class="accountNumber"
        placeholder="请输账号"
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
      <!--按钮组-->
      <div class="userButton">
        <el-button :class="tacitlyApprove ? 'default' : ''">
          平台用户
        </el-button>
        <el-button @click="cancel">
          乐店客用户
        </el-button>
      </div>
      <!--表格-->
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="accountNumber" label="账号" width="152" />
          <el-table-column prop="uname" label="姓名" width="152" />
          <el-table-column prop="position" label="职位" width="152" />
          <el-table-column prop="storeNumber" label="授权门店数" width="200" />
          <el-table-column label="操作">
            <template slot-scope="scoped">
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
                @click="powerDoor(scoped.row)"
              >
                授权门店
              </el-button>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
                @click="openPowerDialog(scoped.row)"
              >
                权限
              </el-button>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
              >
                禁用
              </el-button>
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
    <div class="powerDialog">
      <!--权限Dialog-->
      <el-dialog title="权限" :visible.sync="powerDialogVisible">
        <el-form :model="powerData">
          <el-form-item label="职位" label-width="100px">
            <el-checkbox-group v-model="powerData.position">
              <el-checkbox label="店长 " name="type" />
              <el-checkbox label="全部权限 " name="type" />
              <el-checkbox label="管理员 " name="type" />
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            :style="
              `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
            "
            @click="subPower"
          >
            提交
          </el-button>
          <el-button @click="powerDialogVisible = false">关闭</el-button>
        </div>
      </el-dialog>
    </div>

    <!--授权门店dialog-->
    <div class="powerDialog">
      <el-dialog title="授权门店" :visible.sync="powerDoorDialogVisible">
        <el-form :model="powerDoorForm">
          <el-form-item label="账号" label-width="100px">
            <el-input v-model="powerDoorForm.accountNumber" disabled />
          </el-form-item>
          <el-form-item label="用户姓名" label-width="100px">
            <el-input v-model="powerDoorForm.uname" disabled />
          </el-form-item>
          <el-form-item label="联系方式" label-width="100px">
            <el-input v-model="powerDoorForm.tel" disabled />
          </el-form-item>
          <el-form-item label="授权门店" label-width="100px">
            <span @click="drawer">
              <el-input v-model="powerSotre" readonly="readonly" />
            </span>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            :style="
              `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
            "
            @click="powerDoorDialogVisible = false"
          >
            提交
          </el-button>
          <el-button @click="powerDoorDialogVisible = false">关闭</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- 侧边弹出层 -->
    <MultipleChoice ref="singleChoice" @change="obtain" :keyid="keyid" />
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
      uname: '', // 请输入姓名
      accountNumber: '', // 请输入账号
      tacitlyApprove: true, // 表格区上不选项默认选中样式
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      keyid: [],
      // 表格数据
      tableData: [
        {
          id: 1,
          accountNumber: 'chengxu1',
          uname: '华为-程旭',
          position: ['店长 '],
          storeNumber: '4',
          tel: 13131333333,
          stores: [
            {
              id: '3-1-1',
              label: '广州'
            },
            {
              id: '3-1-2',
              label: '东莞'
            }
          ]
        },
        {
          id: 2,
          accountNumber: 'chengxu1',
          uname: '华为-程旭',
          position: ['全部权限 ', '店长 '],
          storeNumber: '4',
          tel: 13131333333,
          stores: [
            {
              id: '3-1-1',
              label: '广州'
            },
            {
              id: '3-1-2',
              label: '东莞'
            }
          ]
        },
        {
          id: 3,
          accountNumber: 'chengxu1',
          uname: '华为-程旭',
          position: ['管理员 '],
          storeNumber: '4',
          tel: 13131333333,
          stores: [
            {
              id: '3-1-1',
              label: '广州'
            },
            {
              id: '3-1-2',
              label: '东莞'
            }
          ]
        },
        {
          id: 4,
          accountNumber: 'chengxu1',
          uname: '华为-程旭',
          position: ['管理员 '],
          storeNumber: '2',
          tel: 13131333333,
          stores: [
            {
              id: '3-1-1',
              label: '广州'
            },
            {
              id: '3-1-2',
              label: '东莞'
            }
          ]
        },
        {
          accountNumber: 'chengxu1',
          uname: '华为-程旭',
          position: ['管理员 '],
          storeNumber: '2',
          tel: 13131333333,
          stores: [
            {
              id: '3-1-1',
              label: '广州'
            },
            {
              id: '3-1-2',
              label: '东莞'
            }
          ]
        }
      ],

      powerDialogVisible: false,
      powerData: {
        id: 0,
        position: []
      },
      powerDoorDialogVisible: false, // 授权门店dialog
      powerDoorForm: {
        // 授权门店dialog数据
        id: 0,
        accountNumber: '',
        uname: '',
        tel: '',
        position: [],
        stores: [],
        storesId: []
      },
      powerSotre: '' // 弹出框店铺管理输入框内容
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
    // 取消按钮默认选中样式
    cancel() {
      this.tacitlyApprove = false
    },
    // 打开权限管理dialog
    openPowerDialog(row) {
      this.tableData.map(item => {
        if (item.id === row.id) {
          this.powerData.position = row.position
          this.powerData.id = row.id
        }
      })
      this.powerDialogVisible = true
    },
    // 授权门店
    powerDoor(row) {
      this.powerDoorDialogVisible = true
      this.powerDoorForm = row
      const labelObj = []
      const idObj = []
      for (var item of this.powerDoorForm.stores) {
        labelObj.push(item.label)
        idObj.push(item.id)
      }
      this.powerSotre = labelObj.join('；')
      this.powerDoorForm.storesId = idObj
      console.log(this.powerSotre)
      console.log(idObj)
    },
    subPower() {
      this.tableData.map(item => {
        if (item.id === this.powerData.id) {
          console.log(item.position.length)
          item.position = this.powerData.position
        }
      })
      this.powerDialogVisible = false
    },

    // 触发调用子组件方法
    drawer() {
      this.keyid = this.powerDoorForm.storesId
      this.$refs.singleChoice.show()
    },
    // 获取子组件选择数据
    obtain(i) {
      console.log(i)
      this.powerDoorForm.stores = i
      const labelObj = []
      const idObj = []
      console.log(11111)
      for (var item of this.powerDoorForm.stores) {
        labelObj.push(item.label)
        idObj.push(item.id)
      }
      this.powerSotre = labelObj.join('；')
      this.powerDoorForm.storesId = idObj
      console.log(this.powerSotre)
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
  .accountNumber {
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
      &:focus,
      .default {
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
    // 默认选中颜色
    .default {
      background-color: #409eff;
      color: #fff;
    }
  }
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

//权限dialog
.powerDialog {
  /deep/.el-dialog {
    width: 546px;
    background: #ffffff;
    border-radius: 10px;
    .el-dialog__header {
      font-size: 18px;
      font-weight: bold;
      color: #141414;
      padding: 24px 0 0 24px;
    }
    .el-dialog__body {
      padding: 36px 0 0 30px;
      .el-form-item__label {
        font-size: 14px;
        font-weight: bold;
        color: #141414;
        padding-right: 24px;
      }
      .el-checkbox {
        margin-right: 12px;
      }
    }
    .el-dialog__footer {
      padding-top: 0;
      padding-bottom: 24px;
      .dialog-footer {
        text-align: center;
      }
    }
  }
}

//授权门店dialog
.powerDialog {
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
    }
  }
  .multipleChoice {
    z-index: 9999 !important;
  }
}
</style>
