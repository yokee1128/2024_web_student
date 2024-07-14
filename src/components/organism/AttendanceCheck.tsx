import styled from "@emotion/styled";
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";



const Item = styled(Paper)(({ theme }) => ({
  backgroundcolor: '#EEE',
  textAlign: 'center',
}));

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: '이름', width: 130 },
  {
    field: 'phone',
    headerName: '핸드폰번호',
    headerAlign: "center",
    align: "center",
    type: 'string',
    width: 200,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.name || ''}`,
  },
];

const rows = [
  { id: 1, name: '김영진', phone: '010-5050-3030' },
  { id: 2, name: '홍길동', phone: '010-5050-3030' },
  { id: 3, name: '고길동', phone: '010-5050-3030' },
  { id: 4, name: '모길동', phone: '010-5050-3030' },
  { id: 5, name: '장나영', phone: '010-5050-3030' },
  { id: 6, name: '마젠타', phone: '010-5050-3030' },
  { id: 7, name: '이시연', phone: '010-5050-3030' },
  { id: 8, name: '이아희', phone: '010-5050-3030' },
  { id: 9, name: '이지혜', phone: '010-5050-3030' },
];
const AttendanceCheck = () => {

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} md={12}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6} md={12}>
          <Item>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} md={12}>
          <Item>
            3
          </Item>
        </Grid>
        <Grid item xs={6} md={12}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </div>
  );
  
};

export default AttendanceCheck;
