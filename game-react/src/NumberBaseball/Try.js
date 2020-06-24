import React, { Component } from 'react';

class Try extends Component {
  render() {
    const { value, result } = this.props.tryInfo;

    return (
      <li>
        <div>{value}</div>
        <div>{result}</div>
      </li>
    );
  }
}

export default React.memo(Try);
