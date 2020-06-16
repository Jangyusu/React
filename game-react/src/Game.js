import React, { useState, useRef } from 'react';

const Game = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const input = useRef(null);

  const _onChange = e => {
    setValue(e.target.value);
  };

  const _onSubmit = e => {
    e.preventDefault();

    if (first * second === parseInt(value)) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      _reslut(' 정답입니다');
    } else {
      _reslut(' 틀렸습니다');
    }
  };

  const _reslut = reslut => {
    setValue('');
    input.current.focus();

    setResult(value + reslut);
  };

  return (
    <>
      <div>
        {first} * {second} = ?
      </div>
      <form onSubmit={_onSubmit}>
        <input
          ref={input}
          type="number"
          value={value}
          onChange={_onChange}
        ></input>
        <button>정답확인</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default Game;
