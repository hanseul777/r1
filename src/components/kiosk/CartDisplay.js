import React from 'react';

const CartDisplay = ({cart}) => { //정확하게는 cartState를 뿌려주는 것

    const list = cart.map((item,idx) => <li key={idx}>{item.pno} - {item.pname} - {item.price}</li>) //(item,idx) : 인덱스번호를 주는 법 => id가 없을 때 키값을 주기 위해서 사용

    return (
        <div>
            <h1>장바구니</h1>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default CartDisplay;