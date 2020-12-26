<template>
  <div class="contain">
    <div class="head">
      <div class="logo">logo</div>
      <h2>云瞳</h2>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="false"
      active-text-color="#38414a"
      text-color="red"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, i) in routes">
        <!-- 独立路由 -->
        <template v-if="!item.childrens">
          <el-menu-item :key="i" :index="item.to">
            <i class="el-icon-menu" />
            <span slot="title">{{ item.value }}</span>
          </el-menu-item>
        </template>
        <!-- 带有子路由 -->
        <template v-else>
          <el-submenu :key="i" :index="item.to">
            <!-- 标题 -->
            <template slot="title">
              <i class="el-icon-location" />
              <span>{{ item.value }}</span>
            </template>
            <!-- 组内成员 -->
            <!-- 再次判断是否有子路由 -->
            <template v-for="(params, index) in item.childrens">
              <template v-if="!params.childrens">
                <el-menu-item :key="index" :index="params.to">
                  {{ params.value }}
                </el-menu-item>
              </template>
              <template v-else>
                <el-submenu :key="index" index="1-4">
                  <template slot="title">{{ params.value }}</template>
                  <el-menu-item
                    v-for="(query, k) in params.childrens"
                    :key="k"
                    :index="query.to"
                  >
                    {{ query.value }}
                  </el-menu-item>
                </el-submenu>
              </template>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 只能嵌套两个childrens
      routes: [
        {
          value: '导航二',
          to: '1'
        },
        {
          value: '导航二',
          to: '2'
        },
        {
          value: '导航二',
          to: '3'
        },
        {
          to: '4',
          value: '导航一',
          childrens: [
            { value: '1-1', to: '4-1' },
            { value: '1-2', to: '4-2' },
            {
              value: '1-3',
              to: '4-3'
            }
          ]
        },
        {
          value: '导航二',
          to: '5'
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  width: 100%;
  background-color: #38414a;
  .el-menu {
    background-color: #38414a;
  }
  .el-submenu {
    margin: 0 40px 0 28px;
    padding: 0;
  }
  .el-submenu__title {
    height: 42px;
    line-height: 42px;
  }
  .head {
    display: flex;
    height: 60px;
    color: #fff;
    justify-content: center;
    align-items: center;
  }
  // 独立路由
  .el-menu-item,
  .el-submenu__title {
    height: 42px;
    line-height: 42px;
    font-weight: bold;
    margin: 0 40px 0 28px;
    .el-submenu__icon-arrow {
      display: none;
    }
  }
  .el-menu-item.is-active {
    border-radius: 5px;
    background-color: #fff;
    color: #38414a;
  }
}
</style>
