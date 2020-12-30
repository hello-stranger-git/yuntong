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
      <el-col :span="5" class="region_right" v-if="rightText">
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
  props: {
    // 左侧标题
    letfText: {
      type: String,
      default: ''
    },
    // 左侧图标
    leftIcon: {
      type: String
    },
    // 左侧数值:
    leftValue: {
      type: Number
    },
    // 右侧标题
    rightText: {
      type: String,
      default: ''
    },
    // 右侧图标
    rightIcon: {
      type: String
    },
    // 右侧数值:
    rightValue: {
      type: Number
    },
    // 比例宽度
    width: {
      type: String,
      default: ''
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: '#F1F1F1'
    },
    // 比例条颜色
    proportionColor: {
      type: String,
      default: '#4A92FF'
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
    line-height: 16px;
    img {
      width: 13px;
      height: 13px;
      margin-left: 5px;
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
      color: #fff;
    }
    & > span {
      position: absolute;
      top: 0;
      right: 1px;
    }
    div {
      span {
        display: block;
        line-height: 19px;
      }
    }
  }
}
</style>
