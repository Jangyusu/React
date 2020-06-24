import React, { Component } from 'react';
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

class NumberBaseballClass extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  render() {
    const { result, value, answer, tries } = this.state;

    const onSubmitForm = e => {
      e.preventDefault();

      this.setState({
        ...this.state,
        value: '',
      });
      e.target.input.focus();

      if (value === answer.join('')) {
        //정답일 때

        this.setState({
          ...this.state,
          value: '',
          result: '홈런!',
          answer: getNumbers(),
          tries: [],
        });
      } else {
        //정답이 아닐 때

        const valueArray = value.split('').map(v => parseInt(v));
        let strike = 0;
        let ball = 0;

        if (tries.length >= 9) {
          //10번 틀렸을 때
          this.setState({
            ...this.state,
            result: `정답은 ${answer}였습니다.`,
            answer: getNumbers(),
            tries: [],
          });
          alert('게임을 다시 시작합니다.');
        } else {
          //10번 미만으로 틀렸을 때
          for (let i = 0; i < 4; i += 1) {
            if (valueArray[i] === answer[i]) {
              strike += 1;
            } else if (answer.includes(valueArray[i])) {
              ball += 1;
            }
          }

          this.setState({
            ...this.state,
            result: '',
            value: '',
            tries: [
              ...tries,
              {
                value: value,
                result: `${strike} 스트라이크, ${ball}볼 입니다.`,
              },
            ],
          });
        }
      }
    };

    const onChangeInput = e => {
      const { value } = e.target;

      this.setState({
        ...this.state,
        value: value,
      });
    };

    const isReset = () => {
      this.setState({
        ...this.state,
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
      });
    };

    return (
      <>
        <h1>{result}</h1>
        <div>정답 : {answer}</div>
        <form onSubmit={onSubmitForm}>
          <input
            name="input"
            maxLength={4}
            value={value}
            onChange={onChangeInput}
          ></input>
          <button>Insert!</button>
          <button type="reset" onClick={isReset}>
            Reset
          </button>
        </form>
        <div>시도 : {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return <Try key={i} tryInfo={v} />;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseballClass;
