import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function InsertBtn() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      {/* <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div> */}
      {/* <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          수정
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div> */}
      <div>
        {/* <Button variant="contained" size="small">
          Small
        </Button> */}
        <Button variant="contained" size="medium">
          수정
        </Button>
        {/* <Button variant="contained" size="large">
          Large
        </Button> */}
      </div>
    </Box>
  );
}