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
          children: [
            {
              id: 11,
              organizeName: '广东省',
              shortName: '简称',
              path: '中国广东省广州市白云区机场路1455号',
              higherOrganize: '上级',
              tel: '13660333868'
            },
            {
              id: 12,
              organizeName: '广东省',
              shortName: '简称',
              path: '中国广东省广州市白云区机场路1455号',
              higherOrganize: '上级',
              tel: '13660333868'
            }
          ]
        }
      ]
    }
  },
  mounted() {},
  methods: {
    handle(data) {
      console.log(data)
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
</style>
