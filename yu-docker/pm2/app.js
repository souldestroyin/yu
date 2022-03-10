const koa = require('koa')

const app = new koa()

app.use(ctx => {
    ctx.body = 'hello node'
})

app.listen(3000, () => {
    console.log('app start at 3000');
})