
import Layout from "../layout/Layout";
import Navi from "../molecules/Navi";
import AttendanceTable from "../../KYJ/AttendanceTable";
import DatePickerValue from "../../KYJ/DatePicker";
import InsertBtn from "../../KYJ/InsertBtn";

const AttendanceCheck = () => {

  return (
    <div className="w-screen h-screen my-auto mx-auto flex">
      <Layout />
      <div className="w-4/5 my-4 mr-4 h-scree flex flex-col">
        <div className="w-full h-32 bg-gray-50 content-center text-center">
          <Navi/>
        </div>
        <div className="w-full h-full flex">
          <div className="w-full h-full  border-red-500">
            <div className="w-full h-1/9 border m-2 border-red-500">
              {/* <div className="w-full h-1/4 p-3 flex"> */}
              <div className="w-1/3 h-full m-2">
                <DatePickerValue/>
              </div>
            </div>
            <div className="w-full h-5/9">
              <div className="w-full h-full border m-2 border-red-500">
                <AttendanceTable/>
              </div>
            </div>
            <div className="w-full h-1/9">
              <div className="w-1/10 h-full border m-2 border-red-500 text-center">
                <InsertBtn/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCheck;