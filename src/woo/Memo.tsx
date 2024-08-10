import {useState} from 'react';
import Body from "./components/organism/Body"
import Head from "./components/organism/Head"
import InsertMemo from "./InserMemo";
type MemoType = {
    pickDT?: string,
}

const Memo = ({pickDT}:MemoType) => {
    
    const [gubun, setGubun] = useState<string>('');
    console.log(pickDT)
    return (
        <div>
            <Head gubun={gubun} setGubun={setGubun}/>

      
            {gubun =='in'? <InsertMemo pickDt={pickDT}/> : <Body/>}

            {/* <Body /> */}
        </div>
    )
}

export default Memo;