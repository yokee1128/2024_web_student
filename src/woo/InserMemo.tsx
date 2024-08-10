import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
type InsertMemo = {
  pickDt : string|undefined,
}

const InsertMemo = ({pickDt}:InsertMemo) => {
    const [title, setTitle] = useState('');
    const [save, setSave] = useState(false);
 
    const ChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const HandleSave = () => {
        setSave(!save);
    }

    useEffect(() => {
        if(save){
          console.log( {title});
            axios.post('http://localhost:4000/api/memo/insert',{
                params : {
                  adate: {pickDt},
                  atitle: {title},
                }
                }).then((res) => {console.log( title)})
                .catch((err) => {
                    console.log(err);
                })
                .finally(() =>
                    setSave(!save)
                )
            }
    },[save])

    return (
        <div>
            <h2>메모 입력</h2>
            <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="standard-basic" label="입력하세요" variant="standard" value={title} onChange={ChangeTitle}/>
            </Box>
            <button onClick={HandleSave}>저장</button>
        </div>
    ) 
}

export default InsertMemo;