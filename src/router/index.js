import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 主界面
  {
    path: '/',
    component: () => import('@/layout'),
    redirect: '/realScreen',
    children: [
      // 实时大屏
      {
        path: '/realScreen',
        name: 'RealScreen',
        component: () => import('@/views/realScreen')
      },
      // 门店分析
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
          }
        ]
      },
      // 实时视频
      {
        path: '/realVideo',
        name: 'RealVideo',
        component: () => import('@/views/realVideo')
      },
      // 视频巡查
      {
        path: '/videoInspection',
        name: 'VideoInspection',
        component: () => import('@/views/videoInspection')
      },
      // 语音巡查
      {
        path: '/voicePatrol',
        name: 'VoicePatrol',
        component: () => import('@/views/voicePatrol')
      },
      // 巡查任务
      {
        path: '/inspectionTask',
        name: 'InspectionTask',
        component: () => import('@/views/inspectionTask')
      },
      // 门店管理
      {
        path: '/storeManagement',
        name: 'StoreManagement',
        component: () => import('@/views/storeManagement')
      },
      // 运维管理
      {
        path: '/mochaITOM',
        name: 'MochaITOM',
        component: () => import('@/views/mochaITOM')
      },
      // 参数配置
      {
        path: '/parameterConfig',
        name: 'ParameterConfig',
        component: () => import('@/views/parameterConfig')
      },
      // 工单
      {
        path: '/workOrder',
        name: 'WorkOrder',
        component: () => import('@/views/workOrder')
      },
      // 流量与计费
      {
        path: '/trafficStatistics',
        name: 'TrafficStatistics',
        component: () => import('@/views/trafficStatistics')
      },
      // 系统管理
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
