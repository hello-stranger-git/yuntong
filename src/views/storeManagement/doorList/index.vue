<!--门店列表-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
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

      <!-- <el-cascader
        v-model="city"
        :options="options"
        filterable
        :props="{ expandTrigger: 'hover' }"
        placeholder="请选择省市"
      /> -->
      <el-input
        v-model="storeTel"
        class="deviceName"
        placeholder="门店电话"
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
      <el-button type="info" class="resetBtn" @click="reset">重置</el-button>
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
          <el-table-column prop="number" label="门店编号" width="100" />
          <el-table-column prop="storeName" label="门店名称" width="200" />
          <el-table-column prop="location" label="详细地址" width="" />
          <el-table-column prop="path" label="组织路径" width="250" />
          <el-table-column prop="founder" label="创建人" width="100" />
          <el-table-column prop="tel" label="门店电话" width="200" />
          <el-table-column prop="startTime" label="创建时间" width="200" />
          <el-table-column label="操作">
            <template slot-scope="scoped">
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
                @click="jumpDoorDetail(scoped.row)"
              >
                查看
              </el-button>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
                @click="checkId(scoped.row.number)"
              >
                丽的华为ID
              </el-button>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
              >
                实时考勤
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

    <!--丽的华为ID-->
    <div class="id">
      <el-dialog title="丽的华为ID" :visible.sync="idFormShow">
        <el-form :model="idForm">
          <el-form-item label="丽的华为ID" label-width="100px">
            <el-input v-model="idForm.id" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            :style="
              `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
            "
            @click="idFormShow = false"
          >
            提交
          </el-button>
          <el-button @click="idFormShow = false">取 消</el-button>
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
      city: '', // 城市
      storeName: '', // 店名
      storeTel: '', // 门店电话
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 分页数据start
      // 表格数据
      tableData: [
        {
          number: 1381,
          storeName: '百信广场苹果专卖店',
          location: '中国广东省广州市白云区机场路1455号',
          path: '丽的华为>广东省>广州',
          founder: '刘德华',
          tel: '18888888888',
          startTime: new Date().toLocaleString()
        }
      ],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                },
                {
                  value: 'xiaolv',
                  label: '效率'
                },
                {
                  value: 'kekong',
                  label: '可控'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                },
                {
                  value: 'typography',
                  label: 'Typography 字体'
                },
                {
                  value: 'icon',
                  label: 'Icon 图标'
                },
                {
                  value: 'button',
                  label: 'Button 按钮'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                },
                {
                  value: 'input',
                  label: 'Input 输入框'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                },
                {
                  value: 'select',
                  label: 'Select 选择器'
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                },
                {
                  value: 'switch',
                  label: 'Switch 开关'
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                },
                {
                  value: 'upload',
                  label: 'Upload 上传'
                },
                {
                  value: 'rate',
                  label: 'Rate 评分'
                },
                {
                  value: 'form',
                  label: 'Form 表单'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格'
                },
                {
                  value: 'tag',
                  label: 'Tag 标签'
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条'
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件'
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页'
                },
                {
                  value: 'badge',
                  label: 'Badge 标记'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告'
                },
                {
                  value: 'loading',
                  label: 'Loading 加载'
                },
                {
                  value: 'message',
                  label: 'Message 消息提示'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                },
                {
                  value: 'notification',
                  label: 'Notification 通知'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框'
                },
                {
                  value: 'card',
                  label: 'Card 卡片'
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }
              ]
            }
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'jiaohu',
              label: '组件交互文档'
            }
          ]
        }
      ],

      // 查看丽的Id dialog
      idForm: {
        id: ''
      },
      idFormShow: false
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
    // 点击查看按钮
    jumpDoorDetail(data) {
      this.$router.push({
        path: '/storeManagement/doorList/doorDetail',
        query: { data: data }
      })
    },
    // 查看丽的Id
    checkId(id) {
      this.idForm.id = id
      this.idFormShow = true
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
      this.storeTel = ''
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

//丽的华为Id dialog
.id {
  /deep/.el-dialog {
    width: 546px;
    border-radius: 10px;
    height: 205px;
    .el-dialog__header {
      padding: 24px 24px 0 24px;
    }
    .el-dialog__body {
      padding-top: 36px;
      padding-bottom: 24px;
    }
    .el-form-item {
      margin-bottom: 0;
    }
    .el-dialog__title {
      font-size: 18px;
      font-weight: bold;
      color: #141414;
    }
    .dialog-footer {
      text-align: center;
    }
    .el-dialog__footer {
      padding-top: 0;
    }
    .el-form-item__label {
      font-size: 14px;
      font-weight: bold;
      color: #141414;
    }
  }
}
</style>
