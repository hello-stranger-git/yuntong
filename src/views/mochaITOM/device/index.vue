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
      <el-button type="primary" class="searchBtn">查询</el-button>
      <el-button type="info" class="resetBtn">重置</el-button>
    </div>
    <!--表格板块-->
    <div class="module"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deviceNmu: '', // 请输入设备序列号
      name: '', // 请输入门店名称
      number: '', // 请输入门店编号
      deviceName: '' // 请输入设备名称
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
</style>
