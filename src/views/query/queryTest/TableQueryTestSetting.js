const tf = [
    {
        prop: 'ip',
        label: 'IP地址',
        sortable: false,
        width: '150',
        formatter: (row, column) => {
            return row.ip
        }
    }, {
        prop: 'time',
        label: '时间',
        sortable: false,
        width: '180',
        formatter: (row, column) => {
            return row.time
        }
    }, {
        prop: 'totalTime',
        label: '总耗时(ms)',
        sortable: false,
        width: '100',
        formatter: (row, column) => {
            return row.totalTime
        }
    }, {
        prop: 'state',
        label: '状态',
        sortable: false,
        width: '100',
        formatter: (row, column) => {
            let stateStr = '成功'
            if ('0' === String(row.state)) stateStr = '失败'
            return stateStr
        }
    }, {
        prop: 'type',
        label: '网络类型',
        sortable: false,
        width: '100',
        formatter: (row, column) => {
            return row.type
        }
    }, {
        prop: 'targetIp',
        label: '目标地址',
        sortable: false,
        width: '150',
        formatter: (row, column) => {
            return row.targetIp
        }
    }, {
        prop: 'successCount',
        label: '成功数',
        sortable: false,
        width: '100',
        formatter: (row, column) => {
            return row.successCount
        }
    }, {
        prop: 'failCount',
        label: '失败数',
        sortable: false,
        width: '100',
        formatter: (row, column) => {
            return row.failCount
        }
    },
]

export default {tf}
export {tf}
