import React, { Component } from "react";
import RadioButton from "./radiobutton";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["Random", "Funny", "Awsome"],
      media: ["Music", "SVG", "Text"],
      selected: ""
    };
  }

  refCallback = element => {
    this.props.getSelected(this.state.selected);
  };

  handleRadioButtonChange = (section, category) => {
    this.setState(
      {
        selected: section + " " + category
      },
      () => {
        this.refCallback(); //callback to App.js with the selected radiobutton
      }
    );
  };

  createRadioButton = (m, c) => {
    return (
      <div key={c}>
        <RadioButton
          id={c}
          value={c}
          handleRadioButtonChange={this.handleRadioButtonChange}
          category={c}
          section={m}
        />
        <label htmlFor={c}>{c}</label>
      </div>
    );
  };

  createRadioButtons = m => {
    return this.state.categories.map(c => this.createRadioButton(m, c));
  };

  createSections = () => {
    return this.state.media.map(m => (
      <div className={m} key={m} ref={this.refCallback}>
        <legend>{m}</legend>
        {this.createRadioButtons(m)}
      </div>
    ));
  };

  render() {
    return <div className="selector">{this.createSections()}</div>;
  }
}

export default Selector;
