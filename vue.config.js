module.exports = {
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8088,
    },
    externals: {
        'vue': 'Vue'
    }
};