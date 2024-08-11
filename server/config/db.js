const mysql = require('mysql');
 
const db = mysql.createPool({
    host : 'localhost',
<<<<<<< HEAD
    user : 'root', //'test',
    password : 'qwer1234', //'1111',
=======
    user : 'test',
    password : '1111',
>>>>>>> c1e7ea0f25383e5a62f8022251d09efc65511e20
    database : 'attendance'
});
 
module.exports = db;