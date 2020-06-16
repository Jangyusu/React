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
      setFirst();
    } else {
      console.log('b');
    }
  };

  return (
    <>
      <div>
        {first} * {second} = ?
      </div>
      <form onSubmit={_onSubmit}>
        <input type="number" value={value} onChange={_onChange}></input>
        <button>정답확인</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default Game;
