import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type BasicSelectType = {
    
}

const BasicSelect = () => {
    const [selGrade, setSelGrade] = useState('');
    const handelChange = (event: SelectChangeEvent) => {
        setSelGrade(event.target.value);
    }
    return (
        <FormControl sx={{m:1, minWidth: 100}}>
            <InputLabel id="grade-select-label">학년</InputLabel>
            <Select 
                labelId="grade-select-label"
                id="grade-select"
                value={selGrade}
                label="학년"
                onChange={handelChange}
             >
            <MenuItem value={1}>1학년</MenuItem>    
            </Select>   
        </FormControl>
    )
}

export default BasicSelect;