import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import axios from 'axios';
import {useEffect, useState} from 'react';

type AttendanceScheduleType = {
  pickDt : string,
}

type dataType = {
  rownum: number,
  SCHEDULE_NO: number,
  SCHEDULE_DT: string,
  SCHEDULE_TITLE: string,
  SCHEDULE_CONTENT: string,
}

const AttendanceSchedule = ({pickDt}:AttendanceScheduleType) => {
    const [data, setData] = useState<dataType[]>([])

    useEffect(() => {
      if (pickDt){
        axios
          .get('http://localhost:4000/api/schedule_all', {
            params : {
              pickdt : pickDt,
            }
          }).then((res) => {setData(res.data.schedule); console.log(res.data.schedule)})
          .catch((err) => console.log(err));
      }
    },[pickDt]); 


    const columns: GridColDef[] = [
      { field: 'SCHEDULE_NO', 
        headerName: '순번',
        headerAlign: 'center',
        align: 'center', 
        width: 120 ,      
        renderCell: (params) => (
          <div style={{ textAlign: 'center', width: '100%' }}>
            {params.value}
          </div>
       )
      },
      { field: 'SCHEDULE_TITLE', 
        headerName: '제목', 
        headerAlign: 'center',
        align: 'center', 
        width: 350 ,         
        renderCell: (params) => (
          <div style={{ textAlign: 'center', width: '100%' }}>
            {params.value}
          </div>
        )
      },
    ];

    const rows = data.map((item) => ({
      id: item.rownum,
      SCHEDULE_NO: item.SCHEDULE_NO,
      SCHEDULE_TITLE: item.SCHEDULE_TITLE,
    }))
    ;
    

      // const rows: GridRowsProp = [
      //   { id: 1, col1: pickDt,   col2: '스케줄1' },
      //   { id: 2, col1: '2024-07-28',   col2: '스케줄2' },
      //   { id: 3, col1: '2024-07-28',   col2: '스케줄3' },
      // ];
    return     <div style={{ height: 300, width: '100%' }}>
    <DataGrid 
     rows={rows} 
     columns={columns}         
     sx={{
          '& .MuiDataGrid-columnHeader': {
            textAlign: 'center',
          },
          '& .MuiDataGrid-cell': {
            textAlign: 'center',
          },
        }} />
  </div>
}

export default AttendanceSchedule;