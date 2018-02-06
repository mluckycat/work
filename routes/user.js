// 0,加载 express
const express = require('express') 

const userController = require('../controllers/user')

// 1，创建路由
const router= express.Router()

// 2,配置路由表
router
    .get('/signin',userController.showSignin)
    .post('/signin',userController.signin)
    .get('/signup',userController.showSignup)
    .post('/signup',userController.signup)
    .get('/signout',userController.signout)

 // 3,导出路由容器
 module.exports = router 