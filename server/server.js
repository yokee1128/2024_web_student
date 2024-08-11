//express 모듈 호출
const express = require('express');
const cors = require('cors');
const app = express();
const api = require('./routes/index');

// CORS 설정
app.use(cors());

// api 처리는 './routes/index'에서 일괄처리
app.use('/api', api);

// server port 4000 할당
// 클라이언트와 다른 번호로 충돌나지 않도록
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`);
});

// const mysql = require("mysql2/promise");

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'qwer1234',
//     database: 'attendance',
// });

// const executeQuery = async(query, params = []) => {
//     let connection;
//     try{
//         connection = await pool.getConnection();
//         const [results] = await connection.execute(query, params);
//         console.log(results);
//         return results;
//     }catch(e){
//         console.log('Error executing query : ', e);
//         throw e;
//     }finally{
//         if(connection) {
//             connection.release();
//         }
//     }
// }

// const express = require('express');
// const bodyParser = require("body-parser");
// const app = express();
// app.listen(4000); // localhost:3000
// app.use(bodyParser.json());


// // 학생목록 전부 가져오기
// const studentList = async () => 
//     await executeQuery("SELECT * FROM students");

// // 학년 반 정보 가져오기
// const classList = async () =>
//     await executeQuery("SELECT * FROM class");

// // 학생목록 전부 가져오기
// app.get("/attendance_check/students", async (req,res) => 
//     res.json(await studentList())
// );

// // 학년 반 정보 가져오기
// app.get("/attendance_check/classList", async (req,res) => 
//     res.json(await classList())
// );
