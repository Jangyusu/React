import React from 'react';

const NumberBaseball = () => {
  return (
    <>
      <div>처음 주어지는 숫자(정답)</div>
      <form>
        <input type="text"></input>
        <button>Insert!</button>
      </form>
      <div>
        <p>내가 입력한 숫자</p>
        <p>결과</p>
      </div>
    </>
  );
};

export default NumberBaseball;
