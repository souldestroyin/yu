const http = require('http')

const server = http.createServer((req, res) => {
    Math.random() > 0.8 ? a() : '2'

    res.end('hello')
})

if(!module.parent) {
    server.listen(3000, () => {
        console.log('server start at 3000');
    })
} else {
    module.exports = server
}