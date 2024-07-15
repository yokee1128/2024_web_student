import Navi from "../molecules/Navi";
import Layout from "../layout/Layout";
import { DateCalendar } from "@mui/x-date-pickers";
import BasicDateCalendar from "../../styles/Calendar";

const Mainpage = () => {
  return (
    <div className="w-screen h-screen my-auto mx-auto flex">
      <Layout />
      <div className="w-4/5 my-4 mr-4 h-scree flex flex-col">
        <div className="w-full h-32 bg-gray-50 content-center text-center">
          <Navi />
        </div>
        <div className="w-full h-full flex">
          <div className="w-3/5 h-full border m-2 border-red-500">
            <div className="w-full h-1/2 p-3 flex">
              <div className="w-1/2 h-full rounded-full border border-red-800 m-2"></div>
              <div className="w-1/2 h-full border border-red-500"></div>
            </div>
            <div className="w-full h-1/2 p-3 border border-blue-400"></div>
          </div>
          <div className="w-2/5 h-screen-minus-128">
            <div className="w-full h-1/2">
              <BasicDateCalendar />
            </div>
            <div className="w-full h-1/2 border m-2 border-red-500">
              <span>event</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
