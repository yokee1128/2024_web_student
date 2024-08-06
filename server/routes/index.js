const express = require('express');
const router = express();
const db = require('../config/db');

// http://localhost:4000/ 으로 접속 시 응답메시지 출력

//학년, 반 가져오기
router.get('/getgrade',(req,res)=>{
  const query = `
      SELECT  class_grade as code, class_grade as name
        FROM  CLASS_TEST
       group by class_grade
  `;
  db.query(query, (err, data) => {
    if(!err) res.send({ grade : data});
    else res.send(err);
})  
})

router.get('/getclass',(req,res)=>{
  const pickgrade = req.query.pickgrade;
  const query = `
      SELECT class_unit as code, class_unit as name
        FROM CLASS_TEST
       where class_grade = ?
       group by class_unit
  `;
  db.query(query, pickgrade,(err, data) => {
    if(!err) res.send({ class : data});
    else res.send(err);
})  
})

//출석현황
router.get('/attendancelist', (req,res) => {
    const {pickdt, pickgrade, pickclass} = req.query;

  // 필수 파라미터 검증
  if (!pickdt || !pickgrade || !pickclass) {
    return res.status(400).send({ error: 'Missing required parameters: pickdt, pickgrade, or pickclass' });
  }

 // console.log(`${pickdt}_${pickgrade}_${pickclass}`); // 콘솔에 파라미터 로그 출력

    const query = `
    SELECT 
      A.STUDENT_ID, 
      A.STUDENT_NAME, 
      A.STUDENT_PHONE, 
      IF(B.ATTENDANCE_YN = 'Y', '출석', '미출석') AS Attendance
    FROM 
      student_test A
    LEFT JOIN 
      attendance_test B 
    ON 
      A.student_id = B.student_id 
    AND 
      B.attendance_dt = ?
    WHERE 
      A.class_id = (
        SELECT class_id
        FROM CLASS_TEST
        WHERE class_grade = ?
        AND class_unit = ?
      )
  `;
    db.query(query, [pickdt, pickgrade, pickclass], async (err, data) => {
        if(!err) res.send({ students : data});
        else res.send(err);
    })
})
 
//스케줄
router.get('/schedule_all', (req, res) => {
   const pickdt = req.query.pickdt;

  // 필수 파라미터 검증
  if (!pickdt) {
    return res.status(400).send({ error: 'Missing required parameters pickdt' });
  }

  const query = `
  SELECT  A.SCHEDULE_DT
  ,A.SCHEDULE_NO
  ,A.SCHEDULE_TITLE
  ,A.SCHEDULE_CONTENT
  ,@rownum:=@rownum+1 as rownum
FROM SCHEDULE_TEST A, (select @ROWNUM := 0) B
WHERE A.SCHEDULE_DT = ?
ORDER BY A.SCHEDULE_NO
  `;

  db.query(query, [pickdt], (err, data) => {
    if(!err) res.send({schedule : data});
    else res.send(err);
  })
})

//차트
router.get('/attendancechart', (req, res) => {
  const {pickdt, pickgrade, pickclass} = req.query;

  if(!pickdt || !pickgrade || !pickclass){
    return res.status(400).send({error: 'Missing required paramters'});
  }

  const query = `
    select  SUM(case when B.attendance_yn = 'Y' then 1 else 0 END) as attendancecnt
            ,COUNT(*) as total
      from STUDENT_TEST A
      left join attendance_test B 
        on (A.student_id = B.student_id and  B.attendance_dt = ?)
     where CLASS_ID = (select class_id
                         from CLASS_TEST
                        where class_grade = ?
                          and class_unit  = ?)
  `;
  
  db.query(query, [pickdt, pickgrade, pickclass], (err, data) => {
    if(!err) res.send({chart : data});
    else res.send(err);
  })
})

 
module.exports = router;