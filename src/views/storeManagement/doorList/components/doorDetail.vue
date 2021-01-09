<template>
  <div style="padding:24px">
    <div style="width: 1674px;background: #FFFFFF;border-radius: 10px">
      <div>
        <el-form
          ref="form"
          :model="form"
          label-width="110px"
          class="demo-ruleForm"
        >
          <el-form-item label="门店名称" prop="storeName">
            <el-input v-model="form.storeName" disabled />
          </el-form-item>
          <el-form-item label="所属组织" prop="">
            <el-input v-model="form.path" disabled />
          </el-form-item>
          <el-form-item label="省/市" prop="">
            <el-input v-model="form.organization" disabled />
          </el-form-item>
          <el-form-item label="详细地址" prop="location">
            <el-input v-model="form.location" disabled />
          </el-form-item>

          <el-form-item label="" prop="location">
            <img :src="mapImg" width="673px" height="332px" />
          </el-form-item>

          <el-form-item label="门店电话" prop="tel">
            <el-input v-model="form.tel" disabled />
          </el-form-item>
        </el-form>
        <div style="text-align:center;margin-top:48px;padding-bottom: 169px;">
          <span
            style="cursor: pointer;font-size: 14px;color: #FFFFFF;width: 72px;height: 33px;background: #63D45B;border-radius: 8px;line-height:33px;text-align:center;display:inline-block"
            @click="back"
          >
            返回
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        founder: '',
        location: '',
        number: '',
        path: '',
        startTime: '',
        storeName: '',
        tel: '',
        organization: '广州'
      },
      mapImg: require('@/assets/img/storeManagement/doorList/map.png')
    }
  },
  mounted() {
    this.form = this.$route.query.data
    this.form.path = this.form.path.replace('/>/g', '/')
    this.form.organization = '广州'
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
//表单
/deep/.el-form {
  width: 800px;
  margin: auto;

  padding-top: 60px;
  .el-form-item__label {
    font-size: 14px;
    font-weight: bold;
    color: #141414;
    padding-right: 44px;
  }
  .el-input__inner {
    width: 673px;
  }
  .el-form-item {
    margin-bottom: 24px;
  }
}
</style>
