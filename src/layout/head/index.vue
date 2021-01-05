<!--头部-->
<template>
  <div class="header">
    <i class="iconfont iconzu778" style="cursor: pointer;" @click="tog"></i>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>数据分析</el-breadcrumb-item>
      <el-breadcrumb-item>实时分析</el-breadcrumb-item> -->
      <el-breadcrumb-item
        v-for="item in list.slice(1)"
        :key="item.path + item.name"
      >
        {{ item.meta.breadcrumb }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header_right">
      <span>集团二维码</span>
      <span>兰宇贵</span>
      <span class="signOut" @click="signOut">
        <i class="iconfont iconzu779"></i>
        退出
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      togAsid: false
    }
  },
  computed: {
    list() {
      console.log(this.$route.matched)
      return this.$route.matched
    }
  },
  methods: {
    signOut() {
      this.$router.push({ name: 'Login' })
    },
    // 切换侧边栏
    tog() {
      this.togAsid = !this.togAsid
      this.$emit('togAsid', this.togAsid)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  padding: 0 4px 0 2px;
  display: flex;
  align-items: center;
  height: 100%;
  color: #141414;
  & > i {
    font-size: 20px;
  }
  .el-breadcrumb {
    flex: 1;
    margin-left: 14px;
  }
  /deep/.el-breadcrumb__inner {
    color: #141414;
    opacity: 0.5;
    &:hover {
      color: #141414;
    }
  }
  /deep/.el-icon-arrow-right {
    margin: 0;
  }
  .header_right {
    font-size: 14px;
    span {
      margin-left: 50px;
      i {
        margin-right: 7px;
      }
    }
  }
  .signOut {
    cursor: pointer;
    &:hover {
      color: #3f85ff;
    }
  }
}
</style>
