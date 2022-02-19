const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
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
        },
        plugins: [
            AutoImport({
              resolvers: [ElementPlusResolver()],
            }),
            Components({
              resolvers: [ElementPlusResolver()],
            }),
          ]
    },
};