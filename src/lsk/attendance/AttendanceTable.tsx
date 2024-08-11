//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';


const today = new Date();
const strToday = today.toString();
const lastDay = parseInt(today.getDate().toString());

// 요일 구하기
const week = today.getDay();

function createData(
  id: string,
  name: string
) {
  const today = new Date().getDate();

  const days = Array.from(
    { length: today }, (_, index) => `${String(index + 1)}일`
  );
  // 배열을 개별의 문자열로 분리
  //const days[] = dayDate.split(",")
  return { 
    id, 
    name,
    days//: days.join("") // 배열을 하나의 문자열로 결합
  };
}
function TableComponent() {
  const data = createData("1", "Sample");

  return (
    <table>
      <tr>
        {data.days.map((day, index) => (
          <td key={index} dangerouslySetInnerHTML={{ __html: day }} />
        ))}
      </tr>
    </table>
  );
}

const tormattedDate = `${today.getFullYear()}년 ${today.getMonth()+1}월 1일 ~ ${today.getDate()}일`;

const AttendanceTable = () => {
  const data = createData('ID', 'NAME');
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
               <TableCell align='center' colSpan={lastDay+2}>{tormattedDate}</TableCell> 
            </TableRow>
          <TableRow>
            <TableCell align='center'>{data.id}</TableCell>
            <TableCell align='center'>{data.name}</TableCell>
            {data.days.map((day, index) => (
              <TableCell key={index} align='center'>
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            {/* <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align='center'>
                  {row.id}
                </TableCell>
                <TableCell align='center'>
                  {row.name}
                </TableCell>
                <TableCell align='center'>
                  {row.days}
                </TableCell>
            </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AttendanceTable;