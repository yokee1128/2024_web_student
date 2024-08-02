import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type BasicSelectType = {
  inputlabelname: string,
  menuitems?: {
    code: string,
    name: string,
  }[],
  value: string,
  handleChange: (event: SelectChangeEvent<string>) => void,
}

const BasicSelect = ({inputlabelname, menuitems = [], value, handleChange}:BasicSelectType) => {
    // const [selGrade, setSelGrade] = useState('');
    // const handelChange = (event: SelectChangeEvent) => {
    //     setSelGrade(event.target.value);
    // }
    return (
        <FormControl sx={{m:1, minWidth: 100}}>
            <InputLabel id="grade-select-label">{inputlabelname}</InputLabel>
            <Select 
                labelId="grade-select-label"
                id="grade-select"
                value={value}
                onChange={handleChange}
             >
            {menuitems.map((item) => (
                <MenuItem key={item.code} value={item.code}>{item.name}</MenuItem>
            ))}
            </Select>   
        </FormControl>
    )
}

export default BasicSelect;