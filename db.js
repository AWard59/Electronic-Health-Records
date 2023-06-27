const mysql = require('mysql')
const pool = mysql.createPool({
	host: '<put your your host>',
	user: '<put your username>',
	password: '<put your password>',
	database: '<put your database name>',
})

pool.getConnection((error, connection) => {
	if (error) {
		console.error('Error connecting to MySQL:', error)
		return
	}
	console.log('Connected to MySQL')
	connection.release()
})

module.exports = pool
