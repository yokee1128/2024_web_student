import Navi from "../molecules/Navi";
import Layout from "../layout/Layout";
import { DateCalendar } from "@mui/x-date-pickers";
import BasicDateCalendar from "../../styles/Calendar";
import AttendanceChart from "../molecules/AttendanceChart";
import AttendanceList from "../molecules/AttendanceList";
import AttendanceSchedule from "../molecules/AttendanceSchedule";
import {useState} from 'react'
import dayjs from "dayjs";
import BasicSelect from "../atom/BasicSelect";

const Mainpage = () => {
  const currentDt = dayjs().format('YYYY-MM-DD');
  const [pickDate, setPickDate] = useState<string>(currentDt);

  return (
    <div className="w-screen h-screen my-auto mx-auto flex">
      <Layout />
      <div className="flex flex-col w-4/5 h-screen mr-4">
        <div className="w-full my-4 mr-4 h-1/5 bg-gray-50 content-center text-center">
          <Navi />
        </div>
        <div><BasicSelect /></div>
        <div className="w-full h-4/5 flex gap-4 border border-red-500">
          <div className="w-2/3 h-full flex flex-col gap-4">
            <div className="w-full h-3/5 flex gap-4 border border-red-500">
              <div className="w-2/5 h-4/5 self-center content-center text-center border rounded-full border-red-500 ">
                출석율=출첵인원 / 총인원수
                <AttendanceChart pickDt={pickDate} attendanceCnt={3} absenceCnt={5} chartheight={200} chartwith={280}/>
              </div>
              <div className="w-3/5 h-full self-center content-center text-center border border-red-500 ">
                출석현황 summary
                <AttendanceList pickDt={pickDate} />
              </div>
            </div>
            <div className="w-full h-2/5 border border-red-500">
              선생님 메모장
            </div>
          </div>
          <div className="w-1/3 h-full flex flex-col gap-4 border border-red-500">
            <div className="w-full h-1/2 border border-red-500">
              <BasicDateCalendar pickDt={pickDate} setPickDt={setPickDate} />
            </div>
            <div className="w-full h-1/2 border border-red-500 ">
              이번주 행사
              <AttendanceSchedule pickDt={pickDate}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;