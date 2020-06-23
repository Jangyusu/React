import React, { Component } from 'react';

class WordRelaySample extends Component {
  state = {
    text: '아이유',
    value: '',
    result: '',
    list: [],
  };

  render() {
    const { text, value, result, list } = this.state;

    const _onChange = e => {
      this.setState({
        ...this.state,
        value: e.target.value,
      });
    };

    const _onSubmit = e => {
      e.preventDefault();
      e.target.input.focus();

      this.setState({
        ...this.state,
        value: '',
      });

      if (text[text.length - 1] === value[0]) {
        this.setState({
          ...this.state,
          text: value,
          result: '성공',
          list: [...list, value],
        });
      } else {
        this.setState({
          ...this.state,
          result: '실패',
          list: [],
        });
      }
    };

    return (
      <>
        <div>{text}</div>
        <form onSubmit={_onSubmit}>
          <input
            type="text"
            name="input"
            value={value}
            onChange={_onChange}
          ></input>
          <button type="submit">Insert!</button>
        </form>
        <div>{result}</div>
        <div>{list}</div>
      </>
    );
  }
}

export default WordRelaySample;
