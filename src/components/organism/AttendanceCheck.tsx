import { Chip } from "@mui/material";
import Layout from "../layout/Layout";
import Navi from "../molecules/Navi";

const AttendanceCheck = () => {
  return (
    <div className="w-screen h-screen my-auto mx-auto flex">
      <Layout />
      <div className="w-4/5 my-4 mr-4 h-32 bg-gray-50 content-center text-center ">
      <Navi/>
      </div>
    </div>
  );
};

export default AttendanceCheck;
