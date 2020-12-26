<template>
  <el-container class="outerLayer">
    <div :style="{ background: '#38414A' }" @click="flag = !flag">
      <el-aside :style="{ width: flag ? '80px' : '198px' }">
        <SideBar />
      </el-aside>
    </div>
    <el-container>
      <el-header height="60px">
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './aside/index1'
import Header from '@/layout/head/index.vue'
export default {
  components: {
    SideBar,
    Header
  },
  data() {
    return {
      flag: false
    }
  }
}
</script>

<style lang="less" scoped>
.outerLayer {
  height: 100%;
}
.el-header {
  background-color: #fff;
}

.el-aside {
  transition: width 0.3s;
  background-color: #38414a;
  color: #333;
}
.el-aside::-webkit-scrollbar {
  display: none;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
