import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>

        <div>
          {options.map(({ label, color }, index) => (
            <span
              key={label}
              className="ColorPicker__option"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
