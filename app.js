const express = require('express')
const app = express()

const router = require('./router')
//挂载路由容器到app应用程序中使路由生效 
app.use(router)
app.listen(3000,()=>console.log('running...'))
