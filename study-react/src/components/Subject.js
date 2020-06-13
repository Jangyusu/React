import React, { Component } from 'react';

class Subject extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.onChangePage();
  };

  render() {
    return (
      <header>
        <h1>
          <a href="/" onClick={(e) => this.handleClick(e)}>
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
