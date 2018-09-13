import React, { Component } from "react";

class Tab extends Component {
  state = {};
  render() {
    return <div>this is the tab content for {this.props.tabIndex}</div>;
  }
}

export default Tab;
