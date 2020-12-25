import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/resst.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

// 引入全局矢量图
import '@/assets/iconfont/iconfont.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
