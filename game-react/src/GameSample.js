import React, { Component } from 'react';

class GameSample extends Component {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
  };

  render() {
    const { first, second, value } = this.state;

    const onSubmit = e => {
      e.preventDefault();
      e.target.input.focus();

      this.setState({
        value: '',
      });

      if (first * second === parseInt(value)) {
        this.setState({
          ...this.state,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
          result: '정답입니다.',
        });
      } else {
        this.setState({
          ...this.state,
          value: '',
          result: '틀렸습니다.',
        });
      }
    };

    const onChange = e => {
      this.setState({
        ...this.state,
        value: e.target.value,
      });
    };

    return (
      <div className="box">
        <div>
          {this.state.first} * {this.state.second} = ?
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="number"
            name="input"
            value={this.state.value}
            onChange={onChange}
          ></input>
          <button>정답확인</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default GameSample;
