//路由模块

// 加载express
const express = require('express')

const indexController = require('../controllers/index')

// 1,创建路由
const router = express.Router()

// 2,配置路由表
router
    .get('/',indexController.showIndex)

// 3,导出路由容器
module.exports = router

