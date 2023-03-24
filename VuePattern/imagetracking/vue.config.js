const {
    defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})
module.exports = {
    devServer: {
        open: false, // 编译完成是否打开网页
        host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0 代表可以被外界访问
        port: 8080, // 访问端口
        hot: true, // 开启热加载
        proxy: {
            '/': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                // target: 'http://159.75.232.73:9000',
                target: '',
                // 允许跨域
                changeOrigin: true,
                ws: false,
                secure: false,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    },
    // 解决打包部署后，js文件读取路径问题
    publicPath: "./",
}