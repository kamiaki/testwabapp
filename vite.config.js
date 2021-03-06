const {resolve} = require('path')

module.exports = {
    hostname: 'localhost',//允许本机
    port: 8088,//设置端口
    // 反向代理
    proxy: {
        '/test': {
            target: 'http://localhost:80',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/test': '/test'
            }
        }
    },
    alias: {
        '/@/': resolve(__dirname, 'src')
    }
}

