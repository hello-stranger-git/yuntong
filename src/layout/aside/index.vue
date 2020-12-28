<template>
  <div :class="['contain', togAsid ? 'sAside' : 'bAside']">
    <div class="head">
      <div class="logo">logo</div>
      <h2>云瞳</h2>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="togAsid"
      :router="true"
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
      default: false
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
          childrens: [{ value: '实时分析', to: '/dataAnalysis/realTime' }]
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
          to: '13',
          childrens: [
            {
              value: '集团管理',
              to: '/systemManagement/group'
            }
          ]
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
  height: 100%;
}
//切换样式
.bAside,
.sAside {
  box-sizing: border-box;
  background: #38414a;
}
.bAside {
  width: 198px;
}
.sAside {
  width: 68px;
}
.sAside,
.bAside {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
.sAside::-webkit-scrollbar,
.bAside::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
//导航展开全部样式start
.el-menu {
  background: inherit;
  width: 130px;
  height: 100%;
  border: 0;
  margin-left: 28px;
  //一级每个菜单
  .el-menu-item {
    padding-left: 20px !important;
    color: #ffffff;
    height: 42px;
    line-height: 42px;
    border-radius: 5px;
    margin-bottom: 5px;
    //一级每个选中菜单
    &.is-active,
    &:focus,
    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
      background: #ffffff;
      width: 130px;
      line-height: 42px;
      color: #38414a;
    }
    //图标
    i {
      margin-right: 10px;
      font-size: 14px;
    }
    //标题
    span {
      font-size: 14px;
    }
  }
  //二级菜单父级
  /deep/.el-submenu.is-active {
    .el-submenu__title {
      box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
      background: #ffffff;
      width: 130px;
      line-height: 42px;
      color: #38414a;
    }
  }
  .el-submenu {
    padding-left: 0 !important;
    color: #ffffff;
    width: 130px;
    line-height: 42px;
    border-radius: 5px;
    margin-bottom: 5px;
    //二级菜单父样式
    /deep/.el-submenu__title {
      &.is-active,
      &:focus,
      &:hover {
        box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
        background: #ffffff;
        width: 130px;
        color: #38414a;
      }
      height: 42px;
      color: #ffffff;
      line-height: 42px;
      border-radius: 5px;
      //标题
      span {
        font-size: 14px;
      }
      i {
        //图标
        &:first-child {
          margin-right: 10px;
          font-size: 14px;
          width: 14px;
        }
        //箭头
        &:last-child {
          display: none;
        }
      }
    }
    //二级菜单全部子模块样式
    /deep/.el-menu--inline {
      background: inherit;
      padding-left: 24px;
      //二级菜单每个子菜单样式
      .el-menu-item {
        //二级菜单每个子菜单选中样式
        &.is-active,
        &:hover,
        &:focus {
          font-size: 14px;
          font-weight: bold;
          color: #ffffff;
          background-color: inherit;
          box-shadow: none;
        }
      }
    }
  }
}

//导航收缩全部样式start
.el-menu--collapse {
  background-color: #38414a;
  width: 68px;
  border-right: 0;
  margin: 0;
  //一级菜单
  .el-menu-item {
    width: 46px !important;
    height: 42px;
    border-radius: 5px;
    margin: 0 0 5px 11px;
    padding: 0 !important;
    //一级选中菜单
    &.is-active,
    &:hover,
    &:focus {
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
      border-radius: 5px;
      //图标
      /deep/.el-tooltip {
        i {
          color: #38414a;
        }
      }
    }
    //图标
    /deep/.el-tooltip {
      padding-left: 12px !important;
      display: flex !important;
      align-items: center;
      i {
        font-size: 22px;
        color: #ffffff;
      }
    }
  }
  //二级父菜单
  .el-submenu {
    width: 46px;
    height: 42px;
    margin: 0 0 5px 11px;
    padding: 0 !important;
    &.is-active,
    &:hover,
    &:focus {
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
      border-radius: 5px;
      //图标
      /deep/.el-tooltip {
        i {
          color: #38414a;
        }
      }
    }
    &.is-active {
      /deep/.el-submenu__title {
        // padding: 0 !important;
      }
    }
    //二级父菜单样式修改
    /deep/.el-submenu__title {
      padding-left: 12px !important;
      display: flex !important;
      align-items: center;
      width: 46px;
      height: 42px;
      border-radius: 5px;
      &:hover,
      &:focus {
        // padding: 0 !important;
        width: 46px;
        height: 42px;
        line-height: 42px;
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
        text-align: center;
        border-radius: 5px;
        margin: auto;
        //图标
        /deep/.el-tooltip {
          padding: 0 !important;
          i {
            color: #38414a;
          }
        }
      }
      //图标
      i {
        &:first-child {
        }
        &:last-child {
          display: none;
        }
      }
    }
  }
}
//导航收缩全部样式end
</style>
