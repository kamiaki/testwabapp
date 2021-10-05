const DialTestPage = () => import('/@/views/dialTest/DialTestPage.vue')
const QueryPage = () => import('/@/views/query/QueryPage.vue')

const routerContentPage = [
    // 拨测页面
    {
        path: 'DialTestPage',
        name: 'DialTestPage',
        component: DialTestPage
    },
    // 查询页面
    {
        path: 'QueryPage',
        name: 'QueryPage',
        component: QueryPage
    }
]

export default routerContentPage
