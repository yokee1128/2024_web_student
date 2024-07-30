const mysql   = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: '1111',
    database: 'attendance'
})

db.connect(err => {
    if (err) {
        console.error("error connecting to the database:", err);
        return;
    }
    console.log("connected to the database");
})

module.exports = db;