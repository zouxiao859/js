//引入
const express = require('express')
const app = express()
//中间件
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
//路由
app.post('/test', (req, res) => {
    const { username } = req.body
    let arr = ['ergou', 'goudan', '250', 'shiabi']

    let plp = arr.includes(username)

    res.end(
        plp ? { status: 'no', message: '用户名不可用' } : { status: 'ok', massage: '用户名可用' }
    )
})
//服务器
app.listen(5000, (err) => {
    if (err) console.log('连接失败', err)
    else console.log('连接成功')
})