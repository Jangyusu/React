import React, { useState, useRef } from 'react';

function WordRelaySample() {
  const [text, setText] = useState('아이유');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [list, setList] = useState([]);
  const input = useRef(null);

  const _onChange = e => {
    setValue(e.target.value);
  };

  const _onSubmit = e => {
    e.preventDefault();

    setValue('');
    input.current.focus();

    if (text[text.length - 1] === value[0]) {
      setText(value);
      setResult('성공');

      setList([...list, value]);
    } else {
      setResult('실패');
      setList([]);
    }
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
        <button type="submit">Insert!</button>
      </form>
      <div>{result}</div>
      <div>{list}</div>
    </>
  );
}

export default WordRelaySample;
