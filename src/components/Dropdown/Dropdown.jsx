import './Dropdown.css';
import React, { Component } from 'react';

class Dropdown extends Component {
  state = { visible: false };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Show' : 'Hide'}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu"> Cascase menu </div>
        )}
      </div>
    );
  }
}
export default Dropdown;
