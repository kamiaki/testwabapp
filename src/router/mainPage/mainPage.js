const MainPage = () => import('/@/views/mainPage/MainPage.vue')

const routerMainPage = [
  // 主页
  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage
  }
]

export default routerMainPage
