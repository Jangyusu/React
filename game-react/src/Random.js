import React from 'react';

function Random(props) {
  const { state } = props;

  return (
    <div>
      <p>상대방 : 가위</p>
      <p>나 : {state}</p>
    </div>
  );
}

export default Random;
