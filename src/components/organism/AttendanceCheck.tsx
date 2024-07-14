
import styled from "@emotion/styled";
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Grid, Paper } from "@mui/material";
import Layout from "../layout/Layout";
import Navi from "../molecules/Navi";

const Item = styled(Paper)(({ theme }) => ({
  backgroundcolor: '#EEE',
  textAlign: 'center',
}));

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    headerAlign: 'center', 
    align: 'left', 
    width: 70 
  },
  { 
    field: 'name', 
    headerName: '이름', 
    headerAlign: 'center', 
    align: 'center', 
    width: 100 
  },
  {
    field: 'phone',
    headerName: '핸드폰번호',
    headerAlign: "center",
    align: "center",
    type: 'string',
    width: 200,
  },
  {
    field: 'address',
    headerName: '주소',
    headerAlign: 'center', 
    align: 'left', 
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 500,
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
    <div className="w-screen h-screen my-auto mx-auto flex">
      <Layout />
      
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6} md={12}>
            <Item>
              <div className="w-4/5 my-4 mr-4 h-32 bg-gray-50 content-center text-center ">
                <Navi/>
              </div>
            </Item>
          </Grid>
          <Grid item xs={6} md={12}>
            <Item>
              2
            </Item>
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
            <Item>4</Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
  
};

export default AttendanceCheck;