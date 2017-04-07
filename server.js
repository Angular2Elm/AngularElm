// var config = require('./config/proxyConfig')
var config = {
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        host: '0.0.0.0',
        port: 8088,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        context: [ //代理路径
            '/shopping',
            '/ugc',
            '/v1',
            '/v2',
            '/v3',
            '/v4',
            '/bos',
            '/member',
            '/promotion',
            '/eus',
        ],
        proxypath: 'https://mainsite-restapi.ele.me'
    }
}


if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var proxyMiddleware = require('http-proxy-middleware')
var port = process.env.PORT || config.dev.port
var server = express()

var context = config.dev.context
var proxypath = config.dev.proxypath

var options = {
    target: proxypath,
    changeOrigin: true,
}
if (context.length) {
    server.use(proxyMiddleware(context, options))
}

server.use(proxyMiddleware('/payapi', {
    target: 'https://pay.ele.me',
    changeOrigin: true,
}))
server.use(proxyMiddleware('/m.ele.me@json', {
    target: 'https://crayfish.elemecdn.com',
    changeOrigin: true,
}))

// serve pure static assets
// var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// server.use(staticPath, express.static('./static'))

module.exports = server.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    // when env is testing, don't need open it
    // if (process.env.NODE_ENV !== 'testing') {
    //     opn(uri)
    // }
})