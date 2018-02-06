// const topic = require('../models/topic')
exports.showCreate=(req,res,next)=>{
  res.render('topic/create.html',{

  })
}
exports.create=(req,res,next)=>{
  res.send('post create')
}
exports.showDetail=(req,res,next)=>{
	res.send('get showDetail')
}
exports.showEdit=(req,res,next)=>{
	res.send('get showEdit')
}
exports.edit=(req,res,next)=>{
	res.send('post edit')
}
exports.delete=(req,res,next)=>{
	res.send('post delete')
}