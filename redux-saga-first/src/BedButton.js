import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callData } from './actions';

class BedButton extends Component {
  render() {
    return <input value={'bed'} type="button" onClick={this.props.callData} />;
  }
}

let mapDispatchToProps = (dispatch /*ownProps*/) => {
  return {
    callData: () => dispatch(callData()),
  };
};

BedButton = connect(null, mapDispatchToProps)(BedButton);

export default BedButton;
