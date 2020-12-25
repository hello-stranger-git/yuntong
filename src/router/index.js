import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 主界面
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout')
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
