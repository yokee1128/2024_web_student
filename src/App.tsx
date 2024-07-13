import { Chip } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/organism/Layout";
import Mainpage from "./components/organism/Mainpage";
import AttendanceCheck from "./components/organism/AttendanceCheck";
import Students from "./components/organism/Students";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/mainpage" Component={Mainpage} />
          <Route path="/attendance_check" Component={AttendanceCheck} />
          <Route path="/students" Component={Students} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
