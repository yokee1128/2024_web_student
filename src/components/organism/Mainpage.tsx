import Navi from "../molecules/Navi";
import Layout from "../layout/Layout";
import { DateCalendar } from "@mui/x-date-pickers";
import BasicDateCalendar from "../../styles/Calendar";
import AttendanceChart from "../molecules/AttendanceChart";
import AttendanceList from "../molecules/AttendanceList";
import AttendanceSchedule from "../molecules/AttendanceSchedule";
import {useState, useEffect} from 'react'
import dayjs from "dayjs";
import BasicSelect from "../atom/BasicSelect";
import axios from "axios";

type GradeType = {
  code: string,
  name: string,
}

const Mainpage = () => {
  const currentDt = dayjs().format('YYYY-MM-DD');
  const [pickDate, setPickDate] = useState<string>(currentDt);
  const [pickGrade, setPickGrade] = useState<string>('');
  const [pickClass, setPickClass] = useState<string>('');

  const handleGradeChange = (event: any) => {
    setPickGrade(event.target.value);
    setPickClass('');
  };

  const handleClassChange = (event: any) => {
    setPickClass(event.target.value);
  };  


  const [grades, setGrades] = useState<GradeType[]>([]);
  const [units, setUnits] = useState<GradeType[]>([]);

  useEffect(()=>{
    axios
      .get('http://localhost:4000/api/getgrade')
      .then((res) => {
        setGrades(res.data.grade.map((item:any) => ({
          code: item.code,
          name: item.name,
        })))
      })
      .catch((error) => console.log(error));
  },[])

  useEffect(()=>{
    if (pickGrade){
        axios
          .get('http://localhost:4000/api/getclass',{
            params : {
              pickgrade : pickGrade
            }
          })
          .then((res) => {
            setUnits(res.data.class.map((item:any) => ({
              code: item.code,
              name: item.name,
            })))
          })
          .catch((error) => console.log(error));
    }  
  },[pickGrade])

//   const grade = [{
//     code : '1',
//     name : '1학년'
//   },{
//     code: '2',
//     name: '2학년'
//   },{
//     code: '3',
//     name: '3학년'
//   }
// ]

// const classs = [
//   {code:'1', name: '1반'},
//   {code:'2', name: '2반'},
//   {code:'3', name: '3반'}
// ]
  return (
    <div className="w-screen h-screen my-auto mx-auto flex">
      <Layout />
      <div className="flex flex-col w-4/5 h-screen mr-4">
        <div className="w-full my-4 mr-4 h-1/5 bg-gray-50 content-center text-center">
          <Navi />
        </div>
        <div>
          <BasicSelect inputlabelname="학년" menuitems={grades} value={pickGrade}  handleChange={handleGradeChange}/>
          <BasicSelect inputlabelname="반" menuitems={units}  value={pickClass} handleChange={handleClassChange} />
        </div>
        <div className="w-full h-4/5 flex gap-4 border border-red-500">
          <div className="w-2/3 h-full flex flex-col gap-4">
            <div className="w-full h-3/5 flex gap-4 border border-red-500">
              <div className="w-2/5 h-4/5 self-center content-center text-center border rounded-full border-red-500 ">
                출석율 = 출첵인원 / 총인원수
                <AttendanceChart pickDt={pickDate} pickGrade={pickGrade} pickClass={pickClass} attendanceCnt={3} absenceCnt={5} chartheight={200} chartwith={280}/>
              </div>
              <div className="w-3/5 h-full self-center content-center text-center border border-red-500 ">
                출석현황 summary
                <AttendanceList pickDt={pickDate} pickGrade={pickGrade} pickClass={pickClass}  />
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