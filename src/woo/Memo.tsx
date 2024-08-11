import {useState} from 'react';
import Body from "./components/organism/Body"
import Head from "./components/organism/Head"
import InsertMemo from "./InserMemo";
type MemoType = {
    pickDT?: string,
}

const Memo = ({pickDT}:MemoType) => {
    
    const [gubun, setGubun] = useState<string>('today');
    return (
        <div>
            <Head gubun={gubun} setGubun={setGubun}/>

      
            {gubun =='in'? <InsertMemo pickDt={pickDT}/> : <Body pickDt={pickDT} gubun={gubun} />}

            {/* <Body /> */}
        </div>
    )
}

export default Memo;