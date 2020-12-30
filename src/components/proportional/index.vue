<template>
  <div class="proportional">
    <el-row type="flex" align="middle">
      <!-- 左侧区域 -->
      <el-col :span="5" class="region_left">
        <div>
          <span>{{ letfText }}</span
          ><img :src="leftIcon" />
        </div>
      </el-col>
      <!-- 中间区域 -->
      <el-col
        :span="14"
        :style="`background-color:${bgColor}`"
        class="region_centre"
      >
        <div
          :style="
            `width:${width};background-color:${proportionColor};${
              rightText ? '' : ' border-radius: inherit;'
            }`
          "
        >
          <span>{{ leftValue }}</span>
        </div>
        <span>{{ rightValue }}</span>
      </el-col>
      <!-- 右侧区域 -->
      <el-col :span="5" class="region_right">
        <div>
          <span>{{ rightText }}</span
          ><img :src="rightIcon" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // // 图标
      // userIcon: require('@/assets/img/icon/user.png'),
      // boyIcon: require('@/assets/img/icon/boyIcon.png'),
      // girlIcon: require('@/assets/img/icon/girlIcon.png'),
      // huuiyuan: require('@/assets/img/icon/huuiyuan.png'),
      // 左侧标题
      letfText: '男性',
      // 左侧图标
      leftIcon: require('@/assets/img/icon/boyIcon.png'),
      // 左侧数值:
      leftValue: 203,
      // 右侧标题
      rightText: '女性',
      // 右侧图标
      rightIcon: require('@/assets/img/icon/girlIcon.png'),
      // 右侧数值:
      rightValue: 44,
      // 比例宽度
      width: '50%',
      // 背景颜色
      bgColor: '#FF8181',
      // 比例条颜色
      proportionColor: '#4A92FF'
    }
  }
}
</script>
<style lang="less" scoped>
.proportional {
  .el-col {
    height: 19px;
  }
  // 右侧以及左侧样式
  .region_left,
  .region_right {
    font-size: 16px;
    img {
      width: 13px;
      height: 13px;
    }
  }
  .region_left {
    text-align: right;
    div {
      margin-right: 19px;
    }
  }
  .region_right {
    div {
      margin-left: 19px;
    }
  }
  // 中间样式
  .region_centre {
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    span {
      font-size: 14px;
      margin: 0 10px;
      line-height: 19px;
    }
    & > span {
      position: absolute;
      top: 0;
      right: 1px;
    }
  }
}
</style>
