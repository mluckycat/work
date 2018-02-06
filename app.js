const express = require('express')
const bodyParser= require('body-parser')
const session = require('express-session')
const app = express()

// const router = require('./router')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const topicRouter = require('./routes/topic')
//开发静态资源
app.use('/node_modules',express.static('./node_modules/'))
app.use('/public',express.static('./public/'))

// 设置模板引擎
// 这里把art 改为html
app.engine('html',require('express-art-template'))

// 配置body-parser 解析表单请求题
app.use(bodyParser.urlencoded({extended:true}))

// 该插件会req请求对象添加一个成员 req.session默认是一个对象
// 这是最简单的配置方式 
app.use(session({
	// 配置加密字符串，它会再原有加密的基础之上和这个字符串拼接去加密
	// 目的是为了增加安全性 防止客户端恶意伪造
	secret:'mmm',
	resave:false,
	saveUninitialized:true
}))


//挂载路由容器到app应用程序中使路由生效 
// app.use(router)
app.use(indexRouter)
app.use(userRouter)
app.use(topicRouter)

app.listen(3000,()=>console.log('running...'))
