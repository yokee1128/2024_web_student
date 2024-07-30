import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

type AttendanceScheduleType = {
  pickDt : string,
}

const AttendanceSchedule = ({pickDt}:AttendanceScheduleType) => {
      const columns: GridColDef[] = [
        { field: 'col1', headerName: '일자', width: 200 },
        { field: 'col2', headerName: '제목', width: 200 },
      ];

      const rows: GridRowsProp = [
        { id: 1, col1: pickDt,   col2: '스케줄1' },
        { id: 2, col1: '2024-07-28',   col2: '스케줄2' },
        { id: 3, col1: '2024-07-28',   col2: '스케줄3' },
      ];
    return     <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} />
  </div>
}

export default AttendanceSchedule;