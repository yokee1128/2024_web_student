import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
        {/* <DatePicker
          label={'"year", "month" and "day"'}
          views={['year', 'month', 'day']}
        />
        <DatePicker label={'"day"'} views={['day']} /> */}
        <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
      </DemoContainer>
    </LocalizationProvider>
  );
}