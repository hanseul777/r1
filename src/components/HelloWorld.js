import React, {useState} from 'react';
import ShowName from "./ShowName";

const HelloWorld = () => {

    const name = "Hong Gil Dong"
    const [num, setNum] = useState(10)

    return (
        <>
        <div>
            <h1>Hello World</h1>
        </div>
            <ShowName name={name} num = {num}></ShowName>
            <button onClick={() => setNum(num + 1)}>CHANGE</button>
            {/* ++num은 사용불가 -> num이 상수로 정의되어 있기 때문에 num자체는 변경해 줄 수 없다 */}
        </>
    );
};

export default HelloWorld; // 함수자체는 객체이기 때문에 ()가 있으면 결과를 반환하게 되서 ()있으면 X -> 객체 자체(컴포넌트)를 반환해야한다