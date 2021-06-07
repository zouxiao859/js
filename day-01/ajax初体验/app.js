//引入express
const express = require('express')

const app = express();

//中间件
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//路由
app.get('/text', (req, res) => {
    setTimeout(() => {
        req.send('get--')
    },2000)
})
app.post('/text',(req,res)=>{
    setTimeout(()=>{
        console.log(req.body)
        req.send('post--')
    },2000)
})
app.listen(5000,()=>{
    console.log('ok')
})