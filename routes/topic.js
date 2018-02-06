//路由模块

// 0,加载express
const express = require('express')

const topicController = require('../controllers/topic')

// 1,创建路由
 const router = express.Router()

 // 话题相关
 router
     .get('/create',topicController.showCreate)
     .post('/create',topicController.create)
     .get('/:topicId',topicController.showDetail)
     .get('/:topicId/edit',topicController.showEdit)
     .post('/:topicId/edit',topicController.edit)
     .post('/:topicId/delete',topicController.delete)

 // 导出路由函数
    module.exports = router