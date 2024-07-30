import { Legend, Pie, PieChart, Tooltip } from "recharts"

type AttendacneProps = {
    pickDt: string,
    attendanceCnt: number,
    absenceCnt: number,
    chartwith: number,
    chartheight:number,
}

const AttendanceChart = ({pickDt, attendanceCnt, absenceCnt, chartheight, chartwith}:AttendacneProps) => {
    const StateData = [
        {name:'출석', value: attendanceCnt, fill: 'red'},
        {name:'미출석', value: absenceCnt, fill: 'blue'}
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
                { value: `출석 ${attendanceCnt}%`, type: 'square', color: '#EB6927' },
                { value: `미출석 ${absenceCnt}%`, type: 'square', color: '#2D8CFF' },
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