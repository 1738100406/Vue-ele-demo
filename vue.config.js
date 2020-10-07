module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        // proxy: {
        //     // 配置跨域
        //     '/api': {
        //         target: 'https://eleme3-peak-04176.herokuapp.com/api/',
        //         ws: true,
        //         changOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
        before: app => { }
    }
};
