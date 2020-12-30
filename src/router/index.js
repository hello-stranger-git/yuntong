import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 主界面
  {
    path: '/',
    component: () => import('@/layout'),
    redirect: '/bpRetail',
    children: [
      // 门店分布
      {
        path: '/bpRetail',
        name: 'BPRetail',
        component: () => import('@/views/bpRetail')
      },
      // 数据分析
      {
        path: '/dataAnalysis',
        name: 'DataAnalysis',
        component: () => import('@/views/dataAnalysis'),
        children: [
          // 实时分析
          {
            path: '/dataAnalysis/realTime',
            name: 'RealTime',
            component: () => import('@/views/dataAnalysis/realTime')
          },
          // 客流分析
          {
            path: '/dataAnalysis/flow',
            name: 'Flow',
            component: () => import('@/views/dataAnalysis/flow')
          },
          // 顾客分析
          {
            path: '/dataAnalysis/customer',
            name: 'Customer',
            component: () => import('@/views/dataAnalysis/customer')
          },
          // 区域排行
          {
            path: '/dataAnalysis/region',
            name: 'Region',
            component: () => import('@/views/dataAnalysis/region')
          },
          // 到店统计
          {
            path: '/dataAnalysis/toStore',
            name: 'ToStore',
            component: () => import('@/views/dataAnalysis/toStore')
          },
          //  多店对比
          {
            path: '/dataAnalysis/moreStore',
            name: 'MoreStore',
            component: () => import('@/views/dataAnalysis/moreStore')
          },
          //  统计报表
          {
            path: '/dataAnalysis/countForm',
            name: 'CountForm',
            component: () => import('@/views/dataAnalysis/countForm')
          },
          //  考勤统计
          {
            path: '/dataAnalysis/checkCount',
            name: 'CheckCount',
            component: () => import('@/views/dataAnalysis/checkCount')
          }
        ]
      },
      // 实时视频
      {
        path: '/realVideo',
        name: 'RealVideo',
        component: () => import('@/views/realVideo'),
        children: [
          // 实时视频
          {
            path: '/realVideo/realTimeVideo',
            name: 'RealTimeVideo',
            component: () => import('@/views/realVideo/realTimeVideo')
          }
        ]
      },
      // 视频巡查
      {
        path: '/videoInspection',
        name: 'VideoInspection',
        component: () => import('@/views/videoInspection'),
        children: [
          // 在线考评
          {
            path: '/videoInspection/onLine',
            name: 'OnLine',
            component: () => import('@/views/videoInspection/onLine')
          },
          // 巡查记录
          {
            path: '/videoInspection/inspectionRecord',
            name: 'InspectionRecord',
            component: () => import('@/views/videoInspection/inspectionRecord')
          },
          // 图片点检
          {
            path: '/videoInspection/imageCheck',
            name: 'ImageCheck',
            component: () => import('@/views/videoInspection/imageCheck')
          },
          // AI巡查
          {
            path: '/videoInspection/aiInspection',
            name: 'AiInspection',
            component: () => import('@/views/videoInspection/aiInspection')
          }]
      },
      // 语音巡查
      // {
      //   path: '/voicePatrol',
      //   name: 'VoicePatrol',
      //   component: () => import('@/views/voicePatrol')
      // },
      // 巡查任务
      {
        path: '/inspectionTask',
        name: 'InspectionTask',
        component: () => import('@/views/inspectionTask'),
        children: [
          // 待我处理
          {
            path: '/inspectionTask/waitDeal',
            name: 'WaitDeal',
            component: () => import('@/views/inspectionTask/waitDeal')
          },
          // 我的任务
          {
            path: '/inspectionTask/myTask',
            name: 'MyTask',
            component: () => import('@/views/inspectionTask/myTask')
          },
          // 与我相关
          {
            path: '/inspectionTask/myRelevant',
            name: 'MyRelevant',
            component: () => import('@/views/inspectionTask/myRelevant')
          },
          // 处理意见管理
          {
            path: '/inspectionTask/dealOpinion',
            name: 'DealOpinion',
            component: () => import('@/views/inspectionTask/dealOpinion')
          }
        ]
      },
      // 门店管理
      {
        path: '/storeManagement',
        name: 'StoreManagement',
        component: () => import('@/views/storeManagement'),
        children: [
          // 门店列表
          {
            path: '/storeManagement/doorList',
            name: 'DoorList',
            component: () => import('@/views/storeManagement/doorList')
          },
          // 门店审核
          {
            path: '/storeManagement/doorExamine',
            name: 'DoorExamine',
            component: () => import('@/views/storeManagement/doorExamine')
          }
        ]
      },
      // 运维管理
      {
        path: '/mochaITOM',
        name: 'MochaITOM',
        component: () => import('@/views/mochaITOM'),
        children: [
          // 设备管理
          {
            path: '/mochaITOM/device',
            name: 'Device',
            component: () => import('@/views/mochaITOM/device')
          },
          // 视频观看记录
          {
            path: '/mochaITOM/history',
            name: 'History',
            component: () => import('@/views/mochaITOM/history')
          },
          // 视频观看统计
          {
            path: '/mochaITOM/count',
            name: 'Count',
            component: () => import('@/views/mochaITOM/count')
          }
        ]
      },
      // 参数配置
      {
        path: '/parameterConfig',
        name: 'ParameterConfig',
        component: () => import('@/views/parameterConfig')
      },
      // 工单
      // {
      //   path: '/workOrder',
      //   name: 'WorkOrder',
      //   component: () => import('@/views/workOrder')
      // },
      // 流量与计费
      // {
      //   path: '/trafficStatistics',
      //   name: 'TrafficStatistics',
      //   component: () => import('@/views/trafficStatistics')
      // },
      // 系统设置
      {
        path: '/systemManagement',
        name: 'SystemManagement',
        component: () => import('@/views/systemManagement'),
        children: [
          // 集团管理
          {
            path: '/systemManagement/group',
            name: 'Group',
            component: () => import('@/views/systemManagement/group')
          }
        ]
      }
    ]
  },
  // 登录界面
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
