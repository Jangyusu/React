import React from 'react';
import { add } from './actions';

const AddButton = ({ store }) => {
  const addNumber = () => {
    store.dispatch(add());
  };

  return <input value={'+'} type="button" onClick={addNumber} />;
};

export default AddButton;
