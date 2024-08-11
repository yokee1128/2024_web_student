const mysql = require('mysql');
 
const db = mysql.createPool({
    host : 'localhost',
    user : 'root', //'test',
    password : 'qwer1234', //'1111',
    database : 'attendance'
});
 
module.exports = db;