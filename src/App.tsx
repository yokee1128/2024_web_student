import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Mainpage from "./components/organism/Mainpage";
import AttendanceCheck from "./lsk/components/AttendanceCheck";
import Students from "./components/organism/Students";
<<<<<<< HEAD
=======
import Memo from "./woo/Memo"
>>>>>>> c1e7ea0f25383e5a62f8022251d09efc65511e20
import Navi from "./components/molecules/Navi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Mainpage} />
          <Route path="/attendance_check" Component={AttendanceCheck} />
          <Route path="/students" Component={Students} />
<<<<<<< HEAD
=======
          <Route path="/memo" Component={Memo} />
            <Route path=':gubun' Component={Memo} />
>>>>>>> c1e7ea0f25383e5a62f8022251d09efc65511e20
      </Routes>
    </BrowserRouter>
  );
}

export default App;
