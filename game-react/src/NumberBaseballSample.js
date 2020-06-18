import React, { useState, useRef } from 'react';
import Try from './Try';

const getNumbers = () => {
  //숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];

  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }

  return array;
};

const NumberBaseballSample = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers); // [1,3,5,7]
  const [tries, setTries] = useState([]);
  const input = useRef(null);

  const onSubmitForm = e => {
    e.preventDefault();

    setValue('');
    input.current.focus();

    console.log(answer);
    if (value === answer.join('')) {
      //정답일 때

      setTries([
        ...tries,
        {
          value: value,
          result: '홈런!',
        },
      ]);
      setAnswer(getNumbers);
    } else {
      //정답이 아닐 때
      const valueArray = value.split('').map(v => parseInt(v));
      let strike = 0;
      let ball = 0;

      if (tries.length >= 9) {
        //10번 틀렸을 때
        setResult(`정답은 ${answer}였습니다.`);
        alert('게임을 다시 시작합니다.');
        setTries([]);
        setAnswer(getNumbers);
      } else {
        //10번 미만으로 틀렸을 때
        for (let i = 0; i < 4; i += 1) {
          if (valueArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(valueArray[i])) {
            ball += 1;
          }
        }

        setTries([
          ...tries,
          {
            value: value,
            result: `${strike} 스트라이크, ${ball}볼 입니다.`,
          },
        ]);
      }
    }
  };

  const onChangeInput = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          maxLength={4}
          value={value}
          onChange={onChangeInput}
          ref={input}
        ></input>
        <button>Insert!</button>
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={i} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default NumberBaseballSample;
