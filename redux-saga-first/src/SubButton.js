import React from 'react';
import { connect } from 'react-redux';
import { sub } from './actions';

let SubButton = ({ subNumber }) => {
  return <input value={'-'} type="button" onClick={subNumber} />;
};

let mapDispatchToProps = dispatch => {
  return { subNumber: () => dispatch(sub()) };
};

SubButton = connect(null, mapDispatchToProps)(SubButton);

export default SubButton;
