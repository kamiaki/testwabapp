const MainPage = () => import('/@/views/mainPage/MainPage.vue')
import routerContentPage from '/@/router/contentPage/contentPage'


const routerMainPage = [
    // 主页
    {
        path: '/MainPage',
        name: 'MainPage',
        component: MainPage,
        redirect: '/MainPage/DialTestPage',
        children: [
            ...routerContentPage
        ]
    }
]

export default routerMainPage
