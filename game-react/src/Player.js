import React, { useCallback } from 'react';

function onClick(e) {
  console.log(e.target.value);
}

function Player() {
  return (
    <div>
      <button onClick={onClick} value="가위">
        가위
      </button>
      <button>바위</button>
      <button>보</button>
      <p>이겼습니다!</p>
    </div>
  );
}

export default Player;
