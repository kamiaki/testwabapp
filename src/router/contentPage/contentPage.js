const DialTestPage = () => import('/@/views/dialTest/DialTestPage.vue')
const AutoTestPage = () => import('/@/views/dialTest/autoTest/AutoTestPage.vue')
const ManualTestPage = () => import('/@/views/dialTest/autoTest/ManualTestPage.vue')
const QueryPage = () => import('/@/views/dialTest/query/QueryPage.vue')
const QueryAlertPage = () => import('/@/views/dialTest/query/queryAlert/QueryAlertPage.vue')
const QueryTestPage = () => import('/@/views/dialTest/query/queryTest/QueryTestPage.vue')

const routerContentPage = [
    // 拨测页面
    {
        path: '/DialTestPage',
        name: 'DialTestPage',
        component: DialTestPage,
        // redirect: '/MainPage/DialTestPage/AutoTestPage',
        children: [
            {
                path: '/AutoTestPage',
                name: 'AutoTestPage',
                component: AutoTestPage
            }, {
                path: '/ManualTestPage',
                name: 'ManualTestPage',
                component: ManualTestPage
            }
        ]
    },
    // 查询页面
    {
        path: '/QueryPage',
        name: 'QueryPage',
        component: QueryPage,
        redirect: '/MainPage/QueryPage/QueryTestPage',
        children: [
            {
                path: '/QueryTestPage',
                name: 'QueryTestPage',
                component: QueryTestPage
            },
            {
                path: '/QueryAlertPage',
                name: 'QueryAlertPage',
                component: QueryAlertPage
            }
        ]
    }
]

export default routerContentPage
