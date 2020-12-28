<template>
  <el-container class="outerLayer">
    <el-aside width="auto" style="overflow:hidden">
      <SideBar :tog-asid="togAsid" />
    </el-aside>
    <el-container>
      <el-header height="60px">
        <Header @togAsid="tog" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './aside/index'
import Header from '@/layout/head/index.vue'
export default {
  components: {
    SideBar,
    Header
  },
  data() {
    return {
      togAsid: false
    }
  },
  methods: {
    tog(tog) {
      this.togAsid = tog
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

// .el-aside {
//   background-color: #38414a;
//   color: #333;
// }

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0;
  margin: 0;
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

// .togAsid {
//   width: 68px !important;
// }
</style>
