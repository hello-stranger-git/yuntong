<template>
  <div style="width:140px">
    <!-- 图片 -->
    <div
      class="userImageDiv"
      style="text-align:center;width:140px;height:140px"
    >
      <img :src="userImg" width="140px" height="140px" class="userImage" />
      <img class="vipImage" :src="vipIcon" width="29px" height="21px" />
    </div>
    <div style="margin-top:18px;margin-left:32px">
      <!-- 时间 -->
      <div>
        <img
          style="margin-right:6px"
          :src="timeIcon"
          width="11px"
          height="11px"
        />
        <span
          style="font-size: 14px;font-weight: 400;color: #343434;opacity: 0.7;"
        >
          {{ date }}
        </span>
      </div>
      <!-- 年龄 -->
      <div style="margin-top:2px">
        <img
          style="margin-right:8px"
          v-if="sex === 0"
          :src="boyIcon"
          width="11px"
          height="11px"
        />

        <img
          style="margin-right:6px"
          v-if="sex === 1"
          :src="girlIcon"
          width="11px"
          height="11px"
        />
        <span
          style="font-size: 14px;font-weight: 400;color: #343434;opacity: 0.7;"
        >
          {{ age }}岁
        </span>
      </div>
      <!-- 到店 -->
      <div style="margin-top:2px" class="goStore">
        <img
          style="margin-right:8px"
          v-if="crossStore"
          :src="crossStoreIcon"
          width="12px"
          height="13px"
        />
        <span
          v-if="count === 1"
          style="font-size: 14px;font-weight: 400;color: #4A92FF;"
          :class="[!crossStore ? 'marginLeft' : '']"
        >
          新客
        </span>
        <span
          :class="[!crossStore ? 'marginLeft' : '']"
          style="font-size: 14px;font-weight: 400;color: #343434;"
          v-else
        >
          {{ count }}次到店
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 用户头像
    userImg: {
      type: String,
      default: ''
    },
    // 访问时间
    date: {
      type: String,
      default: ''
    },
    // 用户年龄
    age: {
      type: String,
      default: ''
    },
    // 性别(0男,1女)
    sex: {
      type: Number,
      default: 0
    },
    // 访问次数
    count: {
      type: Number,
      default: 1
    },
    // 是否是回头客
    crossStore: {
      type: Boolean,
      default: false
    },
    // 是否是vip
    vip: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timeIcon: require('@/assets/img/dataAnalysis/realTime/icon/timeIcon.png'),
      boyIcon: require('@/assets/img/dataAnalysis/realTime/icon/boyIcon.png'),
      crossStoreIcon: require('@/assets/img/dataAnalysis/realTime/icon/crossStoreIcon.png'),
      girlIcon: require('@/assets/img/dataAnalysis/realTime/icon/girlIcon.png'),
      vipIcon: require('@/assets/img/dataAnalysis/realTime/icon/vipIcon.png')
    }
  }
}
</script>

<style lang="less" scoped>
//头像模块
.userImageDiv {
  position: relative;
  box-sizing: border-box;
  .userImage {
    border-radius: 50%;
  }
  .vipImage {
    position: absolute;
    right: 12px;
    bottom: 1px;
  }
}

//到店模块
.goStore {
  .marginLeft {
    margin-left: 22px;
  }
}
</style>
