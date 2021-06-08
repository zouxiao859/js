//引入
const express=require('express')
//应用对象
const app=express
//中间件
// app.use(express.static('server'))
app.use(express.urlencoded({extended:true}))

//路由
app.get('/test',(req,res)=>{
const {callback}=req.body
let arr=[1,2,3]
setTimeout(()=>{
    res.send(`${callback}(${JSON.stringify(arr)})`)
},2000)
})
app.post('/test',(req,res)=>{
    res.send(req.body)
})

app.listen(5000,(err)=>{
    if(err) console.log('服务器连接失败',err)
    else console.log('服务器连接成功')
})

