const {query} = require('../utilities/db-helper')

exports.findByEmail = (email, callback) => {
  query('SELECT * FROM `users` WHERE `email`=?', [email], (err, results) => {
    if (err) {
      return callback(err)
    }
    callback(null, results[0])
  })
}

exports.findByNickname = (nickname, callback) => {
  query('SELECT * FROM `users` WHERE `nickname`=?', [nickname], (err, results) => {
    if (err) {
      return callback(err)
    }
    callback(null, results[0])
  })
}

exports.save = (user, callback) => {
  user.createdAt = null // 创建时间给一个 null ，数据库会自动生成当前时间戳
  const sqlStr = 'INSERT INTO `users` SET ?'
  query(sqlStr, user, (err, results) => {
    if (err) {
      return callback(err)
    }
    callback(null, results)
  })
}
