const tf = [
  {prop: 'type',
    label: '网络类型',
    sortable: false,
    width: '100',
    formatter: (row, column) => {
      return row.type
    }
  },{
    prop: 'state',
    label: '告警信息',
    sortable: false,
    width: '100',
    formatter: (row, column) => {
      let stateStr = '恢复'
      if (1 === row.state) stateStr = '异常'
      return stateStr
    }
  },
  {
    prop: 'targetIp',
    label: '目标地址',
    sortable: false,
    width: '100',
    formatter: (row, column) => {
      return row.targetIp
    }
  },{
    prop: 'time',
    label: '告警时间',
    sortable: true,
    width: '100',
    formatter: (row, column) => {
      return row.time
    }
  }
]

export default {tf}
export {tf}
