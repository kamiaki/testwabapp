import routerTestMain from '/@/router/test/routerTestMain'
import routerMainPage from '/@/router/mainPage/mainPage'
import {createRouter, createWebHistory, createWebHashHistory} from "vue-router"

// 主路由配置
const routes = [
    {
        path: '/',
        name: '',
        redirect: '/MainPage'
    },
    ...routerTestMain,
    ...routerMainPage
]


// 3. 创建路由实例
const router = createRouter({
    // 4. 采用hash 模式 不怕刷新 url脏 推荐
    history: createWebHashHistory(),
    // 采用 history 模式 怕刷新 url干净
    // history: createWebHistory(),
    routes, //使用上方定义的路由配置
})

// 把router暴露除去
export default router
