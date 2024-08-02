import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';

type AttendanceListType = {
  pickDt: string,
  pickGrade?: string,
  pickClass?: string,
}

type dataType = {
  STUDENT_ID: number,
  STUDENT_NAME: string,
  STUDENT_PHONE: string,
  Attendance: string,
}

const AttendanceList = ({ pickDt, pickGrade, pickClass }: AttendanceListType) => {
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    if (pickDt && pickGrade && pickClass) {
        axios
          .get("http://localhost:4000/api/attendancelist", {
            params: {
              pickdt: pickDt,
              pickgrade: pickGrade,
              pickclass: pickClass,
            }
          })
          .then((res) => {
            setData(res.data.students);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }, [pickDt, pickGrade, pickClass]);

  const columns: GridColDef[] = [
    { field: 'STUDENT_NAME', headerName: '이름', width: 100 },
    { field: 'STUDENT_PHONE', headerName: '연락처', width: 150 },
    { field: 'Attendance', headerName: '출석', width: 80 },
  ];

  const rows = data.map((item) => ({
    id: item.STUDENT_ID, // 고유한 식별자로 student_id를 사용
    STUDENT_NAME: item.STUDENT_NAME,
    STUDENT_PHONE: item.STUDENT_PHONE,
    Attendance: item.Attendance,
  }));

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} getRowId={(row) => row.id} />
    </div>
  );
}

export default AttendanceList;
