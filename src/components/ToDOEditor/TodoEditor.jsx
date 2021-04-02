import React, { Component } from 'react';

class TodoEditor extends Component {
  state = { message: '' };
  render() {
    return (
      <form className="TodoEditor">
        <textarea value={this.state.message}> </textarea>
      </form>
    );
  }
}

export default TodoEditor;
