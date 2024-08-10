import {useEffect, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import CodeIcon from "@mui/icons-material/Code";
import { userInput } from "../../utils/util";
import { INFO } from "../../constants/infoMessage";
import axios from "axios";
import { Link } from "react-router-dom"

type Props = {
  gubun: string,
  setGubun: (gubun:string) => void,
}
 const  Head = ({gubun,setGubun}:Props) => {
  const [inputtitle, setInputtitle] = useState('');
  // const addItem = () =>  { 
  //   setInputtitle(userInput(INFO.TODO));   
  //   console.log(inputtitle);
  // };

  const changingubun = () => {
    setGubun("in");
  }

  const changnullgubun = () => {
    setGubun("");
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}

            onClick={changnullgubun}
          >
            <CheckIcon />
            오늘
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CodeIcon />
            주간
          </IconButton>
          <Button color="inherit" onClick={changingubun}>+</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Head;