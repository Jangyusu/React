import React from 'react';
import { sub } from './actions';

function AddButton({ store }) {
  const subNumber = () => {
    store.dispatch(sub());
  };

  return <input value={'-'} type="button" onClick={subNumber} />;
}

export default AddButton;
