import React from 'react';

const Try = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.value}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default React.memo(Try);
