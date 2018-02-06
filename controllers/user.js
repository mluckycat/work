const user = require('../models/user')
const md5 = require('blueimp-md5')

exports.showSignin=(req,res,next)=>{
  res.render('signin.html')
}
exports.signin=(req,res,next)=>{
   // 获取表单POST提交数据
   // 普通数据验证
   // 业务数据验证
   // 验证通过，使用session存储会话标识
   // 发送响应
   const body = req.body
 
   user.findByEmail(body.email,(err,ret)=>{
   	if(err){
   		// return res.status(500).json({
   		// 	error:err.message
   		// })
   		// 传参的next方法会自动向后匹配到具有4个参数的应用程序处理级别中间
   	  return next(err)
   	}
   	// 如果用户不存在
   	if(!ret){
   		return res.status(200).json({
   			code:1,
   			message:'user not exists'
   		})
   	}
   	// 校验密码是否正确
   	if(md5(body.password)!==ret.password){
   		return res.status(200).json({
   			code:2,
   			message:'password invalid'
   		})
   	}
   	// 使用session储存用户登录的数据
    req.session.user = ret

    res.status(200).json({
    	code:0,
    	message:'success'
    })
   })
}
exports.showSignup=(req,res,next)=>{
	res.render('signup.html')
}
exports.signup=(req,res,next)=>{
	// 接收表单提交的数据 
	// 配置body-parser中间件解析表单POST请求体
	// 验证数据的有效性
	// 普通数据的校验
	// 业务数据的校验
	// 发送验证通过  持久化保存到数据库
	const body = req.body
	// 校验邮箱是否被占用
	user.findByEmail(body.email,(err,ret)=>{
		if(err){

			return next(err)
		}
		if(ret){
			return res.status(200).json({
				code:1,
				message:'email exists'
			})
		}
	})
	user.findByNickname(body.nickname,(err,ret)=>{
		if(err){
			return next(err)
		}
		if(ret){
			return res.status(200).json({
				code:2,
				message:'nickname exists'
			})
		}
	})
	// md5加密处理
	body.password = md5(body.password)
	// 持久化存储用户信息
	user.save(body,(err,results)=>{
		if(err){
			return next(err)
		}
		// 注册即登录 使用session保存登录状态
		req.session.user={
			...body,
			id:results.insertId
		}

		res.status(200).json({
			code:0,
			message:'success'
		})
	})

}
exports.signout=(req,res,next)=>{
	// 清除session
	delete req.session.user

	// 重定向登录页
	res.redirect('/signin')
}