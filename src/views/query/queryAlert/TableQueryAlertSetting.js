const tf = [
  {
    prop: 'name',
    label: '网络类型',
    sortable: false,
    width: '25%',
    formatter: (row, column) => {
      return row.name
    }
  },  {
    prop: 'max',
    label: '最大值(ms)',
    sortable: false,
    width: '25%',
    formatter: (row, column) => {
      return row.max
    }
  },  {
    prop: 'min',
    label: '最小值(ms)',
    sortable: false,
    width: '25%',
    formatter: (row, column) => {
      return row.min
    }
  },  {
    prop: 'level',
    label: '最小值(ms)',
    sortable: false,
    width: '25%',
    formatter: (row, column) => {
      return row.level
    }
  },
]

export default {tf}
export {tf}
