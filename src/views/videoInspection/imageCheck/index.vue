<!--图片点检-->
<template>
  <div style="padding:24px">
    <!--搜索板块-->
    <div class="search">
      <el-input v-model="searchDoor" placeholder="请输入内容" clearable />
      <el-select
        v-model="videoValue"
        clearable
        placeholder="请选择"
        class="select"
      >
        <el-option
          v-for="item in videoOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-date-picker
        v-model="selectTime"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
      />

      <el-select
        v-model="strackVideo"
        clearable
        placeholder="请选择"
        class="select"
      >
        <el-option
          v-for="item in strackVideoOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-button type="primary" class="searchBtn">查询</el-button>
      <el-button type="info" class="resetBtn">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      searchDoor: '', // 选择门店
      videoOptions: [
        {
          value: '1',
          label: '大厅'
        },
        {
          value: '2',
          label: '大门'
        },
        {
          value: '3',
          label: '侧门'
        },
        {
          value: '4',
          label: '右侧大门'
        },
        {
          value: '5',
          label: '左侧大门'
        }
      ],
      strackVideoOptions: [
        {
          value: '1',
          label: '大厅'
        },
        {
          value: '2',
          label: '大门'
        },
        {
          value: '3',
          label: '侧门'
        },
        {
          value: '4',
          label: '右侧大门'
        },
        {
          value: '5',
          label: '左侧大门'
        }
      ],
      // 下拉框值
      videoValue: '', // 门店值
      selectTime: '', // 时间段选择
      strackVideo: '' // 定时抓拍
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
  .el-button {
    width: 90px;
  }
  /deep/.el-input__inner.el-date-editor--daterange {
    width: 280px;
    margin-left: 24px;
  }
}
</style>
