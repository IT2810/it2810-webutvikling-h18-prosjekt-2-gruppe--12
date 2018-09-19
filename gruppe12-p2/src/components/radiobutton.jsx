import React, { Component } from "react";

class RadioButton extends Component {
  state = {};

  toggleRadioButtonChange = () => {
    this.props.handleRadioButtonChange(this.props.section, this.props.category);
  };

  render() {
    return (
      <input
        type="radio"
        name={this.props.section}
        onChange={this.toggleRadioButtonChange}
      />
    );
  }
}

export default RadioButton;
