const MainPage = () => import('/@/views/mainPage/MainPage.vue')
import routerContentPage from '../contentPage/contentPage'


const routerMainPage = [
    // 主页
    {
        path: '/MainPage',
        name: 'MainPage',
        component: MainPage,
        redirect: '/MainPage/QueryPage',
        children: [
            ...routerContentPage
        ]
    }
]

export default routerMainPage
