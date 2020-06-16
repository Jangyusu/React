import React from 'react';

function Random(props) {
  const { text } = props;

  return (
    <div>
      <p>상대방 : 가위</p>
      <p>나 : {text}</p>
    </div>
  );
}

export default Random;
