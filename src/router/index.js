import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  // 主界面
  {
    path: '/',
    component: () => import('@/layout'),
    meta: {
      breadcrumb: '首页'
    },
    redirect: '/bpRetail',
    children: [
      // 门店分布
      {
        path: '/bpRetail',
        name: 'BPRetail',
        component: () => import('@/views/bpRetail'),
        meta: {
          breadcrumb: '门店分布'
        }
      },
      // 数据分析
      {
        path: '/dataAnalysis',
        name: 'DataAnalysis',
        component: () => import('@/views/dataAnalysis'),
        meta: {
          breadcrumb: '数据分析'
        },
        redirect: '/dataAnalysis/realTime',
        children: [
          // 实时分析
          {
            path: '/dataAnalysis/realTime',
            name: 'RealTime',
            component: () => import('@/views/dataAnalysis/realTime'),
            meta: {
              breadcrumb: '实时分析'
            }
          },
          // 客流分析
          {
            path: '/dataAnalysis/flow',
            name: 'Flow',
            component: () => import('@/views/dataAnalysis/flow'),
            meta: {
              breadcrumb: '客流分析'
            }
          },
          // 顾客分析
          {
            path: '/dataAnalysis/customer',
            name: 'Customer',
            component: () => import('@/views/dataAnalysis/customer'),
            meta: {
              breadcrumb: '顾客分析'
            }
          },
          // 区域排行
          {
            path: '/dataAnalysis/region',
            name: 'Region',
            component: () => import('@/views/dataAnalysis/region'),
            meta: {
              breadcrumb: '区域排行'
            }
          },
          // 到店统计
          {
            path: '/dataAnalysis/toStore',
            name: 'ToStore',
            component: () => import('@/views/dataAnalysis/toStore'),
            meta: {
              breadcrumb: '到店统计'
            }
          },
          //  多店对比
          {
            path: '/dataAnalysis/moreStore',
            name: 'MoreStore',
            component: () => import('@/views/dataAnalysis/moreStore'),
            meta: {
              breadcrumb: '多店对比'
            }
          },
          //  统计报表
          {
            path: '/dataAnalysis/countForm',
            name: 'CountForm',
            component: () => import('@/views/dataAnalysis/countForm'),
            meta: {
              breadcrumb: '统计报表'
            }
          },
          //  考勤统计
          {
            path: '/dataAnalysis/checkCount',
            name: 'CheckCount',
            component: () => import('@/views/dataAnalysis/checkCount'),
            meta: {
              breadcrumb: '考勤统计'
            }
          }
        ]
      },
      // 实时视频
      {
        path: '/realVideo',
        name: 'RealVideo',
        component: () => import('@/views/realVideo'),
        meta: {
          breadcrumb: '实时视频'
        },
        redirect: '/realVideo/realTimeVideo',
        children: [
          // 实时视频
          {
            path: '/realVideo/realTimeVideo',
            name: 'RealTimeVideo',
            component: () => import('@/views/realVideo/realTimeVideo'),
            meta: {
              breadcrumb: '实时视频'
            }
          }
        ]
      },
      // 视频巡查
      {
        path: '/videoInspection',
        name: 'VideoInspection',
        component: () => import('@/views/videoInspection'),
        redirect: '/videoInspection/onLine',
        meta: {
          breadcrumb: '视频巡查'
        },
        children: [
          // 在线考评
          {
            path: '/videoInspection/onLine',
            name: 'OnLine',
            component: () => import('@/views/videoInspection/onLine'),
            meta: {
              breadcrumb: '在线考评'
            }
          },
          // 巡查记录
          {
            path: '/videoInspection/inspectionRecord',
            name: 'InspectionRecord',
            component: () => import('@/views/videoInspection/inspectionRecord'),
            meta: {
              breadcrumb: '巡查记录'
            }
          },
          // 图片点检
          {
            path: '/videoInspection/imageCheck',
            name: 'ImageCheck',
            component: () => import('@/views/videoInspection/imageCheck'),
            meta: {
              breadcrumb: '图片点检'
            }
          },
          // AI巡查
          {
            path: '/videoInspection/aiInspection',
            name: 'AiInspection',
            component: () => import('@/views/videoInspection/aiInspection'),
            meta: {
              breadcrumb: 'AI巡查'
            }
          }]
      },
      // 巡查任务
      {
        path: '/inspectionTask',
        name: 'InspectionTask',
        component: () => import('@/views/inspectionTask'),
        redirect: '/inspectionTask/waitDeal',
        meta: {
          breadcrumb: '巡查任务'
        },
        children: [
          // 待我处理
          {
            path: '/inspectionTask/waitDeal',
            name: 'WaitDeal',
            component: () => import('@/views/inspectionTask/waitDeal'),
            meta: {
              breadcrumb: '待我处理'
            }
          },
          // 我的任务
          {
            path: '/inspectionTask/myTask',
            name: 'MyTask',
            component: () => import('@/views/inspectionTask/myTask'),
            meta: {
              breadcrumb: '我的任务'
            }
          },
          // 与我相关
          {
            path: '/inspectionTask/myRelevant',
            name: 'MyRelevant',
            component: () => import('@/views/inspectionTask/myRelevant'),
            meta: {
              breadcrumb: '与我相关'
            }
          },
          // 处理意见管理
          {
            path: '/inspectionTask/dealOpinion',
            name: 'DealOpinion',
            component: () => import('@/views/inspectionTask/dealOpinion'),
            meta: {
              breadcrumb: '处理意见管理'
            }
          }
        ]
      },
      // 门店管理
      {
        path: '/storeManagement',
        name: 'StoreManagement',
        component: () => import('@/views/storeManagement'),
        redirect: '/storeManagement/doorList',
        meta: {
          breadcrumb: '门店管理'
        },
        children: [
          // 门店列表
          {
            path: '/storeManagement/doorList',
            name: 'DoorList',
            component: () => import('@/views/storeManagement/doorList'),
            meta: {
              breadcrumb: '门店列表'
            }
          },
          // 门店审核
          {
            path: '/storeManagement/doorExamine',
            name: 'DoorExamine',
            component: () => import('@/views/storeManagement/doorExamine'),
            meta: {
              breadcrumb: '门店审核'
            }
          }
        ]
      },
      // 运维管理
      {
        path: '/mochaITOM',
        name: 'MochaITOM',
        component: () => import('@/views/mochaITOM'),
        redirect: '/mochaITOM/device',
        meta: {
          breadcrumb: '运维管理'
        },
        children: [
          // 设备管理
          {
            path: '/mochaITOM/device',
            name: 'Device',
            component: () => import('@/views/mochaITOM/device'),
            meta: {
              breadcrumb: '设备管理'
            }
          },
          // 视频观看记录
          {
            path: '/mochaITOM/history',
            name: 'History',
            component: () => import('@/views/mochaITOM/history'),
            meta: {
              breadcrumb: '视频观看记录'
            }
          },
          // 视频观看统计
          {
            path: '/mochaITOM/count',
            name: 'Count',
            component: () => import('@/views/mochaITOM/count'),
            meta: {
              breadcrumb: '视频观看统计'
            }
          }
        ]
      },
      // 参数配置
      {
        path: '/parameterConfig',
        name: 'ParameterConfig',
        component: () => import('@/views/parameterConfig'),
        redirect: '/parameterConfig/evaluationConfig',
        meta: {
          breadcrumb: '参数配置'
        },
        children: [
          // 考评任务配置
          {
            path: '/parameterConfig/evaluationConfig',
            name: 'EvaluationConfig',
            component: () => import('@/views/parameterConfig/evaluationConfig'),
            meta: {
              breadcrumb: '考评任务配置'
            }
          },
          // 巡查模板配置
          {
            path: '/parameterConfig/inspectionConfig',
            name: 'InspectionConfig',
            component: () => import('@/views/parameterConfig/inspectionConfig'),
            meta: {
              breadcrumb: '巡查模板配置'
            }
          },
          // 店外客流配置
          {
            path: '/parameterConfig/innerFlowConfig',
            name: 'InnerFlowConfig',
            component: () => import('@/views/parameterConfig/innerFlowConfig'),
            meta: {
              breadcrumb: '店外客流配置'
            }
          },
          // 密度区域类型
          {
            path: '/parameterConfig/densityAreaType',
            name: 'DensityAreaType',
            component: () => import('@/views/parameterConfig/densityAreaType'),
            meta: {
              breadcrumb: '密度区域类型'
            }
          },

          // 密度区域配置
          {
            path: '/parameterConfig/densityAreaConfig',
            name: 'densityAreaConfig',
            component: () => import('@/views/parameterConfig/densityAreaConfig'),
            meta: {
              breadcrumb: '密度区域配置'
            }
          }
        ]
      },
      // 系统设置
      {
        path: '/systemManagement',
        name: 'SystemManagement',
        component: () => import('@/views/systemManagement'),
        redirect: '/systemManagement/userManagement',
        meta: {
          breadcrumb: '系统设置'
        },
        children: [
          // 用户管理
          {
            path: '/systemManagement/userManagement',
            name: 'UserManagement',
            component: () => import('@/views/systemManagement/userManagement'),
            meta: {
              breadcrumb: '用户管理'
            }
          },
          // 组织管理
          {
            path: '/systemManagement/organizationManagement',
            name: 'OrganizationManagement',
            component: () => import('@/views/systemManagement/organizationManagement'),
            meta: {
              breadcrumb: '组织管理'
            }
          },
          // 职位管理
          {
            path: '/systemManagement/positionManagement',
            name: 'PositionManagement',
            component: () => import('@/views/systemManagement/positionManagement'),
            meta: {
              breadcrumb: '职位管理'
            }
          },
          // 日志管理
          {
            path: '/systemManagement/logManagement',
            name: 'LogManagement',
            component: () => import('@/views/systemManagement/logManagement'),
            meta: {
              breadcrumb: '日志管理'
            }
          },
          // 集团管理
          {
            path: '/systemManagement/group',
            name: 'Group',
            component: () => import('@/views/systemManagement/group'),
            meta: {
              breadcrumb: '集团管理'
            }
          }
        ]
      }
    ]
  },
  // 登录界面
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: {
      breadcrumb: '登录界面'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
