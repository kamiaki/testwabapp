import {createStore} from 'vuex'
import vuexTest from './vuexTest'
import vuexMain from './vuexMain'

const s = createStore({
    state: {
        isTest: false, // 开启测试数据
    },
    mutations: {},
    modules: {
        // 测试
        vuexTest,
        vuexMain
    }
})

export default s