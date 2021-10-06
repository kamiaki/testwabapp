import routerTestSon from '/@/router/test/routerTestSon'

const TestMain = () => import('/@/views/test/TestMain.vue')

const routerTestMain = [
  // 主页
  {
    path: '/TestMain',
    name: 'TestMain',
    component: TestMain,
    redirect: '/TestMain/Test1',
    meta: {
      needAuthority: false
    },
    children: [
      ...routerTestSon
    ]
  }
]

export default routerTestMain
