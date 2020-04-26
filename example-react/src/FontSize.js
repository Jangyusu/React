import React, { useState } from 'react';

function FontSize() {
    const [number, setNumber] = useState(30);
    const style = {
        fontSize: number
    }

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
        console.log(number);
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <button onClick={onIncrease}>UP</button>
            <button onClick={onDecrease}>DOWN</button>
            <div>
                <textarea style={style}>안녕하세요</textarea>
            </div>
        </div>
    );
}

export default FontSize;
