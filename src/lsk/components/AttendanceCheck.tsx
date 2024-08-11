
import Layout from "../../components/layout/Layout";
import Navi from "../../components/molecules/Navi";
import DatePickerValue from "../attendance/DatePicker";
import AttendanceTable from "../attendance/AttendanceTable";
import InsertBtn from "../attendance/InsertBtn";
import ClassSelect from "./ClassSelect";
import React, { useEffect, useState } from "react";
import axios from "axios";

// type GradeType = {
//   code: string,
//   name: string,
// }

const AttendanceCheck = () => {
  const grades = ['1', '2', '3'];
  const units = ['1', '2', '3'];
  const [pickGrade, setPickGrade] = useState('');
  const [pickClass, setPickClass] = useState('');

  const handleGradeChange = (event: any) => {
    setPickGrade(event.target.value);
    setPickClass('');
  };

  const handleClassChange = (event: any) => {
    setPickClass(event.target.value);
  };
  
  return (
    <div className="w-screen h-screen my-auto mx-auto flex">
      <Layout />
      <div className="flex flex-col w-4/5 h-screen mr-4">
        <div className="w-full my-4 mr-4 h-1/5 bg-gray-50 content-center text-center">
          <Navi/>
        </div>
        <div className="w-full h-4/5 p-4">
          <div className="w-full h-1/10 pb-1">
            <div className="w-full h-full pr-2 flex items-center justify-between">
              <div className="flex space-x-4 w-full">
                {/* <ClassSelect inputlabelname="학년" name={grades} value={pickGrade}  handleChange={handleGradeChange}/>
                <ClassSelect inputlabelname="반" name={units}  value={pickClass} handleChange={handleClassChange} /> */}
              </div>
                <DatePickerValue/>
              {/* <span className="w-1/3 h-full">
              </span> */}
            </div>
          </div>
          <div className="w-full h-2/4 border border-black-500">
            {/* <div className="w-full h-full border border-red-500"> */}
              <AttendanceTable/>
            {/* </div> */}
          </div>
          {/* <div className="w-full h-1/10 pt-1 border border-blue-500">
            <div className="w-1/10 h-full border border-green-500 text-center">
              <InsertBtn/>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  );
  
};

export default AttendanceCheck;