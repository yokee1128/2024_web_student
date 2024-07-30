import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";


export default function BasicDateCalendar(props:any) {

  const ChangeHandle = (newValue: Dayjs | null) => {
    const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
    props.setPickDt(formattedDate)
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar   value={props.pickdt} onChange={ChangeHandle} />
    </LocalizationProvider>
  );
}
