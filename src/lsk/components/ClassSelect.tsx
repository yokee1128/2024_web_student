import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type BasicSelectType = {
  inputlabelname: string,
  name: [],
  value: string,
  handleChange: (event: SelectChangeEvent<string>) => void,
}

const ClassSelect = ({inputlabelname, name, value, handleChange}:BasicSelectType) => {
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
                <MenuItem value={1}>{name}</MenuItem>
                <MenuItem value={2}>{name}</MenuItem>
                <MenuItem value={3}>{name}</MenuItem>
            </Select>   
        </FormControl>
    )
}

export default ClassSelect;