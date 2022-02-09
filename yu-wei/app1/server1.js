const express = require('express')

const app = express()


app.use(express.static('./app1'))

app.get('*', function(req, res , next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', "X-Requested-With")
  res.header('Access-Control-Allow-Headres', 'Content-Type')
  next()
})


app.listen(9001,() => {
    console.log('base app1 at port 9001');
})