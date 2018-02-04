const mysql = require('mysql')
const {dbConfig} = require('../config')

const pool = mysql.createPool(dbConfig)

exports.query=(...args)=>{
  	//从数组中弹出最后一个元素 callback 回调函数
  	const callback = args.pop()

  	pool.getConnection((err,connection)=>{
  		if(err){
  			return callback(err)
  		}
  		connection.query(...args,function(...results){
  			// 释放回连接池
  			connection.release()
  			callback(...results)
  		})
  	})
}