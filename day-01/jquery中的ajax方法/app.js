//引入
const express = require('express')

const app = express()
//中间件
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
//路由
app.get('/test', (req, res) => {
    setTimeout(() => {
        res.send(req.query)
    }, 2000)
})
app.post('/test', (req, res) => {
    setTimeout(() => {
        res.send(req.body)
    }, 2000)
})
//服务器
app.listen(5000, (err) => {
    if (err) console.log('连接失败', err)
    else console.log('连接成功')
})
