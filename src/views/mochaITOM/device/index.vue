<!--设备管理-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input
        v-model="deviceNmu"
        class="deviceNmu"
        placeholder="请输入设备序列号"
        clearable
      />
      <el-input
        v-model="name"
        class="name"
        placeholder="请输入门店名称"
        clearable
      />
      <el-input
        v-model="number"
        class="number"
        placeholder="请输入门店编号"
        clearable
      />
      <el-input
        v-model="deviceName"
        class="deviceName"
        placeholder="请输入设备名称"
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
      <div>
        <el-button
          type="primary"
          :style="
            `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
          "
        >
          生成视频地址
        </el-button>
        <el-button type="danger">
          删除视频地址
        </el-button>
        <el-button type="info">
          设备管理导出
        </el-button>
      </div>
      <!--表格-->
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column type="selection" width="25" />
          <el-table-column prop="teamName" label="集团名称" width="100" />
          <el-table-column prop="deviceNum" label="设备序列号" width="148" />
          <el-table-column prop="deviceName" label="设备名称" width="100" />
          <el-table-column prop="deviceType" label="设备类型" width="75" />
          <el-table-column prop="deviceModel" label="设备型号" width="108" />
          <el-table-column prop="devicePath" label="设备路径" width="258" />
          <el-table-column prop="doorNum" label="门店编号" width="75" />
          <el-table-column prop="doorName" label="门店名称" width="126" />
          <el-table-column prop="wayNum" label="通道号" width="66" />
          <el-table-column prop="wayName" label="通道名称" width="80" />
          <el-table-column prop="wayAddress" label="视频地址" width="80" />
          <el-table-column label="操作">
            <template>
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
                复制高清地址
              </el-button>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
              >
                复制标清地址
              </el-button>
              <el-button
                size="mini"
                type="primary"
                :style="
                  `background-color:${$store.state.btnBgColor};border-color:${$store.state.btnBgColor}`
                "
              >
                拾音器关联
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
      deviceNmu: '', // 请输入设备序列号
      name: '', // 请输入门店名称
      number: '', // 请输入门店编号
      deviceName: '', // 请输入设备名称
      // 分页数据start
      total: 100, // 总共多少条数据
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前在哪一页
      // 分页数据start
      // 表格数据
      tableData: [
        {
          teamName: '广东丽的集团',
          deviceNum: '4K01C42PAZA9344',
          deviceName: 'DH-SXT2017',
          deviceType: 'nvr',
          deviceModel: 'DH-SXT2017',
          devicePath: '广东丽的集团/丽的华为/广东省/广州',
          doorNum: '1419',
          doorName: '太和华为体验店',
          wayNum: '0',
          wayName: '吧台鱼眼',
          wayAddress: '已生成'
        },
        {
          teamName: '广东丽的集团',
          deviceNum: '4K01C42PAZA9344',
          deviceName: 'DH-SXT2017',
          deviceType: 'nvr',
          deviceModel: 'DH-SXT2017',
          devicePath: '广东丽的集团/丽的华为/广东省/广州',
          doorNum: '1419',
          doorName: '太和华为体验店',
          wayNum: '0',
          wayName: '吧台鱼眼',
          wayAddress: '已生成'
        },
        {
          teamName: '广东丽的集团',
          deviceNum: '4K01C42PAZA9344',
          deviceName: 'DH-SXT2017',
          deviceType: 'nvr',
          deviceModel: 'DH-SXT2017',
          devicePath: '广东丽的集团/丽的华为/广东省/广州',
          doorNum: '1419',
          doorName: '太和华为体验店',
          wayNum: '0',
          wayName: '吧台鱼眼',
          wayAddress: '已生成'
        },
        {
          teamName: '广东丽的集团',
          deviceNum: '4K01C42PAZA9344',
          deviceName: 'DH-SXT2017',
          deviceType: 'nvr',
          deviceModel: 'DH-SXT2017',
          devicePath: '广东丽的集团/丽的华为/广东省/广州',
          doorNum: '1419',
          doorName: '太和华为体验店',
          wayNum: '0',
          wayName: '吧台鱼眼',
          wayAddress: '已生成'
        },
        {
          teamName: '广东丽的集团',
          deviceNum: '4K01C42PAZA9344',
          deviceName: 'DH-SXT2017',
          deviceType: 'nvr',
          deviceModel: 'DH-SXT2017',
          devicePath: '广东丽的集团/丽的华为/广东省/广州',
          doorNum: '1419',
          doorName: '太和华为体验店',
          wayNum: '0',
          wayName: '吧台鱼眼',
          wayAddress: '已生成'
        },
        {
          teamName: '广东丽的集团',
          deviceNum: '4K01C42PAZA9344',
          deviceName: 'DH-SXT2017',
          deviceType: 'nvr',
          deviceModel: 'DH-SXT2017',
          devicePath: '广东丽的集团/丽的华为/广东省/广州',
          doorNum: '1419',
          doorName: '太和华为体验店',
          wayNum: '0',
          wayName: '吧台鱼眼',
          wayAddress: '已生成'
        },
        {
          teamName: '广东丽的集团',
          deviceNum: '4K01C42PAZA9344',
          deviceName: 'DH-SXT2017',
          deviceType: 'nvr',
          deviceModel: 'DH-SXT2017',
          devicePath: '广东丽的集团/丽的华为/广东省/广州',
          doorNum: '1419',
          doorName: '太和华为体验店',
          wayNum: '0',
          wayName: '吧台鱼眼',
          wayAddress: '已生成'
        },
        {
          teamName: '广东丽的集团',
          deviceNum: '4K01C42PAZA9344',
          deviceName: 'DH-SXT2017',
          deviceType: 'nvr',
          deviceModel: 'DH-SXT2017',
          devicePath: '广东丽的集团/丽的华为/广东省/广州',
          doorNum: '1419',
          doorName: '太和华为体验店',
          wayNum: '0',
          wayName: '吧台鱼眼',
          wayAddress: '已生成'
        },
        {
          teamName: '广东丽的集团',
          deviceNum: '4K01C42PAZA9344',
          deviceName: 'DH-SXT2017',
          deviceType: 'nvr',
          deviceModel: 'DH-SXT2017',
          devicePath: '广东丽的集团/丽的华为/广东省/广州',
          doorNum: '1419',
          doorName: '太和华为体验店',
          wayNum: '0',
          wayName: '吧台鱼眼',
          wayAddress: '已生成'
        },
        {
          teamName: '广东丽的集团',
          deviceNum: '4K01C42PAZA9344',
          deviceName: 'DH-SXT2017',
          deviceType: 'nvr',
          deviceModel: 'DH-SXT2017',
          devicePath: '广东丽的集团/丽的华为/广东省/广州',
          doorNum: '1419',
          doorName: '太和华为体验店',
          wayNum: '0',
          wayName: '吧台鱼眼',
          wayAddress: '已生成'
        }
      ]
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
  .name,
  .number,
  .number,
  .deviceName {
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
    /deep/.el-table .cell {
      padding: 0;
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
</style>
