<!--密度区域类型-->
<template>
  <div style="padding:24px">
    <!--新增区域类型按钮板块-->
    <div class="search">
      <el-button
        type="primary"
        :style="
          `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
        "
        class="searchBtn"
        @click="add"
        >+新增区域类型</el-button
      >
    </div>
    <!-- 类型设置板块 -->
    <div class="toConfigure">
      <img :src="configure" />
      <p>请点击右上角新增区域类型</p>
      <div v-for="(item, i) of typeNameData" :key="i">
        <h3>区域类型名称</h3>
        <el-input v-model="item.typeName" placeholder="请输入内容" />
        <i class="el-icon-error" @click="dlt(i)"></i>
      </div>
      <el-button type="primary" @click="submit">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      configure: require('@/assets/img/parameterConfig/densityAreaType/configure.png'),
      // 区域类型数据
      typeNameData: [
        {
          typeName: '密度一'
        },
        {
          typeName: '密度二'
        }
      ]
    }
  },
  methods: {
    // 触发新增区域类型
    add() {
      this.typeNameData.push({
        typeName: ''
      })
    },
    // 触发删除配置
    dlt(i) {
      this.typeNameData.splice(i, 1)
    },
    // 触发保存
    submit() {
      console.log(this.typeNameData)
    }
  }
}
</script>

<style lang="less" scoped>
// 新增区域类型按钮板块
.search {
  box-sizing: border-box;
  padding: 20px 24px;
  height: 80px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  /deep/.el-input {
    width: 280px;
  }
  .el-button {
    float: right;
    width: 133px;
  }
}
// 类型设置板块
.toConfigure {
  margin-top: 27px;
  padding: 55px 0 36px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 66px;
    height: 66px;
  }
  & > p {
    font-size: 14px;
    color: #a7a7a7;
    line-height: 19px;
    margin: 6px 0 50px;
  }
  & > div {
    width: 650px;
    display: flex;
    padding-bottom: 18px;
    align-items: center;
    h3 {
      font-size: 14px;
    }
    .el-input {
      margin-left: 20px;
      width: 488px;
    }
    .el-icon-error {
      padding-left: 12px;
      vertical-align: middle;
      font-size: 25px;
      color: #4a92ff;
    }
  }
  & > .el-button {
    width: 90px;
    height: 40px;
    margin-top: 60px;
  }
}
</style>
