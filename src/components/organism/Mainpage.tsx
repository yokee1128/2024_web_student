import Navi from "../molecules/Navi";
import Layout from "../layout/Layout";
import { DateCalendar } from "@mui/x-date-pickers";
import BasicDateCalendar from "../../styles/Calendar";

const Mainpage = () => {
  return (
    <div className="w-screen h-screen my-auto mx-auto flex">
      <Layout />
      <div className="w-4/5 my-4 mr-4 h-32 bg-gray-50 content-center text-center ">
      <Navi/>
      <BasicDateCalendar/>
      </div>
    </div>
  );
};

export default Mainpage;
