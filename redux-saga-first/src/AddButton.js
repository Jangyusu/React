import React from 'react';
import { connect } from 'react-redux';
import { add } from './actions';

let AddButton = ({ addNumber }) => {
  return <input value={'+'} type="button" onClick={addNumber} />;
};

let mapDispatchToProps = dispatch => {
  return { addNumber: () => dispatch(add()) };
};

AddButton = connect(null, mapDispatchToProps)(AddButton);

export default AddButton;
