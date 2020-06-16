import React from 'react';

const initial = ['가위', '바위', '보'];

function Player(props) {
  const { onClick, result } = props;

  return (
    <div>
      <button onClick={e => onClick(e)}>{initial[0]}</button>
      <button onClick={e => onClick(e)}>{initial[1]}</button>
      <button onClick={e => onClick(e)}>{initial[2]}</button>
      <p>결과 : {result}</p>
    </div>
  );
}

export default Player;
