import React, {useState} from 'react';
import ShowName from "./ShowName";
import Dice from "./Dice";
import CountContainer from "./counter/CountContainer";
import KioskContainer from "./kiosk/KioskContainer";

const initState = {value: 1} //상수처럼 사용하기 위해서 전역변수로 지정 (initState : 초기상태)

const HelloWorld = () => {

    const name = "Hong Gil Dong"
    const [num, setNum] = useState({value:10})

    const change = () => {
        console.log(num)
        const newNum = {value:num.value + 1}
        setNum(newNum)
    }

    return (
        <>
            <Dice></Dice>
        <div>
            <h1>Hello World</h1>
        </div>
            <h1>{num.value}</h1>
            <button onClick={() => change()}>CHANGE</button>
            {/* ++num은 사용불가 -> num이 상수로 정의되어 있기 때문에 num자체는 변경해 줄 수 없다 */}

            <CountContainer></CountContainer>
            <CountContainer></CountContainer>

            <KioskContainer></KioskContainer>
        </>
    );
};

export default HelloWorld; // 함수자체는 객체이기 때문에 ()가 있으면 결과를 반환하게 되서 ()있으면 X -> 객체 자체(컴포넌트)를 반환해야한다