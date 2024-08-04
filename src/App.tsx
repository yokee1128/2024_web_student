import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Mainpage from "./components/organism/Mainpage";
import AttendanceCheck from "./components/organism/AttendanceCheck";
import Students from "./components/organism/Students";
import Navi from "./components/molecules/Navi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Mainpage} />
          <Route path="/attendance_check" Component={AttendanceCheck} />
          <Route path="/students" Component={Students} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
