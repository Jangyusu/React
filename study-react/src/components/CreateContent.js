import React, { Component } from 'react';

class CreateContent extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.onSubmit(e.target.title.value, e.target.desc.value);
  }

  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={(e) => this.handleClick(e)}
        >
          <p>
            <input tpye="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
