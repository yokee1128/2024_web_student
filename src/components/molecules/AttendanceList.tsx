import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

type AttendanceListType = {
  pickDt:string,
}

const AttendanceList = ({pickDt}:AttendanceListType) => {
    const columns: GridColDef[] = [
        { field: 'col1', headerName: '이름', width: 200 },
        { field: 'col2', headerName: '연락처', width: 200 },
      ];

      const rows: GridRowsProp = [
        { id: 1, col1: '해리포터',   col2: '010-1234-5678' },
        { id: 2, col1: '론위즐리',   col2: '010-2345-6789' },
        { id: 3, col1: '해르미온느', col2: '010-3456-7890' },
      ];
    return     <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} />
  </div>
}

export default AttendanceList;