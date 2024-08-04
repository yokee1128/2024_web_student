import axios from "axios"
import { useEffect, useState } from "react"
import { Legend, Pie, PieChart, Tooltip } from "recharts"

type AttendacneProps = {
    pickDt: string,
    pickGrade: string,
    pickClass: string,
    attendanceCnt?: number,
    absenceCnt?: number,
    chartwith: number,
    chartheight:number,
}

type dataType = {
    attendancecnt: number,
    total: number,
}

const AttendanceChart = ({pickDt, pickGrade, pickClass, attendanceCnt, absenceCnt, chartheight, chartwith}:AttendacneProps) => {
    const [data, setData] = useState<dataType[]>([]);

    useEffect(() => {
        if(pickDt && pickGrade && pickClass){
            axios.get('http://localhost:4000/api/attendancechart',{ 
                params : {
                    pickdt : pickDt,
                    pickgrade: pickGrade,
                    pickclass: pickClass,
                }
                }).then((res) => {setData(res.data.chart)})
                .catch((err) => {
                    console.log(err);
                })
            }
    },[pickDt, pickGrade, pickClass])
    if (data.length === 0) {
        return <div>데이터를 불러오는 중...</div>;
    }
    const absencecnt = (data[0].total - data[0].attendancecnt);
    const attendancePercent = Math.round((data[0].attendancecnt / data[0].total) * 100); 
    const absencePercent = Math.round((absencecnt / data[0].total) * 100);

    const StateData = [
        {name:'출석', value: data[0].attendancecnt, fill: 'red'},
        {name:'미출석', value: absencecnt , fill: 'blue'}
    ]
    return <div>
            <PieChart width={chartwith} height={chartheight}>
            <Legend
            height={10}
            layout="vertical"
            verticalAlign="middle"
            align="right"
            iconSize={7}
            payload={[
                { value: `출석 ${attendancePercent}%`, type: 'square', color: '#EB6927' },
                { value: `미출석 ${absencePercent}%`, type: 'square', color: '#2D8CFF' },
            ]}
            />
            <Pie
            data={StateData}
            dataKey="value"
            nameKey="name"
            innerRadius={40}
            outerRadius={80}
            cx={80}
            cy={100}
            />
            <Tooltip />
            </PieChart>
        </div>
    }
export default AttendanceChart;    