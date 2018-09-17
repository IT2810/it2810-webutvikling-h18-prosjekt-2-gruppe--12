import React, { Component } from "react";

class Tab extends Component {
  state = {};

  componentWillUpdate(prevProps) {
    console.log("Compnent updated; recived new props", prevProps);
    this.updateTabContent();
  }

  updateTabContent = () => {
    console.log("Please update the content :)");
    //TODO: change content of tab
  };

  render() {
    return (
      <div>
        this is the tab content for {this.props.tabIndex}
        <br />
        Music: {this.props.musicSelected}
        <br />
        SVG: {this.props.svgSelected}
        <br />
        Text: {this.props.textSelected}
      </div>
    );
  }
}

export default Tab;
