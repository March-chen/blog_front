module.exports = {
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8088,
    },
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'element-plus': 'ElementPlus'
        }
    },
};