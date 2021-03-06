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
      return row.state
    }
  },
  {
    prop: 'targetIp',
    label: '目标地址',
    sortable: false,
    width: '150',
    formatter: (row, column) => {
      return row.targetIp
    }
  },{
    prop: 'time',
    label: '告警时间',
    sortable: true,
    width: '200',
    formatter: (row, column) => {
      return row.time
    }
  }
]

export default {tf}
export {tf}
