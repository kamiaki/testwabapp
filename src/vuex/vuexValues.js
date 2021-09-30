import { createStore } from 'vuex'
import vuexTest from './vuexTest'

// 测试提交gitee1
const s = createStore({
  state: {
    isShowLoginWindow: false,
    user: {
      isLogin: false,
      userName: '' // 权限名
    },
    enumUserName: {
      administrator: '超级管理员',
      admin: '管理员',
      user: '用户'
    },
    // // 湖南
    bigTitle: '多源雷电监测数据处理应用平台',
    provinceCode: '430000',
    provinceAllCode: '',
    isTest: false, // 开启测试数据
  },
  mutations: {},
  modules: {
    // 界面1 主页
    vuexTest: vuexTest
  }
})

export default s