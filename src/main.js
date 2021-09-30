import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import routerIndex from './router/routerValues'  // 引入路由对象实例

const app = createApp(App)
app.use(routerIndex)
app.mount('#app')