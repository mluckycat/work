// 路由模块

// 加载 express
const express = require('express')

const userController = require('./controllers/user')
const topicController = require('./controllers/topic')
const commentController = require('./controllers/comment')
const indexController = require('./controllers/index')

// 1,创建路由
const router = express.Router()

// 2,配置路由表

// 首页相关
router
   .get('/',indexController.showIndex)
//用户相关
router
   .get('/signin',userController.showSignin)
   .post('/signin',userController.signin)
   .get('/signup',userController.showSignup)
   .post('/signup',userController.signup)
   .get('/signout',userController.signout)

// 话题相关
router
   .get('/topic/create',topicController.showCreate)
   .post('/topic/create',topicController.create)
   .get('/topic/:topicId',topicController.showDetail)
   .get('/topic/:topicID/edit',topicController.showEdit)
   .post('/topic/:topicID/edit',topicController.edit)
   .post('/topic/:topicID/delete',topicController.delete)

//  评论相关

// 3.导出路由
// 4.app.js
//    加载路由模块到路由容器
//    app.use(router)
  module.exports = router
