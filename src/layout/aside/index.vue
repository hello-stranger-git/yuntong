<template>
  <div
    :class="['contain', togAsid ? 'sAside' : 'bAside']"
    :style="{ background: getPreviewBgc ? getPreviewBgc : getAsideBgc }"
  >
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="togAsid"
      :collapse-transition="true"
      :unique-opened="true"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="head">
        <div class="logo"><img :src="getLogo ? getLogo : huaweiLogo" /></div>
        <h2 v-if="!togAsid">云瞳</h2>
      </div>
      <template v-for="(item, i) in routes">
        <!-- 独立路由 -->
        <template v-if="!item.childrens">
          <el-menu-item
            :key="i"
            :route="{ path: item.to }"
            class="primary"
            style="padding-left: 15px;"
            :index="item.id"
          >
            <i :class="['iconfont', item.icon]"></i>
            <span slot="title">{{ item.value }}</span>
          </el-menu-item>
        </template>
        <!-- 带有子路由 -->
        <template v-else>
          <el-submenu :key="i" :index="item.id">
            <!-- 标题 -->
            <template slot="title">
              <i :class="['iconfont', item.icon]"></i>
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
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    togAsid: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      huaweiLogo: require('@/assets/img/aside/huawei_logo.png'),
      activeIndex: 0,
      // 只能嵌套两个childrens
      routes: [
        {
          id: '1',
          value: '门店分布',
          icon: 'iconzu683',
          to: '',
          childrens: [{ id: '1-1', value: '门店分布', to: '/bpRetail' }]
        },
        {
          id: '2',
          value: '数据分析',
          icon: 'iconzu686',
          to: '',
          childrens: [
            { id: '2-1', value: '实时分析', to: '/dataAnalysis/realTime' },
            { id: '2-2', value: '客流分析', to: '/dataAnalysis/flow' },
            { id: '2-3', value: '顾客分析', to: '/dataAnalysis/customer' },
            { id: '2-4', value: '区域排行', to: '/dataAnalysis/region' },
            { id: '2-5', value: '到店统计', to: '/dataAnalysis/toStore' },
            { id: '2-6', value: '多店对比', to: '/dataAnalysis/moreStore' },
            { id: '2-7', value: '统计报表', to: '/dataAnalysis/countForm' },
            { id: '2-8', value: '考勤统计', to: '/dataAnalysis/checkCount' }
          ]
        },
        {
          id: '3',
          to: '',
          value: '实时视频',
          icon: 'iconzu690',
          childrens: [
            { id: '3-1', value: '实时视频', to: '/realVideo/realTimeVideo' }
          ]
        },
        {
          id: '4',
          value: '视频巡查',
          icon: 'iconzu688',
          to: '',
          childrens: [
            { id: '4-1', value: '在线考评', to: '' },
            { id: '4-2', value: '巡查记录', to: '' },
            { id: '4-3', value: '图片点检', to: '' },
            { id: '4-4', value: 'AI巡查', to: '' }
          ]
        },
        {
          id: '5',
          value: '巡查任务',
          icon: 'iconzu695',
          to: '',
          childrens: [
            { id: '5-1', value: '待我处理', to: '' },
            { id: '5-2', value: '我的任务', to: '' },
            { id: '5-3', value: '与我相关', to: '' },
            { id: '5-4', value: '处理意见管理', to: '' }
          ]
        },
        {
          id: '6',
          value: '门店管理',
          icon: 'iconzu697',
          to: '',
          childrens: [
            { id: '6-1', value: '门店管理', to: '' },
            { id: '6-2', value: '门店审核', to: '' }
          ]
        },
        {
          id: '7',
          value: '运维管理',
          icon: 'iconzu699',
          to: '',
          childrens: [
            { id: '7-1', value: '设备管理', to: '/mochaITOM/device' },
            { id: '7-1', value: '视频观看记录', to: '/mochaITOM/history' },
            { id: '7-3', value: '视频观看统计', to: '/mochaITOM/count' }
          ]
        },
        {
          id: '8',
          value: '参数配置',
          icon: 'iconzu705',
          to: '',
          childrens: [
            { id: '8-1', value: '考评任务配置', to: '' },

            { id: '8-2', value: '巡查模板配置', to: '' },
            { id: '8-3', value: '店外客流配置', to: '' },
            { id: '8-4', value: '密度区域类型', to: '' },
            { id: '8-4', value: '密度区域配置', to: '' }
          ]
        },
        {
          id: '9',
          value: '系统设置',
          icon: 'iconzu804',
          to: '',
          childrens: [
            { id: '9-1', value: '用户管理', to: '/systemManagement/' },
            { id: '9-2', value: '组织管理', to: '/systemManagement/' },
            { id: '9-3', value: '职位管理', to: '/systemManagement/' },
            { id: '9-4', value: '日志管理', to: '/systemManagement/' },
            { id: '9-5', value: '集团管理', to: '/systemManagement/group' }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getAsideBgc', 'getPreviewBgc', 'getLogo'])
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleSelect(index) {
      console.log(index)
    }
  }
}
</script>

<style lang="less" scoped>
// 头部logo区域样式
.head {
  transition: all 1s;
  display: flex;
  align-items: center;
  margin: 21px 0 20px;
  justify-content: center;
  .logo {
    width: 52px;
    height: 39px;
    img {
      width: 100%;
    }
  }
  h2 {
    font-size: 18px;
    color: #fff;
    width: 70px;
    text-align: center;
  }
}
.contain {
  height: 100%;
}
//切换样式
.bAside,
.sAside {
  box-sizing: border-box;
  background: #38414a;
}
// .bAside {
//   width: 198px;
// }
// .sAside {
//   width: 68px;
// }
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
  // margin-right: 40px;
  // margin-left: 28px;
  background: inherit;
  width: 198px;
  border: 0;
  // border: 1px solid red;
  .el-menu-item {
    padding: 0;
    // border: 1px solid red;
    margin: 0 34px;
  }
  //一级导航样式
  .primary {
    // border: 1px solid red;
    // padding-left: 20px !important;
    color: #fff;
    height: 42px;
    line-height: 42px;
    border-radius: 5px;
    margin-bottom: 5px;
    display: flex;
    //一级每个选中菜单
    &.is-active,
    &:focus,
    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
      background: #ffffff;
      width: 130px;
      line-height: 42px;
      color: #38414a;
      font-weight: bold;
      i {
        color: #38414a;
      }
    }
    //图标
    i {
      // border: 1px solid red;
      font-size: 14px;
      flex-basis: 30px;

      text-align: center;
      color: #fff;
    }
    //标题
    span {
      margin-left: 5px;
      font-size: 14px;
    }
  }
  //二级菜单父级选中样式
  /deep/.el-submenu.is-active {
    .el-submenu__title {
      box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
      background: #fff;
      width: 130px;
      line-height: 42px;
      color: #38414a;
      font-weight: bold;
      // border: 1px solid red;
      i {
        color: #38414a;
      }
    }
  }
  //二级菜单父样式
  .el-submenu {
    // padding-left: 0 !important;
    width: 198px;
    line-height: 42px;
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 0 34px;

    // border: 1px solid red;
    /deep/.el-submenu__title {
      // border: 1px solid red;
      width: 130px;
      &.is-active,
      &:focus,
      &:hover {
        box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
        background: #ffffff;
        width: 130px;
        color: #38414a;
        font-weight: bold;
        i {
          color: #38414a;
        }
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
        color: #fff;
        &:first-child {
          margin: 0 11px 0 2px;
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
      padding-left: 9px;
      // border: 1px solid red;

      //二级菜单每个子菜单样式
      .el-menu-item {
        // border: 1px solid red;
        padding-left: 6px !important ;
        color: #9ca0a5;
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
  // background-color: #38414a;
  width: 68px;
  border-right: 0;
  margin: 0;
  //一级菜单
  .el-menu-item {
    width: 42px !important;
    height: 42px;
    border-radius: 5px;
    margin: 0 0 5px 11px;
    padding: 0 !important;
    // border: 1px solid black;
    //一级选中菜单样式
    &.is-active,
    &:hover,
    &:focus {
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 47, 117, 0.27);
      border-radius: 5px;

      //图标
      /deep/.el-tooltip {
        // border: 1px solid red;
        i {
          color: #38414a;
        }
      }
    }
    //图标
    /deep/.el-tooltip {
      // padding-left: 12px !important;
      display: flex !important;
      justify-content: center;
      align-items: center;
      // border: 1px solid red;
      i {
        // font-size: 22px;
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
      overflow: hidden;
      //图标
      /deep/.el-tooltip {
        i {
          color: #38414a;
        }
      }
    }
    // &.is-active {
    //   /deep/.el-submenu__title {
    //     // width: 46px !important;
    //   }
    // }
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
        // &:first-child {
        // }
        &:last-child {
          display: none;
        }
      }
    }
  }
}
//导航收缩全部样式end
</style>
