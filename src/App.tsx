import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Mainpage from "./components/organism/Mainpage";
import AttendanceCheck from "./lsk/components/AttendanceCheck";
import Students from "./components/organism/Students";
import Memo from "./woo/Memo"
import Navi from "./components/molecules/Navi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Mainpage} />
          <Route path="/attendance_check" Component={AttendanceCheck} />
          <Route path="/students" Component={Students} />
          <Route path="/memo" Component={Memo} />
            <Route path=':gubun' Component={Memo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
