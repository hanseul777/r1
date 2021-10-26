import React, {useState} from 'react';

const initState = {
    count:0,
    value:0
}

const Dice = () => {

    const [now, setNow] = useState(initState)

    const roll = () => {
        console.log("roll")//작동확인

        const newNow = {...now} //now를 새롭게 복사해준다
        console.log(newNow)
        console.log(now === newNow)

        newNow.count = now.count + 1
        newNow.value = parseInt((Math.random() * 6) + 1) //parseInt로 정수처리
        setNow(newNow)
    }

    const reset = () => {
        setNow(initState)
    }

    return (
        <div>
            <h1>COUNT : {now.count}</h1>
            <h1>VALUE : {now.value}</h1>
            <button onClick={()=> roll()}>ROLL</button>
            <button onClick={()=> reset()}>RESET</button>
        </div>
    );
};

export default Dice;