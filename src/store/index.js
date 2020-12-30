import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asideBgc: '#38414a', // 默认颜色
    previewBgc: '', // 预览颜色
    logo: '',
    bgPic: '',
    btnBgColor: '#409EFF', // 页面按钮颜色
    btnPreviewColor: ''
  },
  mutations: {
    setAsideBgc: (state, color) => { state.asideBgc = color },
    setPreviewBgc: (state, color) => { state.previewBgc = color },
    clearPreviewBgc: state => { state.previewBgc = '' },
    setLogo: (state, path) => { state.logo = path },
    setBgPic: (state, path) => { state.bgPic = path },
    setBtnPreviewColor: (state, color) => { state.btnPreviewColor = color },
    setBtnBgColor: (state, color) => { state.btnBgColor = state.btnPreviewColor }
  },
  actions: {
  },
  getters: {
    getAsideBgc: state => state.asideBgc,
    getPreviewBgc: state => state.previewBgc,
    getLogo: state => state.logo,
    getBgPic: state => state.bgPic
  },
  modules: {
  }
})
