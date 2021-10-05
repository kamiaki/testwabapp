import { createStore } from 'vuex'
import vuexTest from './vuexTest'

const s = createStore({
  state: {
    isTest: false, // 开启测试数据
  },
  mutations: {},
  modules: {
    // 测试
    vuexTest: vuexTest
  }
})

export default s