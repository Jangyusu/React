import React, { useState } from 'react';
import Try from './Try';

function getNumbers() {
  //숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
}

const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = () => {};

  const onChangeInput = () => {};

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput}></input>
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {['like1', 'like2', 'like3', 'like4', 'like5'].map((v) => {
          return <li>{v}</li>;
        })}
        {/* <Try /> */}
      </ul>
    </>
  );
};

export default NumberBaseball;
