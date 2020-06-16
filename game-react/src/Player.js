import React from 'react';

const initial = ['가위', '바위', '보'];

function Player(props) {
  return (
    <div>
      <button onClick={e => props.onClick(e)}>{initial[0]}</button>
      <button onClick={e => props.onClick(e)}>{initial[1]}</button>
      <button onClick={e => props.onClick(e)}>{initial[2]}</button>
      <p>이겼습니다!</p>
    </div>
  );
}

export default Player;
