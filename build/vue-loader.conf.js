var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
    /* productionSourceMap 资源映射 */
module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction ?
            config.build.productionSourceMap : config.dev.cssSourceMap,
        extract: isProduction
    }),
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}