const mysql = require('mysql');
require('dotenv').config()
const db_connection = mysql.createConnection({
    host:process.host,
    user:process.env.db_user,
    password:process.db_password,
    database:process.env.db_name
})
db_connection.connect((err)=>{
    if(err) return console.log(err)
    console.log('db connected')

})
module.exports= db_connection