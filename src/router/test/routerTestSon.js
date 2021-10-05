const Test1 = () => import('/@/views/test/Test1.vue')
const Test2 = () => import('/@/views/test/Test2.vue')

const routerTestSon = [
  {
    path: 'Test1',
    name: 'Test1',
    component: Test1,
    meta: {
      needAuthority: false
    }
  },
  {
    path: 'Test2',
    name: 'Test2',
    component: Test2,
    meta: {
      needAuthority: false
    }
  }
]

export default routerTestSon
