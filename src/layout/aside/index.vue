<template>
  <div :class="['contain', togAsid ? 'togAsid' : '']">
    <div class="head">
      <div class="logo">logo</div>
      <h2>云瞳</h2>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="togAsid"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, i) in routes">
        <!-- 独立路由 -->
        <template v-if="!item.childrens">
          <el-menu-item :key="i" :index="item.to">
            <i :class="['iconfont', item.icon]"></i>
            <span slot="title">{{ item.value }}</span>
          </el-menu-item>
        </template>
        <!-- 带有子路由 -->
        <template v-else>
          <el-submenu :key="i" :index="item.to">
            <!-- 标题 -->
            <template slot="title">
              <i class="el-icon-location"></i>
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
  props: {
    togAsid: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 只能嵌套两个childrens
      routes: [
        {
          value: '实时大屏',
          icon: 'iconzu690',
          to: '1'
        },
        {
          value: '门店分布',
          icon: 'iconzu683',
          to: '2'
        },
        {
          value: '数据分析',
          icon: 'iconzu686',
          to: '3',
          childrens: [
            { value: '实时分析', to: '3-1' },
            { value: '客流分析', to: '3-2' },
            { value: '顾客分析', to: '3-3' },
            { value: '区域排行', to: '3-4' },
            { value: '会员识别', to: '3-5' },
            { value: '多店对比', to: '3-6' },
            { value: '试驾识别', to: '3-7' },
            { value: '波次统计', to: '3-8' },
            { value: '统计报表', to: '3-9' },
            { value: '考勤统计', to: '3-10' }
          ]
        },
        {
          to: '4',
          value: '实时视频',
          icon: 'iconzu831'
        },
        {
          value: '视频巡查',
          icon: 'iconzu688',
          to: '5'
        },
        {
          value: '语音巡查',
          icon: 'iconzu694',
          to: '6'
        },
        {
          value: '巡查任务',
          icon: 'iconzu695',
          to: '7'
        },
        {
          value: '门店管理',
          icon: 'iconzu697',
          to: '8'
        },
        {
          value: '运维管理',
          icon: 'iconzu699',
          to: '9'
        },
        {
          value: '参数配置',
          icon: 'iconzu705',
          to: '10'
        },
        {
          value: '工单',
          icon: 'iconzu73',
          to: '11'
        },
        {
          value: '流量与统计',
          icon: 'iconzu777',
          to: '12'
        },
        {
          value: '系统管理',
          icon: 'iconzu804',
          to: '13'
        }
      ]
    }
  },
  watch: {
    togAsid(newVal, oldVal) {
      if (!newVal) {
        console.log(document.getElementsByClassName('el-menu-vertical-demo')[0])
      }
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
  width: 198px;
  background-color: #38414a;
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
}
//图标
/deep/.el-menu-item,
.el-submenu__title {
  i {
    margin-right: 12px;
  }
}
.el-submenu .el-menu-item {
  min-width: 0;
  margin-bottom: 5px;
}
.el-menu {
  border-right: 0;
}
.el-menu,
.el-submenu .el-menu-item {
  width: 142px;
  margin: auto;
}
.el-menu-item,
/deep/.el-submenu__title {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  width: 130px;
  height: 42px;
  line-height: 42px;
  border-radius: 5px;
  font-size: 14px;
}
/deep/.el-menu,
.el-submenu .el-menu-item {
  background-color: #38414a;
}
//隐藏二级导航箭头
/deep/.el-submenu__icon-arrow {
  display: none;
}
//一级导航样式
.el-menu-vertical-demo > .el-menu-item {
  // padding-left: 24px !important;
}
//二级导航样式
.el-menu--inline > .el-menu-item {
  padding-left: 52px !important;
}
/deep/.el-submenu__title:hover {
  color: #38414a;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
}
//一级导航选中
/deep/.el-menu-vertical-demo > .el-menu-item.is-active,
.el-menu-vertical-demo > .el-menu-item:hover {
  color: #38414a;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
}

//二级导航选择样式
/deep/.el-menu--inline {
  .el-menu-item.is-active {
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    box-shadow: none;
  }
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #eee;
  border-radius: 3px;
}

//切换tog
.togAsid {
  width: 68px;
}
</style>
