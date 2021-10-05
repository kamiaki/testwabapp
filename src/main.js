import {createApp} from 'vue'
import App from './App.vue'
import './index.css'

import routerIndex from './router/routerValues'  // 引入路由对象实例
import vuexValues from './vuex/vuexValues'  // 引入vuex
import 'animate.css'

import Vant from 'vant'
import 'vant/lib/index.css'
import { ConfigProvider } from 'vant'

const app = createApp(App)
app.use(routerIndex)
app.use(vuexValues)
app.use(Vant)
app.use(ConfigProvider)

app.mount('#aki_app')