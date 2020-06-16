import React, { useState, useRef } from 'react';

const WordRelay = () => {
  const [text, setText] = useState('아이유');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [list, setList] = useState('');
  const input = useRef(null);

  const _onSubmit = e => {
    e.preventDefault();

    if (text[text.length - 1] === value[0]) {
      setText(value);
      setValue('');
      setResult('성공!');

      setList([...list, text]);
    } else {
      setValue('');
      setResult('실패!');
    }

    input.current.focus();
  };

  const _onChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{text}</div>
      <form onSubmit={_onSubmit}>
        <input
          type="text"
          ref={input}
          value={value}
          onChange={_onChange}
        ></input>
        <button>Insert!</button>
      </form>
      <div>{result}</div>
      <div>{list}</div>
    </>
  );
};

export default WordRelay;
