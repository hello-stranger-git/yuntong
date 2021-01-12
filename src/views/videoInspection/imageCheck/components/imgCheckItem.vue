<template>
  <div>
    <!--标题-->
    <div
      style="display:flex;align-items: center;justify-content: space-between;"
    >
      <span style="font-size: 14px;font-weight: bold;color: #141414;">
        业务咨询台枪机
      </span>
      <span
        :style="
          `background-color:${this.$store.state.btnBgColor};border-color:${this.$store.state.btnBgColor}`
        "
        style="cursor: pointer;font-weight: 400;font-size: 12px;color: #FFFFFF;width: 49px;height: 28px;line-height:28px;text-align:center;background: #4A92FF;opacity: 1;border-radius: 8px;display:inline-block"
        @click="jumpCheck"
      >
        点检
      </span>
    </div>
    <!--图片-->
    <div style="margin-top:12px;width:364px;height:215px;border-radius:12px">
      <img
        width="364px"
        height="215px"
        :src="image"
        style="border-radius:12px"
      />
    </div>
    <!--抓拍类型-->
    <div style="margin-top:16px">
      <span style="font-size: 16px;font-weight: 400;color: #4A92FF;">
        {{ type }}
      </span>
    </div>
    <!--地址与时间-->
    <div style="margin-top:8px;display: flex;justify-content: space-between;">
      <span style="font-size: 14px;font-weight: 400;color: #141414;">
        {{ address }}
      </span>
      <span style="font-size: 14px;font-weight: 400;color: #141414;">
        {{ time }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    this.data = {
      title: this.title,
      type: this.type,
      address: this.address,
      time: this.time,
      image: this.image
    }
  },
  methods: {
    jumpCheck() {
      this.$router.push({
        path: '/videoInspection/imageCheck/check',
        query: { data: JSON.stringify(this.data) }
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
