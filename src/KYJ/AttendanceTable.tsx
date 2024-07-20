import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const today = new Date();
const strToday = today.toString();
const lastDay = parseInt(today.getDate().toString());

// 요일 구하기
const week = today.getDay();

// function days02(){
//     let ret;

//     for (let i = 1; i <= lastDay; i++){
        
//     }
//     arr = {
//         id, 
//         name, 
//     };
//     return arr;
// }

function createData(
  id: string,
  name: string,
  day1: string,
  day2: string,
  day3: string,
  day4: string,
  day5: string,
  day6: string,
  day7: string,
  day8: string,
  day9: string,
  day10: string,
  day11: string,
  day12: string,
  day13: string,
  day14: string,
  day15: string,
  day16: string,
  day17: string,
  day18: string,
  day19: string,
  day20: string,
  day21: string,
  day22: string,
  day23: string,
  day24: string,
  day25: string,
  day26: string,
  day27: string,
  day28: string,
  day29: string,
  day30: string,
  day31: string,
) {
    // if(lastDay)
  return { id, name, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14, day15, day16, day17, day18, day19, day20, day21, day22, day23, day24, day25, day26, day27, day28, day29, day30, day31 };
}

const rows = [
  createData('20240001', '여기는', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출'),
  createData('20240002', '데이터', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출'),
  createData('20240003', '베이스', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출'),
  createData('20240004', '값을가', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출'),
  createData('20240006', '져와야', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출', '출'),
];


const tormattedDate = `${today.getFullYear()}년 ${today.getMonth()+1}월 1일 ~ ${today.getDate()}일`;


function days(){
    let arr = [];
    for (let i = 1; i <= lastDay; i++){
        arr.push(
            <TableCell align="center">{i}</TableCell>
        )
    }

    return arr;
}

let items = [];
for(let i = 1; i <= lastDay; i++){
    items.push(
        'day'+i
    )
}
const itm = items;



const AttendanceTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
               <TableCell align="center" colSpan={lastDay+2}>{tormattedDate}</TableCell> 
            </TableRow>
          <TableRow>
            <TableCell align="center">학번</TableCell>
            <TableCell align="center" width="100">이름</TableCell>
            {days()}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" align="center">
                    {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align ="center">{row.day1}</TableCell>
                <TableCell align ="center">{row.day2}</TableCell>
                <TableCell align ="center">{row.day3}</TableCell>
                <TableCell align ="center">{row.day4}</TableCell>
                <TableCell align ="center">{row.day5}</TableCell>
                <TableCell align ="center">{row.day6}</TableCell>
                <TableCell align ="center">{row.day7}</TableCell>
                <TableCell align ="center">{row.day8}</TableCell>
                <TableCell align ="center">{row.day9}</TableCell>
                <TableCell align ="center">{row.day10}</TableCell>
                <TableCell align ="center">{row.day11}</TableCell>
                <TableCell align ="center">{row.day12}</TableCell>
                <TableCell align ="center">{row.day13}</TableCell>
                <TableCell align ="center">{row.day14}</TableCell>
                <TableCell align ="center">{row.day15}</TableCell>
                <TableCell align ="center">{row.day16}</TableCell>
                <TableCell align ="center">{row.day17}</TableCell>
                <TableCell align ="center">{row.day18}</TableCell>
                <TableCell align ="center">{row.day19}</TableCell>
                <TableCell align ="center">{row.day20}</TableCell>
                <TableCell align ="center">{row.day21}</TableCell>
                <TableCell align ="center">{row.day22}</TableCell>
                <TableCell align ="center">{row.day23}</TableCell>
                <TableCell align ="center">{row.day24}</TableCell>
                <TableCell align ="center">{row.day25}</TableCell>
                <TableCell align ="center">{row.day26}</TableCell>
                <TableCell align ="center">{row.day27}</TableCell>
                <TableCell align ="center">{row.day28}</TableCell>
                <TableCell align ="center">{row.day29}</TableCell>
                <TableCell align ="center">{row.day30}</TableCell>
                <TableCell align ="center">{row.day31}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AttendanceTable;