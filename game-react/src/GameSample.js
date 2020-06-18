import React, { useState, useRef } from 'react';

function GameSample() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const input = useRef(null);

  const onClick = e => {
    e.preventDefault();

    setValue('');
    input.current.focus();

    if (first * second === parseInt(value)) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));

      setResult('정답입니다.');
    } else {
      setResult('틀렸습니다.');
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className="box">
      <div>
        {first} * {second} = ?
      </div>
      <form>
        <input
          type="number"
          value={value}
          onChange={onChange}
          ref={input}
        ></input>
        <button onClick={onClick}>정답확인</button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default GameSample;
