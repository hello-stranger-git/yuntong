<!--统计报表-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input
        v-model="storeArea"
        class="deviceNmu"
        placeholder="请选择地区"
        clearable
      />
      <el-select v-model="value" placeholder="请选择店铺">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="danger" class="resetBtn">月报表</el-button>
      <el-button type="warning" class="resetBtn">年报表</el-button>
      <el-date-picker v-model="value1" type="month" placeholder="选择日期" />
      <el-button
        type="primary"
        :style="
          `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
        "
        class="searchBtn"
      >
        查询
      </el-button>
      <el-button type="success" class="resetBtn">重置</el-button>
      <el-button type="info" class="resetBtn">导出</el-button>
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
          <el-table-column prop="index" label="序号" />
          <el-table-column prop="time" label="时间" />
          <el-table-column prop="man" label="男" />
          <el-table-column prop="woman" label="女" />
          <el-table-column prop="group1" label="25岁以下" />
          <el-table-column prop="group2" label="26~35岁" />
          <el-table-column prop="group3" label="26~35岁" />
          <el-table-column prop="group4" label="36~45岁" />
          <el-table-column prop="group5" label="46~55岁" />
          <el-table-column prop="group6" label="56~65岁" />
          <el-table-column prop="group7" label="65岁以上" />
          <el-table-column prop="group8" label="会员数" />
          <el-table-column prop="group9" label="客流人数" />
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
      storeArea: '', // 地区
      value1: '',
      // 分页数据start
      total: 0, // 总共多少条数据
      pageSize: 1, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 分页数据start
      // 表格数据
      tableData: [
        // {
        //   index: '',
        //   time: '',
        //   man: '',
        //   woman: '',
        //   group1: '',
        //   group2: '',
        //   group3: '',
        //   group4: '',
        //   group5: '',
        //   group6: '',
        //   group7: '',
        //   group8: '',
        //   group9: ''
        // }
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
  mounted() {},
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
