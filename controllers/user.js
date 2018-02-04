exports.showSignin=(req,res)=>{
  res.send('get signin')
}
exports.signin=(req,res)=>{
   res.send('post signin') 	
}
exports.showSignup=(req,res)=>{
	 res.send('get showSignup')
}
exports.signup=(req,res)=>{
	 res.send('post signup')
}
exports.signout=(req,res)=>{
	 res.send('post signout')
}